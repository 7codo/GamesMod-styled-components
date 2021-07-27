import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillBell, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FiSun, FiMenu } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import { ResPadding } from "../../theme/GlobalStyles";

/**
 * Proccess go like that
 * todo: 1- make html structor
 * todo: 2- make style components elements
 * todo: 3- change variable theme
 * todo: 4- responsive layout
 * todo: 4- enhance the code
 */

export const Nav = styled.nav`
  background: ${({ theme }) => theme.mainBg};
  width: calc(100% - 315px);
  position: relative;
  left: 315px;
  top: 0;

  @media screen and (max-width: 966px) {
    left: 0;
    width: 100%;
  } /*
  @media screen and (min-width: 966px) {
    width: calc(100% - 315px);
    left: 315px;

  } */
`;
export const NavContainer = styled(ResPadding)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
export const NavItem = styled.li`
  height: 43px;
  &.active {
    background: #0061fd;
    border-radius: 25px;
  }
`;
export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.mainTextkColor};
  text-transform: capitalize;
  text-decoration: none;
  padding: 0 0.9em;
  display: flex;
  align-items: center;
  height: 100%;
  .active & {
    color: #fff;
  }
  transition: color 0.15s ease-in-out;
  &:hover {
    color: #fff;
  }
`;
export const InteractContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const BellIcon = styled(AiFillBell)`
  margin-right: 1.5em;
  cursor: pointer;
`;

export const SearchKits = styled.div``;
export const SearchButton = styled(AiOutlineSearch)`
  margin-right: 1.5em;
  cursor: pointer;
  @media screen and (min-width: 710px) {
    display: none;
  }
`;
export const SearchContainer = styled.div`
  position: relative;
  @media screen and (max-width: 710px) {
    display: none;
  }
`;
export const SearchBox = styled.input`
  height: 43px;
  background: ${({ theme }) => theme.secondaryBg};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.mainTextkColor};
  border-radius: 25px;
  padding: 0 2.8em;
  &:focus {
    background: ${({ theme }) => theme.secondaryBg};
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ToggleThemeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-right: 1.5em;
  cursor: pointer;
`;

export const SunIcon = styled(FiSun)`
  &.theme_active {
    display: none;
  }
`;
export const NightIcon = styled(BsMoon)`
  &.theme_active {
    display: none;
  }
`;

export const ToggleMenu = styled.div`
  display: none;
  @media screen and (max-width: 966px) {
    display: block;
  }
  margin-left: 1.5em;
  @media screen and (max-width: 710px) {
    margin-left: 0;
  }
  & > svg {
    cursor: pointer;
    display: none;
    &.enable {
      display: block;
    }
  }
`;
export const MenuIcon = styled(FiMenu)``;
export const CloseIcon = styled(AiOutlineClose)``;
