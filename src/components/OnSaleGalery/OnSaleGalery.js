import React from "react";

import {
  OnSaleSection,
  OnSaleContainer,
  HeadingContainer,
  OnSaleTitle,
  NavButtonsContainer,
  GamesItemsContainer,
  GameItem,
  Cover,
  Title,
  Kind,
  PriceContainer,
  DiscountBy,
  OldPrice,
  NewPrice,
  LeftNavIcon,
  RightNavIcon,
} from "./OnSaleGalery.elements";

import { IconContext } from "react-icons";
import ticktock from "../../images/games/ticktock.svg";
import bioshock from "../../images/games/bioshock.svg";

const OnSaleGalery = () => {
  return (
    <IconContext.Provider
      value={{
        size: 33,
      }}
    >
      <OnSaleSection>
        <OnSaleContainer>
          <HeadingContainer>
            <OnSaleTitle>Games On Sale</OnSaleTitle>
            <NavButtonsContainer>
              <LeftNavIcon className="disable" />
              <RightNavIcon />
            </NavButtonsContainer>
          </HeadingContainer>
          <GamesItemsContainer>
            <GameItem>
              <Cover src={bioshock} />
              <Title>Ipsum adipisicing</Title>
              <Kind> Action, RPG</Kind>

              <PriceContainer>
                <NewPrice>$8.67</NewPrice>
              </PriceContainer>
            </GameItem>
            <GameItem>
              <Cover src={ticktock} />
              <Title>Ipsum adipisicing</Title>
              <Kind>Action Games</Kind>

              <PriceContainer>
                <DiscountBy>-80%</DiscountBy>
                <OldPrice>$50</OldPrice>
                <NewPrice>$8.67</NewPrice>
              </PriceContainer>
            </GameItem>
            <GameItem>
              <Cover src={ticktock} />
              <Title>Ipsum adipisicing</Title>
              <Kind>Action Games</Kind>

              <PriceContainer>
                <DiscountBy>-80%</DiscountBy>
                <OldPrice>$50</OldPrice>
                <NewPrice>$8.67</NewPrice>
              </PriceContainer>
            </GameItem>
            <GameItem>
              <Cover src={ticktock} />
              <Title>Ipsum adipisicing</Title>
              <Kind>Action Games</Kind>

              <PriceContainer>
                <DiscountBy>-80%</DiscountBy>
                <OldPrice>$50</OldPrice>
                <NewPrice>$8.67</NewPrice>
              </PriceContainer>
            </GameItem>
            <GameItem>
              <Cover src={ticktock} />
              <Title>Ipsum adipisicing</Title>
              <Kind>Action Games</Kind>

              <PriceContainer>
                <DiscountBy>-80%</DiscountBy>
                <OldPrice>$50</OldPrice>
                <NewPrice>$8.67</NewPrice>
              </PriceContainer>
            </GameItem>
            <GameItem>
              <Cover src={ticktock} />
              <Title>Ipsum adipisicing</Title>
              <Kind>Action Games</Kind>

              <PriceContainer>
                <DiscountBy>-80%</DiscountBy>
                <OldPrice>$50</OldPrice>
                <NewPrice>$8.67</NewPrice>
              </PriceContainer>
            </GameItem>
            <GameItem>
              <Cover src={ticktock} />
              <Title>Ipsum adipisicing</Title>
              <Kind>Action Games</Kind>

              <PriceContainer>
                <DiscountBy>-80%</DiscountBy>
                <OldPrice>$50</OldPrice>
                <NewPrice>$8.67</NewPrice>
              </PriceContainer>
            </GameItem>
          </GamesItemsContainer>
        </OnSaleContainer>
      </OnSaleSection>
    </IconContext.Provider>
  );
};

export default OnSaleGalery;
