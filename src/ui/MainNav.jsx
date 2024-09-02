import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import {
  BiSolidDashboard,
  BiBarChartSquare,
  BiIdCard,
  BiUser,
  BiCalendar,
  BiUserPin,
} from "react-icons/bi";
import { RiHandbagLine } from "react-icons/ri";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    border-left: 3px solid transparent;
    border-radius: 4px;
  }

  /* This works because react-router places the active class on the active NavLink */

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);

    border-color: var(--color-red-700);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
  /* This */
  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <BiSolidDashboard />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/finance">
            <BiBarChartSquare />
            <span>Finance</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/user">
            <BiIdCard />
            <span>User</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/company">
            <RiHandbagLine />
            <span>Company</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/employee">
            <BiUser />
            <span>Employee</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/calender">
            <BiCalendar />
            <span>Calender</span>
          </StyledNavLink>
        </li>
        <UserSetting />
      </NavList>
    </nav>
  );
}

function UserSetting() {
  return (
    <>
      <span className="bg-[--color-grey-300] w-[100%] h-[0.5px]"></span>
      <li>
        <StyledNavLink to="/profile">
          <BiUserPin />
          <span>Profile</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/settings">
          <HiOutlineCog6Tooth />
          <span>Setting</span>
        </StyledNavLink>
      </li>
    </>
  );
}

export default MainNav;
