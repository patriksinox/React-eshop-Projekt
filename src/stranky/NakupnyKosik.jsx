import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  vymazatProdukt,
  vymazatKosik,
  zvysitVec,
  znizitVec,
} from "../features/kosik/kosik.jsx";
import { Row, Col } from "reactstrap";
import { AttentionSeeker } from "react-awesome-reveal";

const NakupnyKosik = () => {
  const kosik = useSelector((state) => state.kosik.nakup);
  const dispatch = useDispatch();
  const [cenaKosik, setCenaKosik] = useState(0);

  useEffect(() => {
    const celkovaCenaKosik = kosik.reduce((accumulator, currentValue) => {
      const cena = currentValue.cena * currentValue.pocet;
      return accumulator + cena;
    }, 0);
    setCenaKosik(celkovaCenaKosik);
  }, [kosik]);

  if (kosik.length === 0) {
    return (
      <>
        <div className="container text-center mt-5 mb-5 prazdny-kosik">
          <h2>Váš nákupný košík je prázdny!</h2>
          <h6 className="mt-3">
            Neviete si poradiť s výberom? Radi vám pomôžeme. Stačí nás
            kontaktovať
          </h6>

          <HiOutlineShoppingBag className="prazdny-kosik-img" />
          <Link to="/produkty">
            <AttentionSeeker effect="heartBeat">
              <button className="moj-btn-zeleny">Poďme nakupovať! 😁</button>
            </AttentionSeeker>
          </Link>

          <div className="alert alert-danger mt-5" role="alert">
            <strong>Upozornenie!</strong> Všetky texty a dáta sú vymyslené! Toto
            je len skušobný projekt.
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container text-center">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item">
              <Link to="/">Domov</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Nákupný košík
            </li>
          </ol>
        </nav>

        <section className="kos">
          <Row>
            <ul className="vysvetlivky">
              <Col>
                <li>Názov</li>
              </Col>
              <Col>
                <li>Cena produktu</li>
              </Col>
              <Col>
                <li>Počet</li>
              </Col>
              <Col>
                <li>Celková cena</li>
              </Col>
            </ul>
          </Row>
          <hr />

          {kosik.map((el) => {
            const { id, image, nazov, pocet, cena, farba } = el;
            return (
              <article key={id}>
                <div className="nazov-kosik">
                  <img src={image} alt={nazov} className="fotka-kosik" />
                  <div>
                    <h5>{nazov}</h5>

                    <span>
                      Farba:
                      <button
                        style={{ backgroundColor: `${farba}` }}
                        className="produkt-farba"
                      ></button>
                    </span>
                  </div>
                </div>{" "}
                <span className="cena-kosik">{cena} €</span>
                <div className="pocet-kosik">
                  <button onClick={() => dispatch(znizitVec(id))}>-</button>
                  <span className="cislo">{pocet}</span>
                  <button onClick={() => dispatch(zvysitVec(id))}>+</button>
                </div>{" "}
                <span className="produkt-celkovo">
                  {(cena * pocet).toFixed(2)} €
                </span>{" "}
                <button
                  className="vymazat-vec"
                  onClick={() => dispatch(vymazatProdukt(id))}
                >
                  <HiOutlineTrash />
                </button>{" "}
              </article>
            );
          })}

          <hr />

          <div className="tlacitka-kosik">
            <Link to="/produkty">
              <button className="moj-btn-modry shadow">
                Pokračovať v Nakupovaní
              </button>
            </Link>
            <button
              onClick={() => dispatch(vymazatKosik())}
              className="moj-btn-cerveny shadow"
            >
              Vymazať nákupný košík
            </button>
          </div>
          <div className="total-container">
            <div className="total shadow-lg">
              <div className="total-vypis">
                <h5>Celková suma košíka: {cenaKosik.toFixed(2)} €</h5>
                <p>Poštovné: 9 €</p>
                <hr />
                <h4>
                  Celková suma vašej objednávky: {(cenaKosik + 5.34).toFixed(2)}{" "}
                  €
                </h4>
              </div>
              <Link
                to="/dokoncenie"
                state={{ suma: cenaKosik, postovne: 9, nakup: kosik }}
              >
                <button className="moj-btn-zeleny shadow">
                  Pokračovať k Objednaniu
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NakupnyKosik;
