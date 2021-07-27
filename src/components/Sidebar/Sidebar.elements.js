import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillFire, AiTwotoneSetting } from "react-icons/ai";
import { HiLibrary } from "react-icons/hi";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import { BiDownload } from "react-icons/bi";
import { ResPadding } from "../../theme/GlobalStyles";

export const LeftSidebar = styled.div`
  background-color: ${({ theme }) => theme.mainBg};
  /* border-right: 1px solid ${({ theme }) => theme.mainTextkColor}; */
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 95%;
    width: 1px;
    background: #ffffff30;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  transition: width 0.05s ease-in-out;
  overflow-y: auto;
  z-index: 10;

  /* @media screen and (min-width: 966px) {
    top: 0;
    width: 315px;
  }
  @media screen and (max-width: 966px) {
    /* width: 0; 
  }*/
  &.hide {
    /* top: calc(43px + 0.75em * 2); */
    width: 315px;
    /* box-shadow: .1em 0 1em ${({ theme }) => theme.secondaryBg}; */
  }
`;

export const SidebarContainr = styled(ResPadding)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const SideContentContainr = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 80%;
  margin: 0 auto;
  cursor: pointer;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  &:first-of-type {
    margin-top: 3em;
    @media screen and (max-width: 710px) {
      margin-top: 2em;
    }
  }
`;
export const MenuItem = styled.li``;
export const MenuLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.mainTextkColor};
  padding: 1.1em 2em;
  width: 100%;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  margin: 0.2em 0;
  & > svg {
    color: ${({ theme }) => theme.mainTextkColor};
    margin-right: 0.5em;
    font-size: 1.5rem;
  }
  &:hover {
    color: #fff;
    & > a,
    & > svg {
      color: #fff;
    }
    background: ${({ theme }) => theme.secondaryBg};
    border-radius: 19px;
  }
`;

export const HomeIcon = styled(AiFillHome)``;
export const StoreIcon = styled(AiFillFire)``;
export const LibraryIcon = styled(HiLibrary)``;
export const FriendsIcon = styled(FaUserFriends)``;
export const LiveIcon = styled(CgMediaLive)``;
export const DownloadIcon = styled(BiDownload)``;
export const SettingIcon = styled(AiTwotoneSetting)``;
export const UserIcon = styled(FaUserCircle)``;
