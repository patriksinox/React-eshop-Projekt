import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <span className="pr-5"> © {new Date().getFullYear()} </span>
        <span>
          Vytvoril{" "}
          <a href="https://www.facebook.com/patrik.subjak.75/" target="_blank">
            Patrik Šubjak
          </a>
        </span>{" "}
      </footer>
    </>
  );
};

export default Footer;
