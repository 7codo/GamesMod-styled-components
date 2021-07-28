import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLink,
  InteractContainer,
  BellIcon,
  SearchBox,
  SearchIcon,
  SearchContainer,
  ToggleThemeButton,
  SunIcon,
  NightIcon,
  CloseIcon,
  MenuIcon,
  ToggleMenu,
  SearchKits,
  SearchButton,
} from "./Navbar.elements";

const Navbar = ({ handleTheme, theme, handHideSidebar, hideSidebar }) => {
  // const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    // setCloseMenu(!closeMenu);
    handHideSidebar();
  };
  return (
    <IconContext.Provider value={{ color: "#ebebf5", size: "1.5rem" }}>
      <Nav>
        <NavContainer>
          <NavMenu>
            <NavItem className="active">
              <NavLink to="/">discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/browse">browse</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/wishlist">wishlist</NavLink>
            </NavItem>
          </NavMenu>
          <InteractContainer>
            <ToggleThemeButton>
              <SunIcon
                onClick={handleTheme}
                className={`${theme === "dark" && "theme_active"}`}
              />
              <NightIcon
                onClick={handleTheme}
                className={`${theme === "light" && "theme_active"}`}
              />
            </ToggleThemeButton>
            <BellIcon></BellIcon>
            <SearchKits>
              <SearchContainer>
                <SearchBox name="search" placeholder="Search"></SearchBox>
                <SearchIcon />
              </SearchContainer>
              {/* on click show popup search */}
              <SearchButton />
            </SearchKits>
            <ToggleMenu onClick={handleCloseMenu}>
              <MenuIcon className={`${hideSidebar ? "" : "enable"}`} />
              <CloseIcon className={`${hideSidebar ? "enable" : ""}`} />
            </ToggleMenu>
          </InteractContainer>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
