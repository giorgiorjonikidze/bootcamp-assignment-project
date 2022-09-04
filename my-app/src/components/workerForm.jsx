import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Joi from "joi-browser";
import backButton from "./images/Group 4.svg";
import redberryLogo from "./images/LOGO-10 2.svg";
import "./workerForm.css";

const WorkerForm = () => {
  const [formValues, setFormValues] = useState({});
  const [enteredName, setEnteredName] = useState("");

  
  
  useEffect(() => {
      const data = window.localStorage.getItem('name')
      setEnteredName(data)
      console.log(data)
    }, []);
    
    const [enteredSurname, setEnteredSurname] = useState("");
    const [enteredTeams, setEnteredTeams] = useState([]);
    const [enteredPossition, setEnteredPossition] = useState([]);
    const [enteredMail, setEnteredMail] = useState("");
    const [enteredPhone, setEnteredPhone] = useState("");
    
    const [positions, setPositions] = useState([]);
  const [teams, setTeams] = useState([]);
  const [invalidNameInput, setInvalidNameInput] = useState("");
  const [invalidSurnameInput, setInvalidSurnameInput] = useState("");
  const [invalidTeamInput, setInvalidTeamInput] = useState("");
  const [invalidPossitionInput, setInvalidPossitionInput] = useState("");
  const [invalidEmailInput, setInvalidEmailInput] = useState("");
  const [invalidPhoneInput, setInvalidPhoneInput] = useState("");
  useEffect(() => {
    const formData = window.localStorage.getItem('name')
    setFormValues(formData)
    console.log(formValues)
  }, [enteredName])
  
  const [teamSelecting, setTeamSelecting] = useState(false);
  const [possitionSelecting, setPossitionSelecting] = useState(false);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/teams"
      );
      const data = await response.json();
      const teams = data.data.map((m) => {
        return (
          <option key={m.id} value={m.name}>
            {m.name}
          </option>
        );
      });
      setTeams(teams);
    };
    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/positions"
      );
      const data = await response.json();
      const positionsComponent = data.data.map((m) => {
        return (
          <option key={m.id} value={m.name}>
            {m.name}
          </option>
        );
      });
      setPositions(positionsComponent);
    };
    fetchTeams();
  }, []);

  const history = useHistory();
  const nextPageHandler = () => {
    const path = "laptopform";
    history.push(path);
  };

  const backToLandinPage = () => {
    const path = "/";
    history.push(path);
    console.log("back button");
  };
  // change handlers////////////////
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    localStorage.setItem('name', event.target.value)
  };
  const surnameInputChangeHandler = (event) => {
    setEnteredSurname(event.target.value);
  };
  const teamInputChangeHandler = (event) => {
    setEnteredTeams(event.target.value);
    setTeamSelecting(true);
  };
  const possitionInputChangeHandler = (event) => {
    setEnteredPossition(event.target.value);
    setPossitionSelecting(true);
  };
  const mailInputChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };
  const phoneInputChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  ////////////////////
  const [valid, setValid] = useState(true);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setValid(true);
    const geoKeys = /^[ა-ჰ]+$/;
    const phoneFormat = /^(\+?995)?(79\d{7}|5\d{8})$/

    if (!(enteredName.length >= 2) || !(typeof enteredName === "string") || !(enteredName.match(geoKeys))) {
      setValid(false);
      setInvalidNameInput("invalid ");
      // console.log("invalid name");
    } else {
      setInvalidNameInput(" ");
    }

    if (
      !(enteredSurname.length >= 2) ||
      !(typeof enteredSurname === "string") ||
      !(enteredName.match(geoKeys))
    ) {
      setValid(false);
      setInvalidSurnameInput("invalid");
      // console.log("invalid surname");
    } else {
      setInvalidSurnameInput("");
    }

    if (teamSelecting === false) {
      setValid(false);
      setInvalidTeamInput("invalid-select");
    } else {
      setInvalidTeamInput("");
      setTeamSelecting(true);
    }

    if (possitionSelecting === false) {
      setValid(false);
      setInvalidPossitionInput("invalid-select");
    } else {
      setInvalidPossitionInput("");
      setPossitionSelecting(true);
    }
    // mail
    if (!(enteredMail.slice(-13) === "@redberry.com")) {
      setValid(false);
      setInvalidEmailInput("invalid ");
    } else {
      setInvalidEmailInput("");
    }
    // number
    if (!(enteredPhone.match(phoneFormat))) {
      setValid(false);
      setInvalidPhoneInput("invalid ");
    } else {
      setInvalidPhoneInput("");
    }
    if (valid === true) {
    }
    localStorage.setItem("name", enteredName);
    localStorage.setItem("surname", enteredSurname);
    localStorage.setItem("team", enteredTeams);
    localStorage.setItem("possition", enteredPossition);
    localStorage.setItem("mail", enteredMail);
    localStorage.setItem("phone", enteredPhone);
  };

  return (
    <div className="wrapper-container">
      <div className="header">
        <button onClick={backToLandinPage} className="back-button-header">
          <img src={backButton} alt="" />
        </button>
        <div className="title-wrapper">
          <p className="worker-info">თანამშრომელიბის ინფო</p>
          <div className="underline"></div>
        </div>
        <div>
          <p className="laptop-info">ლეპტოპის მახასიათებლები</p>
        </div>
      </div>
      <div className="form-wrapper">
        <form id="myform" onSubmit={formSubmissionHandler}>
          <div className="name-surname-block">
            <div className="name-input-block">
              <label htmlFor="name">სახელი</label>
              <input //////////////////////////////////////////////////////name//
                onChange={nameInputChangeHandler}
                value={enteredName}
                name="name"
                id="name"
                className={"input input-name " + invalidNameInput}
                type="text"
                placeholder="input"
              />
              <p className="form-requirements">
                მინიმუმ 2 სიმბოლო, ქართული ასოები
              </p>
            </div>
            <div className="surname-input-block">
              <label htmlFor="surname">გვარი</label>
              <input //////////////////////////////////////////////////////////surname
                onChange={surnameInputChangeHandler}
                className={"input input-surname " + invalidSurnameInput}
                type="text"
                placeholder="input"
              />
              <p className="form-requirements">
                მინიმუმ 2 სიმბოლო, ქართული ასოები
              </p>
            </div>
          </div>
          <select /////////////////////////////////////////////////////////team
            onChange={teamInputChangeHandler}
            className={"select " + invalidTeamInput}
            id=""
          >
            <option value disabled selected hidden>
              თიმი
            </option>
            {teams}
          </select>
          <select /////////////////////////////////////////////////////////possitions
            onChange={possitionInputChangeHandler}
            className={"select " + invalidPossitionInput}
            name=""
            id=""
          >
            <option disabled selected hidden>
              პოზიცია
            </option>
            {positions}
          </select>

          <div className="mail-input">
            <label htmlFor="mail">მეილი</label>
            <input //////////////////////////////////////////////////////////////////mail
              onChange={mailInputChangeHandler}
              className={"input " + invalidEmailInput}
              type="text"
              placeholder="input"
            />
            <p className="form-requirements">
              უნდა მთავრდებოდეს @redberry.com-ით
            </p>
          </div>
          <div className="tel-input">
            <label htmlFor="surname">ტელეფონის ნომერი</label>
            <input ///////////////////////////////////////////////////// ////phone
              onChange={phoneInputChangeHandler}
              className={"input " + invalidPhoneInput}
              type="text"
              placeholder="input"
            />
            <p className="form-requirements">
              უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
            </p>
          </div>
          <div className="btn-block">
            <button
              form="myform"
              type="submit"
              // onClick={nextPageHandler}
              className="btn btn-workerform"
            >
              შემდეგი
            </button>
          </div>
        </form>
      </div>
      <img className="footer-logo" src={redberryLogo} />
    </div>
  );
};

export default WorkerForm;
