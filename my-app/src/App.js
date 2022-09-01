import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage";
import WorkerForm from './components/workerForm';
import LaptopFrom from "./components/laptopForm";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/workerform">
        <WorkerForm />
      </Route>
      <Route path="/laptopform">
        <LaptopFrom />
      </Route>
    </Switch>
  );
}

export default App;
