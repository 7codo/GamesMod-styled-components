import React from "react";
import {
  GalerySection,
  GaleryContainer,
  ShowScreen,
  BottomGradient,
  NavigationTabs,
  GameTab,
  Thumbnail,
  Title,
  TopTitle,
  ShowScreenContainer,
  BottomContent,
  HeadingTitle,
  Subtitle,
  RightArrowIcon,
  GameCover,
} from "./GamesGalery.elements";

import { GamesOnGalery } from "../../pages/HomePage/Data";

import { Button } from "../../theme/GlobalStyles";

const GamesGalery = () => {
  console.log("😍", GamesOnGalery);

  return (
    <GalerySection>
      <GaleryContainer>
        <ShowScreen>
          <BottomGradient>
            <ShowScreenContainer>
              <TopTitle>Fortnite</TopTitle>
              <BottomContent>
                <HeadingTitle>Update</HeadingTitle>
                <Subtitle>
                  The hunt is on in Fortnite Chapter 2 - Season 5: Zero Point.
                </Subtitle>
                <Button primary>
                  Play for free
                  <RightArrowIcon />
                </Button>
              </BottomContent>
            </ShowScreenContainer>
            {/* <GameCover src={cover1} /> */}
          </BottomGradient>
        </ShowScreen>
        <NavigationTabs>
          <GameTab className="active">
            <Thumbnail />
            <Title>Eu enim ullamco</Title>
          </GameTab>
          <GameTab>
            <Thumbnail />
            <Title>Rocket League®</Title>
          </GameTab>
          <GameTab>
            <Thumbnail />
            <Title>Duis amet</Title>
          </GameTab>
          <GameTab>
            <Thumbnail />
            <Title>Minim pariatur</Title>
          </GameTab>
          <GameTab>
            <Thumbnail />
            <Title>Elit aliqua</Title>
          </GameTab>
          <GameTab>
            <Thumbnail />
            <Title>Sunt magna</Title>
          </GameTab>
        </NavigationTabs>
      </GaleryContainer>
    </GalerySection>
  );
};

export default GamesGalery;
