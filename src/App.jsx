import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Importing Components Files
import Header from './Components/Header';
import UserPage from './Components/UserPage';

function App() {
  return (
    <>    
    <div className="App">
      <Header/>
    </div>

    {/* <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          </Route>
          <Route path="/UserPage">
          <UserPage />
          </Route>
      </Switch>
    </Router>
    */}
    </>

  );
}

export default App;
