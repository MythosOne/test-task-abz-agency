import { NavContainer, NavItem, NavList, NavLink } from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink href="users">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="signUp">Sign Up</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};
