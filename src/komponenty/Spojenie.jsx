import React from "react";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";

const Spojenie = () => {
  return (
    <>
      <div className="container">
        <section className="spojenie">
          <Row md="2" sm="2" xs="1">
            <Col>
              {" "}
              <h2>
                Zostaň v spojení Zanechaj nám svoj e-mail a neunikne ti žiadna
                akcia ani novinka.
              </h2>
              <p>Zároveň dostaneš zľavu 20% na ďalšiu objednávku!</p>
            </Col>

            <Col>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.target.reset();
                }}
              >
                <FormGroup className="spojenie-form mt-5">
                  <Input
                    id="email"
                    name="email"
                    placeholder="Váš@email.sk"
                    type="email"
                    className="shadow"
                  />
                  <button className="moj-btn-modry shadow">Odoberať</button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default Spojenie;
