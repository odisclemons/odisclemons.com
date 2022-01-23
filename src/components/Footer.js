import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    setYear(year);
  }, []);

  return (
    <Nav fixed bottom className="footer">
      <p>
        <span style={{ fontWeight: "bold" }}>©</span> {`${year} Odis Clemons.`}
        <br />
        All rights reserved.
      </p>
    </Nav>
  );
};

export default Footer;
