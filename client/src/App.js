import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <div className="main-flex-container">
        <Navbar />
        <div className="main-container">
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <div className="user-bg">
            <Route path="/user" component={CreateUser} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
