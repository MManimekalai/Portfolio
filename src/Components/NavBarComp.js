import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarComp() {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand className="text-light pl-6 pr-10 " href="#home">
          <h2 className="pt-3">Manimekalai Murugesan</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fa-solid fa-bars text-secondary" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <Nav.Link className="active text-light mx-3" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="active text-light mx-3" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="active text-light mx-3" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="active text-light mx-3" href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link
              className="active text-light mx-3"
              href="https://drive.google.com/file/d/1O6JyucdoD4EqBQheJqXKnRJE86vEc4yy/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </Nav.Link>
            <Nav.Link
              className="active text-light mx-3"
              href="https://github.com/MManimekalai"
              target="_blank"
            >
              <i className="fa-brands fa-github fa-xl" /> GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;