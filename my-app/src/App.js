import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CreateCamp from "./components/CreateCamp";
import Login from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/sign-up" component={Login} />
        <Route path="/new-campaign" component={CreateCamp} />
      </div>
    </Router>
  );
}

export default App;
