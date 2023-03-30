import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Zoom } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { vymazatKosik } from "../features/kosik/kosik.jsx";

const Dokoncenie = () => {
  let { state } = useLocation();
  const { suma, postovne, nakup } = state;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item">
            <Link to="/">Domov</Link>
          </li>

          <li className="breadcrumb-item">
            <Link to="/NakupnyKosik">Nákupný košík</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Dokončenie nákupu
          </li>
        </ol>
      </nav>

      <h1 className="mt-5 text-center">Dokončenie objednávky</h1>
      <Row md="2" sm="1" xs="1" className="mb-5">
        <Col>
          <Form onSubmit={handleSubmit} className="mt-5 text-center">
            <FormGroup>
              <Input
                id="meno"
                name="meno"
                placeholder="Vaše Meno a Priezvisko"
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="ulica"
                name="street"
                placeholder="Ulica a číslo domu"
              />
            </FormGroup>
            <FormGroup>
              <Input id="psc" name="psc" placeholder="PSČ" />
            </FormGroup>
            <FormGroup>
              <Input id="mesto" name="city" placeholder="Mesto" />
            </FormGroup>

            <FormGroup>
              <Input
                id="email"
                name="email"
                placeholder="Váš@email.sk"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="telefon"
                name="number"
                placeholder="+421"
                type="number"
              />
            </FormGroup>
            <FormGroup className="text-start">
              <Label for="sprava" className="pl-5">
                Poznámka k vašej objednávke:
              </Label>
              <Input id="sprava" name="sprava" type="textarea" />
            </FormGroup>
            <FormGroup className="text-start">
              <Label check>Súhlasím s obchodnými podmienkami</Label>
              <Input type="checkbox" />
            </FormGroup>

            <Link to="/">
              <button
                className="moj-btn-zeleny shadow"
                onClick={() => {
                  dispatch(vymazatKosik());
                  alert(
                    "Ďakujem za objednávku 😂 , tovar vám žiaľ nepríde a košík vám bol vymazaný 💣"
                  );
                }}
              >
                Odoslať objednávku
              </button>
            </Link>
          </Form>
        </Col>
        <Col md="4">
          <article className="mt-5 text-center">
            <h4 className="mb-2">Obsah košíka:</h4>
            <ul className="dokoncenie">
              {nakup.map((el) => {
                const { nazov, pocet, id } = el;
                return (
                  <li key={id}>
                    {pocet} x {nazov}
                  </li>
                );
              })}
            </ul>
            <Zoom triggerOnce={true}>
              <h5 className="mt-5">Celková suma vašej objednávky: </h5>
              <h2>{(suma + postovne).toFixed(2)} € </h2>
            </Zoom>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default Dokoncenie;
