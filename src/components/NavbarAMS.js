import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../img/logo/logo.png'
import '../css/navbarAMS.css'
function NavbarAMS() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Link to='/' className="navbar-brand"><Image src={logo} className="img-fluid" /></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to='' className="nav-link">Home</Link>
              <Link to='login' className="nav-link">Login</Link>
              <Link to='register' className="nav-link">Register</Link>
              <Link to='admin' className="nav-link">Admin</Link>
              <Link to='seller' className="nav-link">Seller</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarAMS;
