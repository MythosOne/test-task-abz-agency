import { NavContainer, NavItem, NavList, NavLink } from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink href="#usersSection">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#signUpSection">Sign Up</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};
