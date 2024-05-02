import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";


import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E-commers website"
              description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/jatinchary/fake-product"
              demoLink="https://fakeproductstore12121.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/jatinchary/my_website"
              demoLink="https://rahuljha.info/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="spotify clone"
              description="A React-Node.js Spotify clone replicates Spotify's features: user auth, music search, playlist management, and playback. React manages the UI, Node.js powers the server, and MongoDB stores data. APIs fetch music info. It's a showcase of full-stack dev skills, offering a Spotify-like experience."
              ghLink="https://github.com/jatinchary/spotify_frontend"
              demoLink="https://github.com/jatinchary/spotify_backend"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              // imgPath={XygNZ}
              title="Visual content captioning"
              description="The project uses a fusion of CNNs and Transformers to generate concise and accurate captions for visual content like images. By combining CNNs for visual feature extraction and Transformers for sequence processing, it achieves effective caption generation, enhancing accessibility and understanding for users."
              ghLink="https://colab.research.google.com/drive/1MoO1hmc-Cp-_-AhGDb4rDFRmokybPnmf?usp=sharing"
              demoLink="https://www.ijcrt.org/papers/IJCRT2403596.pdf"
            />
          </Col>

          
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
