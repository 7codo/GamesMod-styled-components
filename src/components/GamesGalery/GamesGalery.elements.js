import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import cover1 from "../../images/games/covers/cover1.jpg";

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
  position: relative;
  border-top-left-radius: 10px;
  height: 530px;
  background-image: url(${cover1});
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
export const GameCover = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
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
  cursor: pointer;
  margin: 0.25em 0;
  padding: 0.5em 0.65em;
  height: calc(100% / 6);
  position: relative;
  transition: all 0.5s ease-out;
  &:hover {
    & > p {
      padding-left: 1.5em;
    }
  }
  &.active:after {
    content: "";
    display: block;
    height: 0.25px;
    width: 75%;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media screen and (max-width: 710px) {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.mainTextkColor};
  }
`;
export const Thumbnail = styled.img`
  min-width: 30%;
  height: 100%;
  background: #fff; /*
  padding-right: 0.65em; */
`;
export const Title = styled.p`
  color: #fff;
  padding-left: 1em;
`;
