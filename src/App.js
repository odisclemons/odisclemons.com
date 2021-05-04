import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { useRef, useEffect } from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.play();
  }, []);

  const handlePlay = () => {
    myRef.current.play();
  };

  return (
    <>
      <video
        ref={myRef}
        id="bkgVideo"
        src="bkground.mp4"
        autoPlay={true}
        autoplay
        loop={true}
      />
      <Container className="mainContainer" fluid>
        <Jumbotron className="jt">
          <Row>
            <Col md={3} className="vCenter">
              <div
                className="portrait"
                style={{ backgroundImage: "url(odis.jpg)", padding: "4rem" }}
                onClick={handlePlay}
              >
                &nbsp;
              </div>
            </Col>
            <Col
              md={6}
              className="jtCol"
              style={{
                justifyContent: "space-evenly",
              }}
            >
              <h3
                className="mainHeader"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                OdisClemons.com
              </h3>
              <p
                className="mainHeader"
                style={{ height: "auto", color: "black", fontWeight: "200" }}
              >
                Welcome to my website. As you may have guessed, I am Odis
                Clemons. I have been developing software in dfferent languages
                for about 10 years and I love it. This is the 4th version of
                this site. I keep this site as an online resume of sorts and
                also to practice the latest trends in web development
                technology. Click my profile picture to get a link to my
                linkedin profile. The sites I have listed below are sites I have
                created that are being used by the public. There are many more
                sites and web applications that I have developed that have
                restricted access or are internal only.
              </p>
            </Col>
            <Col className="jtCol" md={3}>
              <div className="techList">
                <h3 style={{ color: "#0c4b8c" }}>Things I Know</h3>
                <hr></hr>
                <ul>
                  <li>React</li>
                  <li>GraphQL (I'm in love!)</li>
                  <li>Node.js</li>
                  <li>Javascript</li>
                  <li>Express</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Jumbotron>
        <Container
          fluid={true}
          style={{
            backgroundColor: "rgba(9, 8, 40, 0.95)",
            minHeight: "25rem",
          }}
        >
          <Row>
            <Col style={{ display: "flex", justifyContent: "space-evenly" }}>
              <img class="portfolioImg" src="nha.png" />
              <img class="portfolioImg" src="nhasf.png" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
