import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef && !myRef.current.playing) handlePlay();
  }, []);

  const handlePlay = () => {
    myRef.current.play();
  };

  return (
    <>
      <video
        ref={myRef}
        id="bkgVideo"
        src="cyberpunk.mp4"
        autoPlay={true}
        autoplay={true}
        loop={true}
        muted
      />
      <Container
        className="mainContainer"
        fluid
        style={{ position: "relative" }}
      >
        <Jumbotron className="jt">
          <Row>
            <Col lg={3} md={6} sm={12} className="jtCol vCenter jtCol0">
              <div
                className="portrait"
                style={{ backgroundImage: "url(odis.jpg)", padding: "4rem" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/odisclemons",
                    "_blank"
                  )
                }
              >
                <div className="portfolioInfo">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="linkedInText">Linked</span>
                    <img
                      style={{ height: "2.5rem", width: "auto" }}
                      src="5a22d420c9a5a7.416105621512231968826.png"
                      alt="linkedIn logo"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              className="jtCol jtCol1"
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
                style={{ color: "black", fontWeight: "unset", margin: 0 }}
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
            <Col className="jtCol jtCol2" lg={3} md={6} sm={12}>
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
        <Container className="portfolioContainer" fluid={true}>
          <Row>
            <Col sm={12} md={4}>
              <div
                className="portfolioImg"
                onClick={() => window.open("https://newarkha.org", "_blank")}
              >
                <img src="nha.png" alt="screenshot of newarkha.org" />
                <div className="portfolioInfo">
                  <img alt="NHA Logo" src="anniversarylogo.png" />
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
            </Col>
            <Col sm={12} md={4}>
              <div
                className="portfolioImg"
                onClick={() =>
                  window.open("https://nhasf.newarkha.org", "_blank")
                }
              >
                <img alt="screenshot of nhasf website" src="nhasf.png" />
                <div className="portfolioInfo">
                  <img alt="nhasf logo" src="NHASF%20Icon.png" />
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
                    documents - all from the same application.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div
                className="portfolioImg"
                onClick={() =>
                  window.open("https://Kimskreativedesigns.com", "_blank")
                }
              >
                <img alt="screenshot of kkd website" src="kkd.png" />
                <div className="portfolioInfo">
                  {/* <img alt="nhasf logo" src="NHASF%20Icon.png" /> */}
                  <h1>Kim's Kreative Designs</h1>
                  <p></p>
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
