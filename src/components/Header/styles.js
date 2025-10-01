import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;