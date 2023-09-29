import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserInformations from './Components/UserInformations'; // Import your UserInformations component
import NavigationBar from './Components/NavigationBar'
const App = () => {
  return (
     <>
      <NavigationBar/>
        <Routes>
           <Route path="/" element={<UserInformations/>} />
        </Routes>
     </>
  );
 };
 
 export default App;