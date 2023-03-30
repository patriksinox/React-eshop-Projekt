import React from "react";
import { Link } from "react-router-dom";
import cat from "../obrazky/cat.jpg";
const Error = () => {
  return (
    <>
      <div className="container text-center">
        <Link to="/">
          <button className="moj-btn-modry shadow mt-5">
            {" "}
            Uteč pred mačkou!
          </button>
        </Link>

        <div className="alert alert-danger mt-5" role="alert">
          <strong>
            <h1>Error 404</h1>
          </strong>{" "}
          <h2>Táto stránka neexistuje!</h2>
        </div>
        <div className="macka ">
          <img src={cat} alt="" className="mt-3 mb-5 img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Error;
