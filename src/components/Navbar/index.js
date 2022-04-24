import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>Logo</Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100vw;
`;

const Logo = styled.p`
  font-size: 3.2rem;
  font-weight: bold;
  color: #f4fdf2;
  padding: 0 7rem;
`;

const Menu = styled.div`
  padding: 0 7rem;
`;

const MenuItem = styled.a`
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
  fontsize: 3.2rem;
  font-weight: bold;
  color: #f4fdf2;
  padding: 0 5rem;
`;
