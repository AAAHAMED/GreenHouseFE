import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaUserCircle, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';

const NavbarContainer = styled.div`
  height: 100vh;
  width: 60px;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const NavbarIcon = styled.div`
  margin: 20px 0;
  color: #fff;
  font-size: 24px;
  &:hover {
    color: #ccc;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarIcon>
        <Link to="/"><FaHome /></Link>
      </NavbarIcon>
      <NavbarIcon>
        <Link to="/sensor"><FaClipboardList /></Link>
      </NavbarIcon>
      <NavbarIcon>
        <FaUserCircle />
      </NavbarIcon>
      <NavbarIcon>
        <FaCog />
      </NavbarIcon>
      <NavbarIcon>
        <FaSignOutAlt />
      </NavbarIcon>
    </NavbarContainer>
  );
};

export default Navbar;
