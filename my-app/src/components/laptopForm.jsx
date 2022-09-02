import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import backButton from "./images/Group 4.svg";
import redberryLogo from "./images/LOGO-10 2.svg";
import "./laptopForm.css";

const LaptopFrom = () => {
  const [cpu, setCpu] = useState([]);
  const [laptopBrand, setLaptopBrand] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/brands"
      );
      const data = await response.json();
      const laptopBrand = data.data.map((m) => {
        return <option key={m.id}>{m.name}</option>;
      });
      setLaptopBrand(laptopBrand);
    };
    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/cpus"
      );
      const data = await response.json();
      const cpu = data.data.map((m) => {
        return <option key={m.id}>{m.name}</option>;
      });
      setCpu(cpu);
    };
    fetchTeams();
  }, []);

  const history = useHistory();
  const backPageHandler = () => {
    const path = "workerform";
    history.push(path);
    console.log("back button");
  };

  const backToLandinPage = () => {
    const path = "/";
    history.push(path);
  };

  const saveHandler = () => {
    const path = "/lastpage";
    history.push(path);
  };

  return (
    <div className="wrapper-container">
      <div className="header">
        <button onClick={backToLandinPage} className="back-button-header">
          <img src={backButton} alt="" />
        </button>
        <div className="title-wrapper">
          <p className="worker-info">თანამშრომელიბის ინფო</p>
        </div>
        <div className="laptop-info-wrapper">
          <p className="laptop-info">ლეპტოპის მახასიათებლები</p>
          <div className="underline"></div>
        </div>
      </div>
      <div className="form-wrapper">
        <form action="">
          <div className="img-upload-block">
            <input className="img-upload__input" type="file" />
            <p className="img-upload__p">ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
            <button className="btn img-upload__button">ატვირთე</button>
          </div>
          <div className="name-surname-block">
            <div className="name-input-block">
              <label for="name">ლეპტოპის სახელი</label>
              <input className="input" type="text" placeholder="input" />
              <p>ლათინური ასოები, ციფრები, !@#$%^*()_+</p>
            </div>
            <div className="surname-input-block">
              <select className="select-laptop" name="" id="">
                <option value="">ლეპტოპის ბრენდი</option>
                {laptopBrand}
              </select>
            </div>
            {/* <div className="underline-long"></div> */}
          </div>
          <select className="select" name="" id="">
            <option value="">cpu</option>
            {cpu}
          </select>

          <div className="mail-input">
            <label for="mail">cpu-ს ბირთვი</label>
            <input className="input" type="text" placeholder="input" />
            <p>მხოლოდ ციფრები</p>
          </div>
          <div className="tel-input">
            <label for="surname">cpu-ს ნაკადი</label>
            <input className="input" type="text" placeholder="input" />
            <p>მხოლოდ ციფრები</p>
          </div>
          {/* <div underline-long></div> */}
          <div className="tel-input">
            <label for="surname">შეძენის რიცხვი(არჩევითი)</label>
            <input className="input" type="date" placeholder="input" />
          </div>
          <div className="tel-input">
            <label for="surname">ლეპტოპის ფასი</label>
            <input className="input" type="text" placeholder="input" />
            <p>მხოლოდ ციფრები</p>
          </div>
          <div>
            <p>ლეპტოპის მდგომარეობა</p>
            <label for="">ახალი</label>
            <input type="checkbox" checked="checked" />
            <label for="">მეორადი</label>
            <input type="checkbox" checked="checked" />
            <div className="btn-block">
              <button onClick={backPageHandler} className="btn">
                უკან
              </button>
              <button onClick={saveHandler} className="btn">
                დამახსოვრება
              </button>
            </div>
          </div>
        </form>
      </div>
      <img className="footer-logo" src={redberryLogo} />
    </div>
  );
};

export default LaptopFrom;
