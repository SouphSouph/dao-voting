// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Voting {
    // Structure to store candidate information
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    // Array of candidates
    Candidate[] public candidates;

    // Mapping to keep track of voter's address and their vote status
    mapping(address => bool) public hasVoted;

    // Event to log the vote
    event Voted(address indexed voter, uint256 indexed candidateIndex);

    // Function to add a new candidate
    function addCandidate(string memory _name) external {
        candidates.push(Candidate(_name, 0));
    }

    // Function to get the total number of candidates
    function getCandidateCount() external view returns (uint256) {
        return candidates.length;
    }

    // Function to vote for a candidate
    function vote(uint256 _candidateIndex) external {
        require(_candidateIndex < candidates.length, "Invalid candidate index");
        require(!hasVoted[msg.sender], "You have already voted");

        candidates[_candidateIndex].voteCount++;
        hasVoted[msg.sender] = true;

        emit Voted(msg.sender, _candidateIndex);
    }

    // Function to get the vote count for a specific candidate
    function getVoteCount(uint256 _candidateIndex) external view returns (uint256) {
        require(_candidateIndex < candidates.length, "Invalid candidate index");
        return candidates[_candidateIndex].voteCount;
    }
}
