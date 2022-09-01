import React from 'react';
import { useHistory } from 'react-router-dom';


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
        src="/images/LOGO-02 1.svg"
        alt="redberry logo"
      />
      <img className="main-img__landing" src="/images/Layer1.svg" alt="didi surati" />
      <button onClick={routChangeHandler} className="btn btn-add">ჩანაწერის დამატება</button>
      <button className="btn btn-list">ჩანაწერების სია</button>
    </div>
  );
};

export default LandingPage;
