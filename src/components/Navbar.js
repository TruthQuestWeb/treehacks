import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
text-transform: uppercase;
border-bottom: 2px solid #2f2f2f;
border-top: 2px solid #2f2f2f;
padding: 12px 0 12px 0;
word-spacing: 30px;
align-items: center;
text-align: center;
`;

export const NavLink = styled(Link)`
color: #000000;
align-items: center;
text-decoration: none;
text-align: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
    font-weight: 700;
}
`;

export const NavMenu = styled.div`

align-items: center;
text-align: center;
white-space: nowrap; */
`;

