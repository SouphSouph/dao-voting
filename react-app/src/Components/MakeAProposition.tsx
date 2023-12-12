import React, { useState, ReactElement } from "react";
import "../css/PropositionForm.css";
import Web3 from "web3";
import DeployGovernor from "../../deploy/01-deployGovernanceToken";

declare global {
  interface Window {
    ethereum: any;
  }
}

export function MakeAProposition(): ReactElement {
  const [proposition, setProposition] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");

  const handlePropositionSubmit = async (e: React.FormEvent) => {
  
  };

  return (
    <div className="rec">
      <form onSubmit={handlePropositionSubmit}>
        <label>
          Proposition:
          <input
            type="text"
            placeholder="Enter your proposition"
            className="input-field"
            value={proposition}
            onChange={(e) => setProposition(e.target.value)}
          />
        </label>
        <label>
          Choice 1:
          <input
            type="text"
            placeholder="Enter choice 1"
            className="input-field"
            value={choice1}
            onChange={(e) => setChoice1(e.target.value)}
          />
        </label>
        <label>
          Choice 2:
          <input
            type="text"
            placeholder="Enter choice 2"
            className="input-field"
            value={choice2}
            onChange={(e) => setChoice2(e.target.value)}
          />
        </label>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
