import json
import os

class TcodeManager:
    def __init__(self, filename='tcodes.json'):
        self.filename = filename

    def _read_file(self):
        if os.path.exists(self.filename):
            with open(self.filename, 'r') as file:
                return json.load(file)
        return {}

    def _write_file(self, data):
        with open(self.filename, 'w') as file:
            json.dump(data, file, indent=4)

    def add_tcode(self, tcode, description, account_numbers):
        data = self._read_file()
        
        # If TCODE already exists, update its description and account_numbers
        if tcode in data:
            data[tcode]['description'] = description
            data[tcode]['account_numbers'] = account_numbers
        else:
            data[tcode] = {
                'description': description,
                'account_numbers': account_numbers
            }
        
        self._write_file(data)


    def get_tcodes(self, tcode):
        data = self._read_file()
        return data.keys()

    def remove_tcode(self, tcode):
        data = self._read_file()
        if tcode in data:
            del data[tcode]
            self._write_file(data)

    def list_tcodes(self):
        return self._read_file()


# Example usage:
if __name__ == '__main__':
    manager = TcodeManager()
    manager.add_tcode('TCODE1', 'Description for TCODE1', ['ACC001', 'ACC002'])
    manager.add_tcode('TCODE2', 'Description for TCODE2', ['ACC003', 'ACC004'])
    manager.add_tcode('TCODE3', 'Description for TCODE2', ['ACC003', 'ACC004'])

    print(manager.list_tcodes())
    print(manager.get_tcodes('TCODE1'))

    manager.remove_tcode('TCODE1')
    # print(manager.list_tcodes().items())

