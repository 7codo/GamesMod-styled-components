import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

export const GalerySection = styled.section``;
export const GaleryContainer = styled.div`
  display: flex;
  @media screen and (max-width: 710px) {
    flex-direction: column;
  }
`;
export const ShowScreen = styled.div`
  width: 75%;
  border-bottom-left-radius: 10px;

  border-top-left-radius: 10px;
  height: 465px;
  background: #fff;
  background-image: url("./../../images/games-wallpaper.svg");
  @media screen and (max-width: 710px) {
    border-radius: 10px;
    width: 100%;
  }
`;
export const BottomGradient = styled.div`
  height: 100%;
  border-bottom-left-radius: 10px;
  background-image: linear-gradient(to top, #000, transparent);
  @media screen and (max-width: 710px) {
    border-bottom-right-radius: 10px;
  }
`;

export const ShowScreenContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #fff;
`;

export const TopTitle = styled.h3``;

export const BottomContent = styled.div`
  width: 60%;
`;
export const HeadingTitle = styled.p``;
export const Subtitle = styled.h2`
  margin-top: 0.5em;
  margin-bottom: 1.5em;
`;
export const RightArrowIcon = styled(BsArrowRightShort)``;

export const NavigationTabs = styled.div`
  width: 25%;
  background: ${({ theme }) => theme.secondaryBg};
  display: flex;
  flex-direction: column;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media screen and (max-width: 710px) {
    border-radius: 10px;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;
export const GameTab = styled.div`
  display: flex;
  align-items: center;

  padding: 0.25em 0.65em;
  height: calc(100% / 6);
  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 75;
    background: #0061fd;
  }
  @media screen and (max-width: 710px) {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.mainTextkColor};
  }
`;
export const Thumbnail = styled.img`
  /* width: 30%;
  height: 100%;
  background: #fff;
  padding-right: 0.65em; */
`;
export const Title = styled.h4`
  color: #fff;
  padding-left: 1em;
`;
