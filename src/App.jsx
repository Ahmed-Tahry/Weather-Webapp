import { useEffect, useState } from "react";

import "./App.scss";
import { PiThermometerHotLight } from "react-icons/pi";
import { RiWaterPercentLine, RiMistFill } from "react-icons/ri";
import { LiaCloudRainSolid } from "react-icons/lia";
import { BsSun, BsWind, BsSearch, BsMoon, BsFillCloudsFill, BsSnow2 } from "react-icons/bs";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { WiDayThunderstorm } from "react-icons/wi";
import axios from "axios";
function App() {
  const current = new Date();
  function getCurrentDate() {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "2-digit",
    };

    return new Date().toLocaleDateString("en-US", options);
  }
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [time, setTime] = useState(current.toLocaleTimeString("en-US"));
  const [date, setDate] = useState(getCurrentDate);
  const [sky, setXbox] = useState({
    "clear sky": <BsSun size={100} />,
    "few clouds": <BsFillCloudsFill size={100} />,
    "scattered clouds": <BsFillCloudsFill size={100} />,
    "broken clouds": <BsFillCloudsFill size={100} />,
    "shower rain": <LiaCloudRainSolid size={100} />,
    rain: <LiaCloudRainSolid size={100} />,
    thunderstorm: <WiDayThunderstorm size={100} />,
    snow: <BsSnow2 size={100} />,
    mist: <RiMistFill size={100} />,
  });
  const getData = async () => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bc95600b86c7e0458beb4f903f214a5b`);
    setData(res.data);
    console.log(data.weather[0].icon);
  };
  useEffect(() => {
    getData();
  }, []);
  function handleKeydown(e) {
    if (e.key === "Enter") {
      getData();
      setTime(current.toLocaleTimeString("en-US"));
    }
  }
  return (
    <>
      <div className="container">
        <div className="top">
          <div className="left">
            <div className="composant">
              <h2>{data ? data.weather[0].description : null}</h2>
              <h4>{data ? data.name : null}</h4>
              <h4>{date} </h4>
              <h4>{time}</h4>
            </div>
            <div className="composant">
              <h1>
                {data ? parseInt(data.main.temp) - 273 : null}
                <TbTemperatureCelsius />
              </h1>
              <h4>
                Display
                <TbTemperatureFahrenheit />
              </h4>
              {data ? sky[data.weather[0].description] : null}
            </div>
            <div className="composant">{}</div>
          </div>
          <div className="right">
            <div className="composant-r">
              <PiThermometerHotLight size={60} />
              <div>
                <h4>Feels Like</h4>
                <h4>
                  {data ? parseInt(data.main.temp) - 273 : null}
                  <TbTemperatureCelsius />{" "}
                </h4>
              </div>
            </div>
            <div className="composant-r">
              <RiWaterPercentLine size={60} />
              <div>
                <h4>Humidity</h4>
                <h4>{data ? data.main.humidity : null}%</h4>
              </div>
            </div>

            <div className="composant-r">
              <BsWind size={60} />
              <div>
                <h4>Wind Speed</h4>
                <h4>{data ? data.wind.speed.toFixed() * 3.6 : null}Km/H</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="bot">
          <div className="search">
            <input
              type="text"
              name=""
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
              onKeyDown={handleKeydown}
              id=""
              placeholder="Search Location ..."
            />
            <BsSearch size={25} />
          </div>
          <div className="options">
            <button>Daily</button>
            <button>Hourly</button>
          </div>
          <div className="week">
            <div className="day">
              <h2>Monday</h2>
              <h3>
                No Data Available
                <TbTemperatureCelsius />
              </h3>
              <h4>
                No Data Available
                <TbTemperatureCelsius />
              </h4>
              <LiaCloudRainSolid size={50} />
            </div>
            <div className="day">
              <h2>Tuesday</h2>
              <h3>
                No Data Available
                <TbTemperatureCelsius />
              </h3>
              <h4>
                No Data Available
                <TbTemperatureCelsius />
              </h4>
              <LiaCloudRainSolid size={50} />
            </div>
            <div className="day">
              <h2>Wednesday</h2>
              <h3>
                No Data Available
                <TbTemperatureCelsius />
              </h3>
              <h4>
                No Data Available
                <TbTemperatureCelsius />
              </h4>
              <LiaCloudRainSolid size={50} />
            </div>
            <div className="day">
              <h2>Thursday</h2>
              <h3>
                No Data Available
                <TbTemperatureCelsius />
              </h3>
              <h4>
                No Data Available
                <TbTemperatureCelsius />
              </h4>
              <LiaCloudRainSolid size={50} />
            </div>
            <div className="day">
              <h2>Friday</h2>
              <h3>
                No Data Available
                <TbTemperatureCelsius />
              </h3>
              <h4>
                No Data Available
                <TbTemperatureCelsius />
              </h4>
              <LiaCloudRainSolid size={50} />
            </div>
            <div className="day">
              <h2>Saturday</h2>
              <h3>
                No Data Available
                <TbTemperatureCelsius />
              </h3>
              <h4>
                No Data Available
                <TbTemperatureCelsius />
              </h4>
              <LiaCloudRainSolid size={50} />
            </div>
            <div className="day">
              <h2>Sunday</h2>
              <h3>
                No Data Available
                <TbTemperatureCelsius />
              </h3>
              <h4>
                No Data Available
                <TbTemperatureCelsius />
              </h4>
              <LiaCloudRainSolid size={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
