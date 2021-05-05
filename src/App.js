import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { useRef, useEffect } from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./components/Footer";

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
            <Col md={3} className="jtCol vCenter">
              <div
                className="portrait"
                style={{ backgroundImage: "url(odis.jpg)", padding: "4rem" }}
                onClick={handlePlay}
              >
                <div
                  className="portfolioInfo"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/odisclemons",
                      "_blank"
                    )
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        marginRight: ".5rem",
                        fontSize: "2rem",
                      }}
                    >
                      Linked
                    </p>
                    <img
                      style={{ height: "2.5rem", width: "auto" }}
                      src="5a22d420c9a5a7.416105621512231968826.png"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              className="jtCol"
              style={{
                justifyContent: "space-between",
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
                style={{ color: "black", fontWeight: "unset" }}
              >
                Welcome to my personal website. As you may have guessed, I am
                Odis Clemons. I've been writing software in different languages
                since I was 12 years old and lately i've been mostly a MERN
                stack developer. This is the 4th version of this site. I
                periodically rebuild it to practice the latest trends in web
                technology or try out new ideas. Click my profile picture to
                view my linkedin profile. The sites I have listed below are
                sites I have created that are being used by the public. There
                are many more sites and web applications that I have developed
                that have restricted access so I can't show them off.
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
                  <li>Bootstrap</li>
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
              <div className="portfolioImg">
                <img src="nha.png" />
                <div
                  className="portfolioInfo"
                  onClick={() => window.open("https://newarkha.org", "_blank")}
                >
                  <img src="https://newarkha.org/Portals/0/anniversarylogo.png?ver=2019-05-11-133337-573" />
                  <h1>Newarkha.org</h1>
                  <p>
                    This is the main website of the Newark Housing Authority,
                    meeting and exceeding the HUD standards for allowing access
                    to information that is legally required to be available to
                    the public. This site services thousands of public housing
                    and housing choice voucher (Section 8) participants and
                    serves as a hub for announcements, online applications, and
                    many other services.
                  </p>
                </div>
              </div>
              <div className="portfolioImg">
                <img src="nhasf.png" />
                <div
                  className="portfolioInfo"
                  onClick={() =>
                    window.open("https://nhasf.newarkha.org", "_blank")
                  }
                >
                  <img src="https://www.newarkha.org/portals/1/nhasf%20images/NHASF%20Icon.png?ver=2019-05-15-170424-927" />
                  <h1>NHA Scholarship Foundation</h1>
                  <p>
                    Each year, this scholarship has been offered to high school
                    graduates residing in the city of Newark. In 2019, I was
                    tasked with building a web application to assist the
                    applicants, administrators, and judges with each of their
                    respective roles. We used the 1st version for 2 years before
                    I redesigned a much better application from scratch.
                    Students can fill out their information, upload and manage
                    required documents, and view their overall application
                    progress. Administrators and judges can see the progress of
                    all applicants, communicate with them, and view all of their
                    documents- all from the same application.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
