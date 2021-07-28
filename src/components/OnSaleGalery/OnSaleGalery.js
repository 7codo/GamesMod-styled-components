import React, { useRef, useEffect, useState } from "react";

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
import { gameOnSale } from "../../pages/HomePage/Data";

const OnSaleGalery = () => {
  const gamesConRef = useRef(null);
  const gamesItemRef = useRef(null);
  const [disableRight, setDisableRight] = useState(true);
  const [disableLeft, setDisableLeft] = useState(true);

  useEffect(() => {
    const scrollWidth = gamesConRef.current.scrollWidth;
    const gamesConWidth = gamesConRef.current.clientWidth;

    if (scrollWidth <= gamesConWidth) {
      //when scrollwidth greater than container width the scrollbar is visible
      setDisableRight(true);
      // setDisableLeft(true);
    } else {
      setDisableRight(false);
      // setDisableLeft(false);
    }
  }, []);

  // useEffect(() => {
  //   if (gamesConRef.current.scrollLeft === 0) {
  //     setDisableLeft(true);
  //   } else {
  //     setDisableLeft(false);
  //   }
  // }, [gamesConRef.current.scrollLeft]);

  const onRightScroll = () => {
    // get scroll x of element
    const scrollLeft = gamesConRef.current.scrollLeft;
    const scrollWidth = gamesConRef.current.scrollWidth;
    const width = gamesConRef.current.offsetWidth;
    setDisableLeft(false);

    gamesConRef.current.scrollTo(scrollLeft + 100, 0);
    if (scrollWidth - scrollLeft === width) {
      //when the scroll get the end
      setDisableRight(true);
      setDisableLeft(false);
    } else {
      setDisableRight(false);
      setDisableLeft(true);
    }
  };

  const onLeftScroll = () => {
    gamesConRef.current.scrollTo(gamesConRef.current.scrollLeft - 100, 0);
    if (gamesConRef.current.scrollLeft === 0) {
      setDisableLeft(true);
      setDisableRight(false);
    } else {
      setDisableLeft(false);
      setDisableRight(true);
    }
  };
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
              {/*  */}
              <LeftNavIcon
                className={`${disableLeft ? "disable" : ""}`}
                onClick={onLeftScroll}
              />
              <RightNavIcon
                className={`${disableRight ? "disable" : ""}`}
                onClick={onRightScroll}
              />
            </NavButtonsContainer>
          </HeadingContainer>
          <GamesItemsContainer ref={gamesConRef}>
            {gameOnSale.map((gameItem) => {
              const {
                id,
                title,
                kind,
                newPrice,
                oldPrice,
                discount,
                coverImg,
              } = gameItem;

              return (
                <GameItem ref={gamesItemRef} key={id}>
                  <Cover src={coverImg} />
                  <Title to={`game?title=${title}`}>{title}</Title>
                  <Kind>{kind}</Kind>

                  <PriceContainer>
                    {discount && <DiscountBy>{discount}</DiscountBy>}
                    {oldPrice && <OldPrice>${oldPrice}</OldPrice>}
                    <NewPrice>${newPrice}</NewPrice>
                  </PriceContainer>
                </GameItem>
              );
            })}
          </GamesItemsContainer>
        </OnSaleContainer>
      </OnSaleSection>
    </IconContext.Provider>
  );
};

export default OnSaleGalery;
