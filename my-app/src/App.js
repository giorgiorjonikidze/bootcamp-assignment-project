import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage";
import WorkerForm from './components/workerForm';
import LaptopFrom from "./components/laptopForm";
import LastPage from './components/lastPage';
import LaptopInfo from './components/laptopInfo';

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
      <Route path="/lastpage">
        <LastPage />
      </Route>
      <Route path="/laptopinfo">
        <LaptopInfo />
      </Route>
      
    </Switch>
  );
}

export default App;
