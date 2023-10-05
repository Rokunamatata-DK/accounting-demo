from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import logging
from datetime import datetime
from TcodeManager import TcodeManager
app = Flask(__name__)

# Store the data in-memory for simplicity
data = []
manager = TcodeManager()
cors = CORS(app, resources={r"/*": {"origins": "*"}})


# @app.route('/')
# def core_endpoint():
#     return jsonify({
#         "message": "Welcome to the core endpoint!",
#         "status": "success"
#     })



@app.route('/upload', methods=['Post'])
def upload_csv():
    global data
    file = request.files['file']
    content = file.stream.read().decode("utf-8")
    csv_data = list(csv.DictReader(content.splitlines()))
    for row in csv_data:
        row['Tcode'] = '' 
    data = csv_data
    # transactionManager.store_csv_data(csv_data)
    app.logger.debug(csv_data[0:2])
    return jsonify({"message": "CSV uploaded successfully!"}), 200

@app.route('/scan', methods=['Get'])
def scanTcode():
    for row in data:
        for tocde, tcode_row in manager.list_tcodes().items():
            if row['Details'] in tcode_row['account_numbers']:
                app.logger.debug("match tcode",row['Details'])
                row["Tcode"]= tocde
    return jsonify({ "trialBalance":  data})

@app.route('/trial_balance', methods=['POST'])
def get_trial_balance():
    app.logger.info('Info level log')
    app.logger.warning('Warning level log')

    start_date_input = request.headers.get('start')
    end_date_input = request.headers.get('end')

    

    filtered_data = data
    if start_date_input and end_date_input:
        start_date = datetime.strptime(start_date_input, '%d/%m/%Y')
        end_date = datetime.strptime(end_date_input, '%d/%m/%Y')
        app.logger.debug("debug", start_date, end_date)
        filtered_data = filter_by_date(data, start_date, end_date)

    categorized = {}
    
    for item in filtered_data:
        tcode = item['Tcode']
        if tcode not in categorized.keys():
            categorized[tcode]=[]
        categorized.get(tcode).append(item)
                    
    total_debit = sum(float(row['Amount'])
                      for row in filtered_data if float(row['Amount']) < 0)
    total_credit = sum(float(row['Amount'])
                       for row in filtered_data if float(row['Amount']) > 0)

    return jsonify({
        "trialBalance": categorized,
        "Total_Debits": abs(total_debit),
        "Total_Credits": total_credit
    })

@app.route('/transaction', methods=['Get'])
def get_transactions():


    return jsonify({
       transactionManager.list_transaction()
    })



def filter_by_date(data, start_date, end_date):
    filtered_data = []
    for row in data:
        date = datetime.strptime(row['Date'], '%d/%m/%Y')
        if start_date <= date <= end_date:
            filtered_data.append(row)
    return filtered_data


@app.route('/', methods=['GET'])
def index():
    return "Flask server running1"


@app.route('/tcodes', methods=['GET'])
def list_tcodes():
    return jsonify(manager.list_tcodes())

@app.route('/tcode', methods=['POST'])
def add_or_update_tcode():
    data = request.json
    tcode = data.get('tcode')
    description = data.get('description')
    account_numbers = data.get('account_numbers')
    
    if not tcode or not description or not account_numbers:
        return jsonify({"error": "Missing required fields"}), 400

    manager.add_tcode(tcode, description, account_numbers)
    return jsonify({"message": "TCODE added/updated successfully"}), 200

if __name__ == "__main__":
    app.run(port=5000, debug=True)
