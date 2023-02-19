import logo from '../img/logo.png';
import {
  MDBContainer,
  MDBNavbar
} from 'mdb-react-ui-kit';
import {
  Nav,
  NavLink,
  NavMenu
} from './Navbar';

function NavB() {
  return (
      <>
      <MDBNavbar fixed='top' class="navbg">
        <MDBContainer fluid>
            <img src={logo} width={100} height={90} class="navimg"/>
            <header class="navfont">
              Spartan Times
            </header>
            <div class="navunderline"> SINCE JAN, 2023</div>
            <div>
            <Nav fixed='top'>
              <NavMenu>
                <NavLink to='/About' activeStyle>
                  About
                </NavLink>
                <NavLink>|</NavLink>
                <NavLink to='/' activeStyle>
                  Home
                </NavLink>
                <NavLink>|</NavLink>
                <NavLink to='/Founders' activeStyle>
                  Founders
                </NavLink>
              </NavMenu>
            </Nav>
            </div>
        </MDBContainer>
      </MDBNavbar>
    </>
    
  );
}

export default NavB;