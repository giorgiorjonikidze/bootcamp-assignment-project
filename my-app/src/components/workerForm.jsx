import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';



const WorkerForm = () => {
  const [teams, setTeams] =  useState([]);
  const [positions, setPositions] =  useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://pcfy.redberryinternship.ge/api/teams');
      const data = await response.json();
      const teams = data.data.map((m) => {
        return <option key={m.id}>{m.name}</option>
      })
      setTeams(teams)
    }
    fetchTeams();
  }, [])

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://pcfy.redberryinternship.ge/api/positions');
      const data = await response.json();
      const positions = data.data.map((m) => {
        return <option key={m.id}>{m.name}</option>
      })
      setPositions(positions)
    }
    fetchTeams();
  }, [])

  const history = useHistory();
  const nextPageHandler = () => {
      const path = 'laptopform'
      history.push(path)
  }

  const backToLandinPage = () => {
      const path = '/'
      history.push(path)
      console.log('back button')
  }

  return (
    <div className="wrapper-container">
      <div className="header">
        <button onClick={backToLandinPage}>
          <img src="/images/Group 4.svg" alt="" />
        </button>
        <div className="title-wrapper">
          <p className="Nameworker-info">თანამშრომელიბის ინფო</p>
          <div className="underline"></div>
        </div>
        <div>
          <p className="laptop-info">ლეპტოპის მახასიათებლები</p>
        </div>
      </div>
      <div className="form-wrapper">
        <form action="">
          <div className="name-surname-block">
            <div className="name-input-block">
              <label for="name">სახელი</label>
              <input className="input" type="text" placeholder="input" />
              <p>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
            </div>
            <div className="surname-input-block">
              <label for="surname">გვარი</label>
              <input className="input" type="text" placeholder="input" />
              <p>მინიმუმ 2 სიმბოლო, ქართული ასოები</p>
            </div>
          </div>
          <select className="select" name="" id="">
            <option value="">თიმი</option>
            {teams}
          </select>
          <select className="select" name="" id="">
            <option value="">პოზიცია</option>
            {positions}
          </select>

          <div className="mail-input">
            <label for="mail">მეილი</label>
            <input className="input" type="text" placeholder="input" />
            <p>უნდა მთავრდებოდეს @redberry.com-ით</p>
          </div>
          <div className="tel-input">
            <label for="surname">ტელეფონის ნომერი</label>
            <input className="input" type="text" placeholder="input" />
            <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
          </div>
          <div className="btn-block">
            <button onClick={nextPageHandler} className="btn">შემდეგი</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkerForm;
