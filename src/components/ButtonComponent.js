import React from "react";
class ButtonComponent extends React.Component {
    // Function to call the endpoint
    callEndpoint = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/trial_balance', {
                method: 'POST',
                headers: {
                    'start': '15/09/2023',
                    'end': '30/09/2023'
                    // 'start': 'YourHeaderValue'  // Set your header value here
                }
                // body: JSON.stringify(data)  // If you need to send a request body
            });
            console.log("debug", await response)
            const data = await response.json();
            console.log("debug", data);
        } catch (error) {
            console.error("There was an error fetching the data", error);
        }
    }

    render() {
        return (
            <button onClick={this.callEndpoint}>
                Call Endpoint
            </button>
        );
    }
}

export default ButtonComponent;