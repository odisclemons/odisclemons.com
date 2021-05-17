import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <Nav fixed bottom className="footer">
      <p>
        <span style={{ fontWeight: "bold" }}>©</span> 2021 Odis Clemons.
        <br />
        All rights reserved.
      </p>
    </Nav>
  );
};

export default Footer;
