import { Row, Col } from "react-bootstrap"

export const Cv = () => {
    return(
      <Col lg={12}>
        <div className="cv-bx">
          <Row>
            <Col md={6} xl={5}>
              <h3>Please look at my CV<br></br>and give any feedback</h3>
            </Col>
            <Col md={6} xl={7}>
                <div className="cv-download-btn">
                    <button><a href="#">Download CV</a></button>
                </div>
            </Col>
          </Row>
        </div>
      </Col>
    )
}