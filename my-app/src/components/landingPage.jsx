import React from 'react';
import { useHistory } from 'react-router-dom';
import "./landingPage.css"
import logoImage from './images/LOGO-02 1.svg'
import mainImage from "./images/Layer1.svg"


const LandingPage = () => {
    const history = useHistory();
    const routChangeHandler = () => {
        const path = 'workerform'
        history.push(path)
    }
    

  return (
    <div className="container__landing">

      <img
        className="logo-img__landing"
        src={logoImage}
        alt="redberry logo"
      />
      <img className="main-img__landing" src={mainImage} alt="didi surati" />
      <button onClick={routChangeHandler} className="btn btn-add">ჩანაწერის დამატება</button>
      <button className="btn btn-list">ჩანაწერების სია</button>
    </div>
  );
};

export default LandingPage;
