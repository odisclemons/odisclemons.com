import {
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Navbar,
} from "react-bootstrap";

export default () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">OdisClemons.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

//export default Navigation;
