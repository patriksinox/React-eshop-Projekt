import React from "react";
import { Row, Col } from "reactstrap";
import { SlFire, SlDiamond, SlBookOpen } from "react-icons/sl";
import { Zoom } from "react-awesome-reveal";

const PrecoMy = () => {
  return (
    <>
      <section className="precomy text-center">
        <div className="container">
          <Row md="2" sm="2" xs="1">
            <Col>
              <h2 className="mt-4">Nábytok na mieru</h2>
              <h2>Postavený len pre vás</h2>
            </Col>
            <Col>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum debitis consectetur reprehenderit non aliquam voluptates
                dolore aut vero consequuntur.
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center" md="3" sm="2" xs="1">
            <Zoom cascade triggerOnce={true}>
              <Col>
                <article className="box-my shadow">
                  <SlFire />
                  <h4>Misia</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                    rerum velit autem unde numquam nisi
                  </p>
                </article>
              </Col>
              <Col>
                {" "}
                <article className="box-my shadow">
                  <SlDiamond />
                  <h4>Výzia</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                    rerum velit autem unde numquam nisi
                  </p>
                </article>
              </Col>
              <Col>
                {" "}
                <article className="box-my shadow">
                  <SlBookOpen />
                  <h4>História</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                    rerum velit autem unde numquam nisi
                  </p>
                </article>
              </Col>
            </Zoom>
          </Row>
        </div>
      </section>
    </>
  );
};

export default PrecoMy;
