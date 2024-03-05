import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


function TopBar() {
  let navigate=useNavigate();
  return <>
    <Navbar  expand="lg" className="Topbar bg-warning" >
      <Container>
        <Navbar.Brand href="#home">LOKKI Library Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/")} >Home</Nav.Link>
            
            <Nav.Link onClick={()=>navigate("/add")} >Add Book </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>;
}

export default TopBar;