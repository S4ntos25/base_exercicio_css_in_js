import React from 'react';
import { HeaderContainer, Logo, NavBar, NavItem } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>JOB FINDER</Logo>
      <NavBar>
        <NavItem>Home</NavItem>
        <NavItem>Vagas</NavItem>
        <NavItem>Sobre</NavItem>
        <NavItem>Contato</NavItem>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;