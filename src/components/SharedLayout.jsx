import { Outlet } from "react-router-dom";
import {Container, Header, Logo, Link} from './SharedLayout.styled';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Footer from "pages/Footer";

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orange;
    background-color: gray;
  }
`;


const SharedLayout = () => {

    return(
        <Container>
            <Header>
                <Logo>
                </Logo>
                    <nav>
                        <Link to="/" end>Cv</Link>
                        <StyledLink to="/hobby">Hobby</StyledLink>
                        <Link to="/projects">Projects</Link>
                        <Link to="/experience">Experience </Link>
                    </nav>
            </Header>
            <Outlet />
            <Footer/>
        </Container>
    )
}

export default SharedLayout;