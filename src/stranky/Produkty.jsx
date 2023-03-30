import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Label, Input } from "reactstrap";
import { data } from "../data";
import { Zoom } from "react-awesome-reveal";

const Produkty = () => {
  const [polozky, setPolozky] = useState(data);
  const [kategorie, setKategorie] = useState({
    kategorie: [],
    spolocnosti: [],
    farby: [],
  });
  const [filter, setFilter] = useState({
    kategorie: "",
    spolocnosti: "",
    farby: "",
    postovne: false,
  });
  const [triedenie, setTriedenie] = useState("najmensie");
  const [nacitanie, setNacitanie] = useState(false);
  const [zobrazFilter, setZobrazFilter] = useState(false);

  const filterProduktov = (arr) => {
    let vyfiltrovanePolozky = arr;
    if (filter.spolocnosti) {
      vyfiltrovanePolozky = vyfiltrovanePolozky.filter(
        (el) => el.company === filter.spolocnosti
      );
    }
    if (filter.kategorie) {
      vyfiltrovanePolozky = vyfiltrovanePolozky.filter(
        (el) => el.category === filter.kategorie
      );
    }
    if (filter.farby) {
      vyfiltrovanePolozky = vyfiltrovanePolozky.filter((el) => {
        if (el.colors.some((el) => el === filter.farby)) return el;
      });
    }
    if (filter.postovne) {
      vyfiltrovanePolozky = vyfiltrovanePolozky.filter(
        (el) => el.shipping === filter.postovne
      );
    }
    if (triedenie === "najmensie") {
      vyfiltrovanePolozky = [...vyfiltrovanePolozky].sort(
        (a, b) => a.price - b.price
      );
    } else if (triedenie === "najvacsie") {
      vyfiltrovanePolozky = [...vyfiltrovanePolozky].sort(
        (a, b) => b.price - a.price
      );
    }
    setPolozky(vyfiltrovanePolozky);
  };

  //Funckia na unikátne farby
  const uniqueFarby = (arr) => {
    const unikatne = [];
    arr.forEach((el) => {
      if (unikatne.some((farba) => farba === el)) return;
      else unikatne.push(el);
    });
    return unikatne;
  };

  //Funkcia na vytvorenie kategórii
  const noveKategorie = () => {
    const uniqueKategorie = [];
    const uniqueSpolocnosti = [];
    const farby = [];
    data.forEach((el) => {
      const { category, company, colors } = el;
      if (category) {
        if (uniqueKategorie.some((el) => el === category)) return;
        else uniqueKategorie.push(category);
      }
      if (company) {
        if (uniqueSpolocnosti.some((el) => el === company)) return;
        else uniqueSpolocnosti.push(company);
      }
      if (colors) {
        farby.push(colors);
      }
    });
    const flatFarby = farby.flat();
    const unikatneFarby = uniqueFarby(flatFarby);

    setKategorie({
      kategorie: uniqueKategorie,
      spolocnosti: uniqueSpolocnosti,
      farby: unikatneFarby,
    });
    setNacitanie(true);
  };

  const handleChange = (e) => {
    if (e.target.value === "najmensie") {
      setTriedenie("najmensie");
    }
    if (e.target.value === "najvacsie") {
      setTriedenie("najvacsie");
    }
  };

  const funkciaTriedenia = () => {
    if (triedenie === "najmensie") {
      setPolozky([...polozky].sort((a, b) => a.price - b.price));
    }
    if (triedenie === "najvacsie") {
      setPolozky([...polozky].sort((a, b) => b.price - a.price));
    }
  };

  //Vytvorí filter kategórie na stránke
  useEffect(() => {
    noveKategorie();
  }, [nacitanie]);

  useEffect(() => {
    filterProduktov(data);
  }, [filter]);

  useEffect(() => {
    funkciaTriedenia();
  }, [triedenie]);

  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb mt-5 mb-5">
            <li className="breadcrumb-item ">
              <Link to="/">Domov</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Produkty
            </li>
          </ol>
        </nav>

        <Row md="2" sm="1" xs="1">
          {/* Filter na boku */}
          <Col md="2">
            {zobrazFilter ? (
              <div>
                <Zoom triggerOnce={true}>
                  {" "}
                  <h5 className="text-start">Kategórie</h5>
                  <ul className="filter">
                    <li
                      onClick={() => {
                        setFilter({ ...filter, kategorie: "" });
                      }}
                    >
                      <span className={filter.kategorie ? "" : "aktiv"}>
                        Všetky kategórie
                      </span>
                    </li>

                    {kategorie.kategorie.map((el, i) => {
                      return (
                        <li
                          key={i}
                          onClick={() =>
                            setFilter({ ...filter, kategorie: el })
                          }
                        >
                          <span
                            className={filter.kategorie === el ? "aktiv" : ""}
                          >
                            {el}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <h5 className="text-start mt-3">Spoločnosti</h5>
                  <ul className="filter">
                    <li
                      onClick={() => {
                        setFilter({ ...filter, spolocnosti: "" });
                      }}
                    >
                      <span className={filter.spolocnosti ? "" : "aktiv"}>
                        {" "}
                        Všetky spoločnosti
                      </span>
                    </li>
                    {kategorie.spolocnosti.map((el, i) => {
                      return (
                        <li
                          key={i}
                          onClick={() =>
                            setFilter({ ...filter, spolocnosti: el })
                          }
                        >
                          <span
                            className={filter.spolocnosti === el ? "aktiv" : ""}
                          >
                            {el}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <h5 className="text-start mt-3">Farby</h5>
                  <ul className="filter text-start">
                    <li className="mb-2">
                      <span className={filter.farby ? "" : "aktiv"}>
                        {" "}
                        Všetky farby
                      </span>
                    </li>
                    {kategorie.farby.map((el, i) => {
                      return (
                        <button
                          key={i}
                          onClick={() => setFilter({ ...filter, farby: el })}
                          style={{ backgroundColor: `${el}` }}
                          className={filter.farby === el ? "button-aktiv" : ""}
                        >
                          {" "}
                        </button>
                      );
                    })}
                  </ul>
                  <ul className="filter postovne mb-5">
                    <Label check>Poštovné zdarma</Label>{" "}
                    <Input
                      checked={filter.postovne}
                      type="checkbox"
                      onChange={(e) =>
                        setFilter({ ...filter, postovne: e.target.checked })
                      }
                    />
                  </ul>
                  <button
                    className="moj-btn-cerveny mb-5"
                    onClick={() =>
                      setFilter({
                        kategorie: "",
                        spolocnosti: "",
                        farby: "",
                        postovne: false,
                      })
                    }
                  >
                    Vymazať filtre
                  </button>{" "}
                </Zoom>
              </div>
            ) : (
              <div>
                <button
                  className="moj-btn-modry mt-5 mb-5"
                  onClick={() => setZobrazFilter(true)}
                >
                  Filter produktov
                </button>
                <article className="mb-5">
                  <h2>Potrebujete poradiť s výberom ?</h2>
                  <h3>Kontaktujte nás 😊</h3>
                </article>
              </div>
            )}
          </Col>

          {/* Produkty na stránke */}
          <Col md="10">
            <Row className="text-center mb-4" md="3" xs="1">
              <Col>
                <h6>{polozky.length} produktov v ponuke</h6>
              </Col>
              <Col>
                <hr />
              </Col>
              <Col>
                {" "}
                <div className="triedenie">
                  <Label for="triedenie">Trieď podľa</Label>
                  <Input
                    id="triedenie"
                    name="triedenie"
                    type="select"
                    onChange={handleChange}
                  >
                    <option value="najmensie">Cena(najmenšia)</option>
                    <option value="najvacsie">Cena(najväčšia)</option>
                  </Input>
                </div>
              </Col>
            </Row>

            <Row className="mb-5">
              {polozky.map((nabytok) => {
                const { id, name, price, image, company } = nabytok;
                return (
                  <Col md="4" xs="6" key={id} className="produkt-stretch">
                    <div className="produkt-okno shadow">
                      <Link to={`/produkty/${id}`}>
                        <div className="img-container">
                          <img src={image} alt={name} />
                        </div>
                        <Row className="popis text-center" md="1" sm="1" xs="1">
                          <Col>
                            <p>{name}</p>
                          </Col>
                          <Col>
                            <p>
                              <strong>{price} €</strong>
                            </p>
                          </Col>
                        </Row>
                        <p className="vyrobca text-center">{company}</p>
                      </Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Produkty;
