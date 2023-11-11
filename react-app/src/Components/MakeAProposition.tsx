import React, { useState, ReactElement } from "react";
import "../css/PropositionForm.css"; // Import your CSS file for styling
import Web3 from "web3";

declare global {
    interface Window {
      ethereum: any
    }
  }
export function MakeAProposition(): ReactElement {
    const [proposition, setProposition] = useState(""); // State to hold the input value
    const web3 = new Web3(window.ethereum);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProposition(event.target.value); // Update the state with the input value
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the form submission with the proposition value
        console.log("Proposition submitted:", proposition);
        // You can implement your logic to handle the proposition here
        if (web3 && proposition) {
            deployContract();
        } else {
            console.error("Web3 not initialized, proposition is empty, or no account connected");
        }
    };
    const deployContract = async () => {
        
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)
        const deployedContract = new web3.eth.Contract(Token.abi)
        try {
            const deployedInstance = await deployedContract
                .deploy({
                    data: Token.bytecode,
                    arguments: [proposition],
                })
                .send({
                    from: accounts[0],
                    gas: 2000000, // Set an appropriate gas limit
                });
            console.log("Contract deployed at:", deployedInstance.options.address);
            // Handle the deployed contract or any other logic here
        } catch (error) {
            console.error("Error deploying contract:", error);
        }
    };

    return (
        <div className="rec">
            <form onSubmit={handleSubmit}>
                <label>
                    Proposition:
                    <input
                        type="text"
                        value={proposition}
                        onChange={handleInputChange}
                        placeholder="Enter your proposition"
                        className="input-field" // Apply a class for input field styling
                    />
                </label>
                <button type="submit" className="submit-button" >Submit</button>
            </form>
        </div>
    );
}
