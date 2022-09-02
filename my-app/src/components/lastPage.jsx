import React from "react";
import { useHistory } from "react-router-dom";
import lastPageImg from "./images/Frame.svg";
import "./lastPage.css";

const LastPage = () => {
  const history = useHistory();
  const redirectToLanding = () => {
    const path = "/";
    history.push(path);
  };
  const redirectToList = () => {
    const path = "recordlist";
    history.push(path);
  };
  return (
    <div className="main-block">
      <div className="wrapper">
        <img src={lastPageImg} />
        <p className="">ჩანაწერი დამატებულია</p>
        <button className="btn btn-to-list" onClick={redirectToList}>
          სიაში გადაყვანა
        </button>
        <button className="btn-to-main" onClick={redirectToLanding}>
          მთავარი
        </button>
      </div>
    </div>
  );
};

export default LastPage;
