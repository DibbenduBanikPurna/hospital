import React, { useState, createContext } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './Components/About/About';
import Service from './Components/Service/Service';
import SingleService from './Components/Service/SingleService';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser)
  return (
    <div className="App">
      <Router>

        <userContext.Provider value={[loggedInUser]}>
          <Navbar />
        </userContext.Provider>
        <Switch>
          <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about"><About /></Route>
            <Route path="/login"><LogIn /></Route>
            <PrivateRoute path="/service"> <Service /></PrivateRoute>
            <Route path="/serv/:id"> <SingleService /></Route>
          </userContext.Provider>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
