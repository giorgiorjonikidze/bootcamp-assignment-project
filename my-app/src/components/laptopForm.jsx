import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';




const LaptopFrom = () => {
  const [cpu, setCpu] = useState([]);
  const [laptopBrand, setLaptopBrand] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://pcfy.redberryinternship.ge/api/brands');
      const data = await response.json();
      const laptopBrand = data.data.map((m) => {
        return <option key={m.id}>{m.name}</option>
      })
      setLaptopBrand(laptopBrand)
    }
    fetchTeams();
  }, [])

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('https://pcfy.redberryinternship.ge/api/cpus');
      const data = await response.json();
      const cpu = data.data.map((m) => {
        return <option key={m.id}>{m.name}</option>
      })
      setCpu(cpu)
    }
    fetchTeams();
  }, [])

  const history = useHistory();
  const backPageHandler = () => {
    const path = 'workerform'
    history.push(path)
    console.log('back button')
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
          <p className="worker-info">თანამშრომელიბის ინფო</p>
        </div>
        <div>
          <p className="laptop-info">ლეპტოპის მახასიათებლები</p>
          <div className="underline"></div>
        </div>
      </div>
      <div className="form-wrapper">
        <form action="">
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
          <div className="tel-input">
            <label for="surname">შეზენის რიცხვი(არჩევითი)</label>
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
          </div>
          <div className="btn-block">
            <button onClick={backPageHandler} className="btn">უკან</button>
            <button className="btn">დამახსოვრება</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LaptopFrom;
