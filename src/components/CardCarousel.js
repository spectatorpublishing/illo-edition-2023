import React, { useCallback } from "react";
import styled from "styled-components/macro";
import { ReactComponent as BackIcon } from "./../assets/back_icon.svg";
import { ReactComponent as NextIcon } from "./../assets/next_icon.svg";
import { illos } from "../data/illos";
import { device } from "../device";

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = ({indexes, setIndexes}) => {

  const handleForwardCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= illos.length - 1) {
      setIndexes({
        previousIndex: illos.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === illos.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  const handleBackwardCardTransition = useCallback(() => {
    // If we've reached the start, start again from the last card,
    // but carry previous value over
    if (indexes.currentIndex <= 0) {
      setIndexes({
        previousIndex: illos.length - 2,
        currentIndex: illos.length - 1,
        nextIndex: 0,
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.previousIndex - 1,
        currentIndex: prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex
      }));
    }
  }, [indexes.currentIndex]);

  return (
    <Container>
      <ArrowWrapper>
        <BackIcon fill={illos[indexes.currentIndex].text_color} onClick={() => handleBackwardCardTransition()} />
        <TimeStamp color={illos[indexes.currentIndex].text_color}>{illos[indexes.currentIndex].start_time}</TimeStamp>
      </ArrowWrapper>
      <CarouselWrapper>
        {illos.map((card, index) => (
          <Card
            key={card.id}
            className={`${determineClasses(indexes, index)}`}
            img_link={card.img_link}
          />
        ))}
      </CarouselWrapper>
      <ArrowWrapper>
        <NextIcon fill={illos[indexes.currentIndex].text_color} onClick={() => handleForwardCardTransition()} />
        <TimeStamp color={illos[indexes.currentIndex].text_color}>{illos[indexes.currentIndex].end_time}</TimeStamp>
      </ArrowWrapper>
    </Container>
  );
};

export default CardCarousel;

const Container = styled.div`
  display: flex;
  padding-bottom: 2rem;

  @media (max-width:${device.tablet}) {
    padding-bottom: 0rem;
  }
`

const ArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0rem;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }

  svg {
    margin: 0.5rem auto;
  }
`

const TimeStamp = styled.div`
  color: ${props => props.color};
  font-family: 'Catamaran', serif;
`

const CarouselWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto 15rem auto;
  align-items: center;
  position: relative;
  margin-bottom: 0;

  height: 38vw;

  @media (max-width:${device.tablet}) {
    margin: 3rem auto 0rem auto;
    height: 40vh;
  }
`

const Card = styled.div`
  background: url(${props => props.img_link});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.75s ease;
  opacity: 0;
  position: absolute;
  transform: scale(0.85) translateY(-100px);
  color: black;

  width: 60vw;
  height: 38vw;
  
  &.active {
    opacity: 1;
    transform: scale(1) translateY(0);
    box-shadow: 0 30px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  &.next {
    opacity: 0.5;
    z-index: 0;
  }
  
  &.prev {
    transform: scale(1.1) translateY(50px);
    z-index: 2;
    opacity: 0;
    visibility: hidden;
  }  
`