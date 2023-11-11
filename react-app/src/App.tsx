import { Routes, Route } from 'react-router-dom';
import ConnexionMetamask from './Components/ConnexionMetamask'; // Import your UserInformations component
import NavBar from './Components/NavigationBar'
import React from 'react';
import { MakeAProposition } from './Components/MakeAProposition';
import { VoteAProposition } from './Components/VoteAProposition';

/*
   - Page with account informations
   - Page to make a voting proposition: the one proposing the vote can't vote. Add space to interact (comments)
   - Page to see the voting propositions
   - Optional : page to see the moving blockchain (for each voting proposition associate blockchain can be graphicaly represented)
*/
const App = () => {
  return (
     <>
      <NavBar/>
        <Routes>
           <Route path="/home" element={<ConnexionMetamask/>} />
           <Route path="/proposition" element={<MakeAProposition/>} />
           <Route path="/vote" element={<VoteAProposition/>} />
        </Routes>
     </>
  );
 };
 
 export default App;