import React from "react";
import SVGMap from "../../images/svg/Map.svg";
import SVGAdd from "../../images/svg/Add.svg";
import SVGMinus from "../../images/svg/Minus.svg";
import SVGCompass from "../../images/svg/Compass.svg";
import SVGSearch from "../../images/svg/Search.svg";
import SVGAngle from "../../images/svg/Angle.svg";
import SVGAngleLeft from "../../images/svg/Angle Left.svg";
import FlagUSA from "../../images/svg/FlagUSA.svg";
import FlagItaly from "../../images/svg/FlagItaly.svg";
import FlagChina from "../../images/svg/FlagChina.svg";
import FlagSpain from "../../images/svg/FlagSpain.svg";
import FlagGermany from "../../images/svg/FlagGermany.svg";
import FlagIran from "../../images/svg/FlagIran.svg";
import SVGPolygon from "../../images/svg/Polygon.svg";
import SVGPolygonDown from "../../images/svg/Polygon Down.svg";
import "./map.scss";

const Flag = ({ country, flag, amount, arrow }) => {
  return (
    <div className="flex items-center justify-between mb-14">
      <div className="flex items-center">
        <img src={flag} />
        <h4 className="text-secondary text-3xl ml-4">{country}</h4>
      </div>
      <div className="flex items-center">
        <span className="text-secondary text-2xl block mr-4">{amount}</span>
        <img src={arrow} />
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <div id="map" className="container flex flex-col lg:flex-row mt-20 lg:mt-0">
      <div className="relative flex-grow">
        <div
          style={{ boxShadow: "0 0 2rem rgba(0,0,0,0.1)" }}
          className="absolute bg-white rounded p-6 top-0 left-10 flex-col flex justify-center"
        >
          <img className="h-10 w-10" src={SVGAdd} />
          <div className="w-5 h-0.5 bg-gray-400 my-6 mx-auto"></div>
          <img className="h-10 w-10" src={SVGMinus} />
          <div className="w-5 h-0.5 bg-gray-400 my-6 mx-auto"></div>
          <img className="h-16" src={SVGCompass} />
        </div>
        <div
          style={{ boxShadow: "0 0 2rem rgba(0,0,0,0.1)" }}
          className="absolute top-0 rounded right-0 p-6 bg-white"
        >
          <img className="h-10 w-10" src={SVGSearch} />
        </div>
        <img src={SVGMap} />
      </div>
      <div className="bg-white map__report mx-auto lg:ml-8 mt-20 lg:mt-0 pt-14 px-14 mb-14">
        <div className="flex items-center justify-between">
          <h2 className="text-secondary font-medium text-5xl">Live Reports</h2>
          <div
            style={{ boxShadow: "0 0 2rem rgba(0,0,0,0.1)" }}
            className="flex items-center p-4 rounded-lg"
          >
            <img className="" src={SVGAngleLeft} />
            <div className="h-6 w-1 bg-gray-400 mx-4"></div>
            <img src={SVGAngle} />
          </div>
        </div>
        <div className="mt-14">
          <Flag
            country="USA"
            flag={FlagUSA}
            amount="100,392"
            arrow={SVGPolygon}
          />
          <Flag
            country="Italy"
            flag={FlagItaly}
            amount="86,498"
            arrow={SVGPolygon}
          />
          <Flag
            country="China"
            flag={FlagChina}
            amount="81,340"
            arrow={SVGPolygonDown}
          />
          <Flag
            country="Spain"
            flag={FlagSpain}
            amount="64,059"
            arrow={SVGPolygon}
          />
          <Flag
            country="Germany"
            flag={FlagGermany}
            amount="50,871"
            arrow={SVGPolygon}
          />
          <Flag
            country="Iran"
            flag={FlagIran}
            amount="32,332"
            arrow={SVGPolygon}
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
