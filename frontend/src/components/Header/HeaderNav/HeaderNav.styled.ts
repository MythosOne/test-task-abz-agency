import styled from '@emotion/styled';

export const NavContainer = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
`;
export const NavItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  background-color: #f4e041;
`;
export const NavLink = styled.a`
  display: block;
  width: 100%;
  text-align: center;
`;
