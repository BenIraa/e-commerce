import React from 'react';
import {
  BrowserRouter as Router ,Route,Link
} from "react-router-dom";

// Importing Components Files
import Header from './Components/Header';
import UserPage from './Components/UserPage';

function App() {
  return (
    <>    
    <div className="App">
      <UserPage/>
    </div>

   
    </>

  );
}

export default App;
