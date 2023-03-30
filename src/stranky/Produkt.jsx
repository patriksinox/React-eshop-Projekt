import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";
import { Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { pridatProdukt } from "../features/kosik/kosik.jsx";
import { Modal, ModalFooter } from "reactstrap";

const Produkt = () => {
  const { id } = useParams();
  const produkt = data.find((el) => el.id === id);
  const { name, price, image, colors, company, description } = produkt;
  const [pocet, setPocet] = useState(1);

  //Modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  //Redux
  const dispatch = useDispatch();

  const [vec, setVec] = useState({
    nazov: name,
    farba: colors[0],
    cena: price,
    image: image,
    pocet: pocet,
    id: id,
  });

  useEffect(() => {
    setVec({
      ...vec,
      pocet: pocet,
      id: id + vec.farba,
    });
  }, [pocet, vec.farba]);

  return (
    <div className="container">
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item">
            <Link to="/">Domov</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/produkty">Produkty</Link>
          </li>
          <li
            className="breadcrumb-item active text-capitalize"
            aria-current="page"
          >
            {name}
          </li>
        </ol>
      </nav>

      <Link to={`/produkty`}>
        <button className="moj-btn-modry  shadow mt-5 mb-5">
          Naspäť na produkty
        </button>
      </Link>
      <Row md="2" sm="1" xs="1">
        <Col>
          <img
            src={image}
            alt={name}
            className="img-fluid produkt-fotka mb-5 shadow"
          />
        </Col>
        <Col>
          <section className="produkt">
            <h1>{name}</h1>
            <h2>{price} €</h2>
            <p className="mt-4">{description}</p>
            <p>
              {" "}
              <strong>Dostupnosť:</strong> Veľa kusov na sklade
            </p>
            <p>
              {" "}
              <strong>Kód produktu:</strong> {id}
            </p>
            <p>
              {" "}
              <strong>Výrobca:</strong> {company}
            </p>
            <hr />
            <p className="farby-container">
              <strong>Farby:</strong>

              {colors.map((el, i) => {
                return (
                  <button
                    className={
                      vec.farba === el
                        ? "produkt-farba button-aktiv"
                        : "produkt-farba"
                    }
                    key={i}
                    style={{ backgroundColor: `${el}` }}
                    onClick={() => setVec({ ...vec, farba: el })}
                  ></button>
                );
              })}
            </p>
            <span className="kusy">
              <button
                onClick={() => {
                  if (pocet === 0) return;
                  else setPocet(pocet - 1);
                }}
              >
                -
              </button>
              <span className="cislo">{pocet}</span>
              <button onClick={() => setPocet(pocet + 1)}>+</button>
            </span>
            <button
              className="moj-btn-zeleny shadow mt-3 mb-5"
              onClick={() => {
                dispatch(pridatProdukt(vec));
                toggle();
              }}
            >
              Pridať do košíka
            </button>

            <Modal isOpen={modal} toggle={toggle}>
              <div className="vnutro-modal">
                <h3>
                  {" "}
                  Produkt {pocet} x {name.toUpperCase()} bol pridaný do košíka!
                </h3>
                <div className="modal-buttony">
                  <button className="moj-btn-modry shadow" onClick={toggle}>
                    Pokračovať v nakupovaní
                  </button>
                  <Link to="/nakupnykosik">
                    <button className="moj-btn-zeleny shadow">
                      Nákupný košík
                    </button>
                  </Link>
                </div>
              </div>
              <ModalFooter>Ďakujeme </ModalFooter>
            </Modal>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Produkt;
