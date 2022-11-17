import { Container, Row, Col } from "react-bootstrap"
import { Cv } from './Cv'
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Cv />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/hasan-zamanli/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} /></a>
                            <a href="https://github.com/hasanzaman22" target="_blank" rel="noopener noreferrer"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/hasanzaman22/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} /></a>
                        </div>
                        <p>© Copyright 2022. All Rights Reserved by Hasan Zamanli</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}