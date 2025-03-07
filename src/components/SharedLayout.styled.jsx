import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;;
  padding: 0 20px;
  background-color: black;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Logo = styled.p`
  font-weight: 500;
  margin: 0;
  padding-top: 50px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;