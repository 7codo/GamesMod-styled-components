import React, { useState } from "react";
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
  const [id, setId] = useState(1);
  const selectGame = GamesOnGalery.filter(
    (gameOnGalery) => gameOnGalery.id === id
  );
  console.log(selectGame);

  return (
    <GalerySection>
      <GaleryContainer>
        {selectGame.map((selGame) => {
          const { title, heading, longTitle, coverimg } = selGame;
          return (
            <ShowScreen cover={coverimg}>
              <BottomGradient>
                <ShowScreenContainer>
                  <TopTitle>{title}</TopTitle>
                  <BottomContent>
                    <HeadingTitle>{heading}</HeadingTitle>
                    <Subtitle>{longTitle}</Subtitle>
                    <Button primary>
                      Play for free
                      <RightArrowIcon />
                    </Button>
                  </BottomContent>
                </ShowScreenContainer>
                {/* <GameCover src={cover1} /> */}
              </BottomGradient>
            </ShowScreen>
          );
        })}
        <NavigationTabs>
          {GamesOnGalery.map((gameOnGalery) => {
            const { id, title, thumbnail } = gameOnGalery;
            return (
              <GameTab
                key={id}
                onClick={() => setId(id)}
                className={`${id === 1 ? "active" : ""}`}
              >
                <Thumbnail src={thumbnail} />
                <Title>{title}</Title>
              </GameTab>
            );
          })}
        </NavigationTabs>
      </GaleryContainer>
    </GalerySection>
  );
};

export default GamesGalery;
