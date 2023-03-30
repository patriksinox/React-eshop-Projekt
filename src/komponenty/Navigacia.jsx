import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

function Navigacia(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const kosik = useSelector((state) => state.kosik.nakup);

  return (
    <div className="obal-nav shadow">
      <Navbar {...args} className="navbar-expand-md container">
        <NavItem>
          <Link to="/">
            {" "}
            <img src="../public/vite.svg" alt="" /> React E-shop by Patrik
          </Link>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/">Domov</Link>
            </NavItem>
            <NavItem>
              <Link to="/produkty">Produkty</Link>
            </NavItem>
            <NavItem>
              <Link to="/onas">O nás</Link>
            </NavItem>
            <NavItem>
              <Link to="/kontakt">Kontakt</Link>
            </NavItem>
          </Nav>
        </Collapse>

        <Link to="nakupnykosik" id="nakupnyKosik">
          {" "}
          Košík <HiOutlineShoppingBag /> <sup>{kosik.length}</sup>{" "}
        </Link>
      </Navbar>
    </div>
  );
}

export default Navigacia;
