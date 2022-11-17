import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import mainImg from "../assets/img/main-3.svg"
import { TypeAnimation } from 'react-type-animation';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="taggline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Hasan Zamanli `}<br/><span className="wrap">
                            <TypeAnimation
                                sequence={[
                                'Front-End Developer',
                                2000,
                                'Graphic Designer',
                                2000,
                                ]}
                                speed={40}
                                //style={{ fontSize: '2em' }}
                                wrapper="span"
                                repeat={Infinity}
                            />    
                        </span></h1>
                        <p>I am Front-end Developer and Graphic Designer. I have created websites, logo, banners for several social media platform profiles, menu, flyers for some restaurants, photo manipulation, and officially have a certificate in Graphic Design.</p>
                        <a href="https://www.linkedin.com/in/hasan-zamanli/" target="_blank" rel="noopener noreferrer">Let's connect <ArrowRightCircle size={25} /></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={mainImg} alt="Main Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}