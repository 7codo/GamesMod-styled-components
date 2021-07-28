import styled from "styled-components";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const OnSaleSection = styled.section`
  padding: 1.9em 0;
`;
export const OnSaleContainer = styled.div`
  color: #fff;
`;
export const HeadingContainer = styled.div`
  padding: 1.3em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OnSaleTitle = styled.h2`
  font-size: 1.2rem;
`;
export const NavButtonsContainer = styled.div``;
export const LeftNavIcon = styled(BiLeftArrowCircle)`
  margin-right: 0.7em;
  cursor: pointer;
  &.disable {
    color: ${({ theme }) => theme.mainTextkColor};
  }
`;
export const RightNavIcon = styled(BiRightArrowCircle)`
  cursor: pointer;
  &.disable {
    color: ${({ theme }) => theme.mainTextkColor};
  }
`;
export const GamesItemsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;
export const GameItem = styled.div`
  margin: 0.5em;
`;
export const Cover = styled.img`
  width: 204px;
  height: 274px;
`;
export const Title = styled(Link)`
  margin-top: 0.5em;
  display: block;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
`;
export const Kind = styled.p`
  color: ${({ theme }) => theme.mainTextkColor};
  margin: 0.7em 0;
`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
`;
export const DiscountBy = styled.p`
  background: #b1dd8b;
  padding: 0.2em;
  color: #000;
  border-radius: 5px;
`;
export const OldPrice = styled.p`
  text-decoration: line-through;
  color: ${({ theme }) => theme.mainTextkColor};
`;
export const NewPrice = styled.p`
  font-weight: 700;
`;
