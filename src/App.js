import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  const myRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    if (myRef && !myRef.current.playing) handlePlay();
    console.log("Welcome to my site. It's beautiful, responsive, and written in React.")
    console.log("Come on, give me a job!  I do great work.")
  }, []);

  const handlePlay = () => {
    myRef.current.play();
  };

  return (
    <>

      <Container
        className="mainContainer"
        fluid
        style={{ position: "relative" }}
      >
        <video
          ref={myRef}
          id="bkgVideo"
          src="cyberpunk.mp4"
          autoPlay={true}
          loop={true}
          muted
        />
        <Jumbotron className="jt">
          <Row>
            <Col lg={3} md={6} sm={12} className="jtCol vCenter jtCol0">
              <div
                ref={portraitRef}
                className="portrait"
                style={{ backgroundImage: "url(odis.jpg)", padding: "4rem" }}
              >
                <div className="portfolioInfo" style={{ justifyContent: 'space-evenly' }}>
                  <a href="https://www.linkedin.com/in/odisclemons" target="_blank"><div className="myLinks">
                    <span className="linkedInText">Linked</span>
                    <img
                      src="linkedInLogo.png"
                      alt="linkedIn logo"
                    />
                  </div></a>
                  <a href="https://github.com/odisclemons" target="_blank"><div className="myLinks">
                    <span className="linkedInText">Github</span>
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" style={{ color: 'white' }} >
                      <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </div></a>
                  <a href="https://drive.google.com/file/d/12DlGCjxHVbhMpxB1QjzEBKitsmpT8i9O/view?usp=sharing" target="_blank">
                    <div className="myLinks">
                      <span className="linkedInText">Resume</span>
                    </div></a>
                </div>
              </div>
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              id="mainHeader"
              className="jtCol jtCol1"
              style={{
                justifyContent: "space-between",
              }}
            >
              <h3
                id="siteTitle"
                style={{ fontWeight: "bold", textAlign: "center", }}
              >
                OdisClemons.com
              </h3>
              <p

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
                  <li>Node.js</li>
                  <li>Javascript</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mysql</li>
                  <li>Mongoose</li>
                  <li>Sequelize</li>
                  <li>Jest</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>Docker</li>
                  <li>Heroku</li>
                  <li>Linux</li>
                  <li>Nginx</li>
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
                  <img alt="nhasf logo" src="https://kimskreativedesigns.com/images/butterfly.png" />
                  <h1>Kim's Kreative Designs</h1>
                  <p>This project was a ton of fun.  Kim reached out to me and said "I know you do good work.  Just make it look good." I took her amazing designs and did my best to put them on display for her.</p>
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
