import React from "react";
import { useHistory } from "react-router-dom";

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
    <div>
      <img />
      <button onClick={redirectToList}>სიაში გადაყვანა</button>
      <button onClick={redirectToLanding}>მთავარი</button>
    </div>
  );
};

export default LastPage;
