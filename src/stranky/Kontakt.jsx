import React from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const MapaForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section
        className="mapa-form mt-5 container marginfooter text-center"
        id="kontakt"
      >
        <Row md="2" sm="1" xs="1">
          <Col>
            <iframe
              className="mt-3 mb-3"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20802.846901736873!2d19.5624058!3d49.3264811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssk!2ssk!4v1675609888744!5m2!1ssk!2ssk"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col>
            <Form onSubmit={handleSubmit} className="mt-5 text-center">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      id="meno"
                      name="meno"
                      placeholder="Vaše Meno a Priezvisko"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Váš@email.sk"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup className="text-start">
                <Label for="sprava" className="pl-5">
                  Vaša správa:
                </Label>
                <Input id="sprava" name="sprava" type="textarea" />
              </FormGroup>
              <FormGroup className="text-start">
                <Label check>Súhlasím so spracovaním osobných údajov</Label>
                <Input type="checkbox" />
              </FormGroup>
              <button
                className="moj-btn-modry shadow"
                onClick={() => alert("Formulár je len na okrasu! 💣")}
              >
                Odoslať e-mail
              </button>
            </Form>
          </Col>
        </Row>
        <div className="alert alert-danger mt-5 mb-5" role="alert">
          <strong>Upozornenie!</strong> Všetky texty a dáta sú vymyslené! Toto
          je len skušobný projekt.
        </div>
        <Link to={`/produkty`}>
          <button className="moj-btn-modry  shadow mt-5 mb-5">
            Naspäť na produkty
          </button>
        </Link>
      </section>
    </>
  );
};

export default MapaForm;
