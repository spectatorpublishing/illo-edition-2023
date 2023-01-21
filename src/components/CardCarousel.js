import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import "./styles.css";

const cardItems = [
  {
    id: 1,
    title: "Stacked Card Carousel",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est."
  },
  {
    id: 2,
    title: "Second Item",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    title: "A Third Card",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla."
  },
  {
    id: 4,
    title: "Fourth",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

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

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleForwardCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
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
        previousIndex: 0,
        currentIndex: cardItems.length - 1,
        nextIndex: cardItems.length - 2,
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        nextIndex:
          prevState.currentIndex - 2 === 0
            ? cardItems.length - 1
            : prevState.currentIndex - 2
      }));
    }
  }, [indexes.currentIndex]);

  /* useEffect(() => {
    const transitionInterval = setInterval(() => {
        handleForwardCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleForwardCardTransition, indexes]); */

  return (
    <Container>
        <h1 onClick={() => handleBackwardCardTransition()}>back</h1>
        <h1 onClick={() => handleForwardCardTransition()}>next</h1>
      <CarouselWrapper>
        {cardItems.map((card, index) => (
          <li
            key={card.id}
            className={`card ${determineClasses(indexes, index)}`}
          >
            <h2>{card.title}</h2>
            <p>{card.copy}</p>    
          </li>
        ))}
      </CarouselWrapper>
    </Container>
  );
};

export default CardCarousel;

const Container = styled.div`


`

const CarouselWrapper = styled.div`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 200px;
    margin: 100px auto;
    align-items: center;
    position: relative;

`