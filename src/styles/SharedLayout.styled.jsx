import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Container = styled.div`
  /* Style dla urządzeń mobilnych (mobile first) */
  max-width: 100%;  /* Pełna szerokość na urządzeniach mobilnych */
  margin: 0 auto;
  padding: 0 20px;
  background-color: black;

  /* Stylizacja dla tabletów */
  @media (min-width: 768px) {
    max-width: 720px;  /* Szerokość dla tabletów */
    padding: 0 30px;
  }

  /* Stylizacja dla desktopów */
  @media (min-width: 1024px) {
    max-width: 800px;  /* Szerokość dla desktopów */
    padding: 0 40px;
  }
`;




// Header - dostosowanie do urządzeń mobilnych, tabletów i desktopów
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  /* Dostosowanie dla tabletów */
  @media (min-width: 768px) {
    padding: 16px 0;  /* Większe paddingi na tabletach */
  }

  /* Dostosowanie dla desktopów */
  @media (min-width: 1024px) {
    padding: 24px 0;  /* Jeszcze większe paddingi na desktopach */
  }
`;

// Logo - dostosowanie do urządzeń mobilnych, tabletów i desktopów
export const Logo = styled.p`
  font-weight: 500;
  margin: 0;
  padding-top: 50px;

  /* Dostosowanie dla tabletów */
  @media (min-width: 768px) {
    padding-top: 60px;  /* Większa przestrzeń na tabletach */
  }

  /* Dostosowanie dla desktopów */
  @media (min-width: 1024px) {
    padding-top: 70px;  /* Większa przestrzeń na desktopach */
  }
`;

// Link - dostosowanie do urządzeń mobilnych, tabletów i desktopów
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

  /* Dostosowanie dla tabletów */
  @media (min-width: 768px) {
    padding: 10px 20px;  /* Większe paddingi na tabletach */
  }

  /* Dostosowanie dla desktopów */
  @media (min-width: 1024px) {
    padding: 12px 24px;  /* Jeszcze większe paddingi na desktopach */
  }
`;
