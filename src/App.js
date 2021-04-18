import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NavigationBar from "./Components/Shared/NavigationBar/NavigationBar";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Footer from "./Components/Shared/Footer/Footer";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <main className="bg-light">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <NavigationBar />
              <Login />
              <Footer />
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </main>
  );
}

export default App;
