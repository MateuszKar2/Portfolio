import { Outlet } from "react-router-dom";
import {Container, Header, Logo, Link} from './SharedLayout.styled';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
                        <Link to="/" end>Menu</Link>
                        <StyledLink to="/past">Past</StyledLink>
                        <Link to="/present">Present</Link>
                        <Link to="/future">Future</Link>
                    </nav>
            </Header>
            <Outlet />
        </Container>
    )
}

export default SharedLayout;