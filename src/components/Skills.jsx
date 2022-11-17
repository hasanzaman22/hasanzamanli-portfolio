import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import diagonal1 from "../assets/img/diagonal1.svg";
import diagonal2 from "../assets/img/diagonal2.svg";
import diagonal3 from "../assets/img/diagonal3.svg";
import gradient1 from "../assets/img/skillbanner.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>These are my skills, and I hope they'll grow more and more.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={diagonal3} alt="Img" />
                                    <h5>HTML, CSS, Sass</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal3} alt="Img" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal2} alt="Img" />
                                    <h5>React & Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal3} alt="Img" />
                                    <h5>CSS - Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal2} alt="Img" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal1} alt="Img" />
                                    <h5>Adobe Illustrator</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal1} alt="Img" />
                                    <h5>Adobe Photoshop</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal1} alt="Img" />
                                    <h5>CorelDRAW</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal1} alt="Img" />
                                    <h5>Googling</h5>
                                </div>
                                <div className="item">
                                    <img src={diagonal2} alt="Img" />
                                    <h5>Problem Solving</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={gradient1} alt="" />
        </section>
    )
}