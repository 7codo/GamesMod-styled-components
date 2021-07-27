import React from "react";
import {
  LeftSidebar,
  SidebarContainr,
  Logo,
  SidebarMenu,
  MenuItem,
  MenuLink,
  HomeIcon,
  StoreIcon,
  LibraryIcon,
  FriendsIcon,
  LiveIcon,
  SideContentContainr,
  DownloadIcon,
  SettingIcon,
  UserIcon,
} from "./Sidebar.elements";
import logo from "../../images/logo.svg";

const Sidebar = ({ hideSidebar }) => {
  return (
    <LeftSidebar className={`${hideSidebar ? "hide" : ""}`}>
      <SidebarContainr>
        <Logo src={logo} alt="logo"></Logo>
        <SideContentContainr>
          <SidebarMenu>
            <MenuItem>
              <MenuLink to="/home">
                <HomeIcon />
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/store">
                <StoreIcon />
                Store
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/library">
                <LibraryIcon />
                Library
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/friends">
                <FriendsIcon />
                Friends
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/live">
                <LiveIcon />
                Live
              </MenuLink>
            </MenuItem>
          </SidebarMenu>
          <SidebarMenu>
            <MenuItem>
              <MenuLink to="/downloads">
                <DownloadIcon />
                Downloads
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/settings">
                <SettingIcon />
                Settings
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/myaccount">
                <UserIcon />
                Test Name
              </MenuLink>
            </MenuItem>
          </SidebarMenu>
        </SideContentContainr>
      </SidebarContainr>
    </LeftSidebar>
  );
};

export default Sidebar;
