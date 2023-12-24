import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import projImg4 from "../assets/img/project-img4.png"
import projImg5 from "../assets/img/project-img5.png"
import gradient2 from "../assets/img/gradientProjects2.png"

export const Projects = () => {
    
    const projects = [
        {
            title: "Virtual Voice Assistant based on AI with Python",
            description: "3 Languages Virtual Voice Assistant based on AI. With Python.",
            imgUrl: projImg1,
            link: "https://github.com/hasanzaman22/IEAvirtualAssistant"
        },
        {
            title: "First Rest Api Project with Java",
            description: "My first Rest Api project with Java, Spring Boot and MySql. In Northwind database.",
            imgUrl: projImg4,
            link: "https://github.com/hasanzaman22/RestApi-Java-Springboot-MySql"
        },
        {
            title: "React Chat App",
            description: "Svarka Chat App with React and Chat Engine.",
            imgUrl: projImg3,
            link: "https://github.com/hasanzaman22/React-Chat-App"
        },
        {
            title: "Calculator with Java",
            description: "Simple Calculator with Java.",
            imgUrl: projImg5,
            link: "https://github.com/hasanzaman22/Calculator-With-Java"
        },
        {
            title: "FIRST Project",
            description: "It is a simple and fully responsive website. This website include HTML, CSS, SCSS and JavaScript.",
            imgUrl: projImg2,
            link: "https://hasanzaman22.github.io/FIRST-Website-Project-Full-Responsive.github.io/"
        },
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are my projects. I'll do better than I can.</p>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return(
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-img-right" src={gradient2} alt="" />
        </section>
    )
}