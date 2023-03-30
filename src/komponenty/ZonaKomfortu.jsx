import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";

const Onas = () => {
  return (
    <>
      <Row md="2" sm="1" xs="1">
        <Col className="mt-5 text-center  ">
          <h2>Nadizajnujte si vašu zónu komfortu!</h2>
          <p className="komfort-p mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            excepturi voluptatem, itaque deserunt labore similique fugiat quam
            blanditiis necessitatibus perspiciatis quos ab! Ab illo
            necessitatibus iste obcaecati repudiandae enim id?
          </p>
          <Link to="/Produkty">
            <AttentionSeeker effect="heartBeat">
              <button className="moj-btn-zeleny shadow mb-4">
                Začnite nakupovať
              </button>
            </AttentionSeeker>
          </Link>
        </Col>
        <Col>
          <img
            src="https://images2.imgbox.com/cb/69/cQ29pV1x_o.jpeg"
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>
    </>
  );
};

export default Onas;
