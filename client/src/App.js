import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
=======
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
>>>>>>> b234dbf46dc556df2d373842e787dbba26ffe4f6

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
=======
      <div className="main-flex-container">
        <Navbar />
        <div className="main-container">
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
>>>>>>> b234dbf46dc556df2d373842e787dbba26ffe4f6
      </div>
    </Router>
  );
}

export default App;
