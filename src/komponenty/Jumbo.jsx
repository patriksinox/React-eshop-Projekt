import React from "react";
import {
  SiReact,
  SiRedux,
  SiReactrouter,
  SiVite,
  SiBootstrap,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";

const Jumbo = () => {
  return (
    <>
      <header className="jumbotron">
        <h1 className="display-3 mt-5 mb-5">
          React E-Shop project | Patrik Šubjak
        </h1>
        <div className="jumbo-text">
          <p>
            Tento projekt tvorím od 0 podľa svojej predstavivosti s
            technológiami ktoré som si zvolil 😊.
          </p>
          <div className="alert alert-danger" role="alert">
            <strong>Upozornenie!</strong> Všetky texty a dáta sú vymyslené! Toto
            je len skušobný projekt.
          </div>
        </div>
        <ul>
          <li>
            <SiReact /> React.JS
          </li>
          <li>
            <SiRedux /> React Redux
          </li>
          <li>
            <SiReactrouter /> React Router
          </li>
          <li>
            <SiVite /> Vite
          </li>
          <li>
            <SiBootstrap /> Bootstrap / Reactstrap
          </li>
        </ul>
        <div className="text-center mt-5">
          <Link to="/Produkty">
            <AttentionSeeker effect="heartBeat">
              <button className="moj-btn-zeleny shadow">
                Začnite nakupovať
              </button>
            </AttentionSeeker>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Jumbo;
