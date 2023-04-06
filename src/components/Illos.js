import styled from "styled-components/macro";
import CardCarousel from "./CardCarousel";
import React, {useState} from "react";
import { ReactComponent as LeftArrow } from "./../assets/left_arrow.svg";
import { illos } from "../data/illos";
import { Link } from "react-router-dom";
import { device } from "../device";

const Illos = () => {
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1
    });

    return (
        <IllosWrapper background={illos[indexes.currentIndex].background_color}>
            <Link to="/">
                <LeftArrow style={{zIndex:"1"}}fill={illos[indexes.currentIndex].text_color}/>
            </Link>
            <ClockWrapper>
                <img src={illos[indexes.currentIndex].clock_image} alt={illos[indexes.currentIndex].start_time}/>
            </ClockWrapper>

            <CardCarousel indexes={indexes} setIndexes={setIndexes}/>

            <IlloInfo textColor={illos[indexes.currentIndex].text_color}>
                <p>{illos[indexes.currentIndex].location}</p>
                <p className="name">{illos[indexes.currentIndex].illustrator}</p>
            </IlloInfo>
            <DescriptionWrapper textColor={illos[indexes.currentIndex].text_color}>{illos[indexes.currentIndex].text}</DescriptionWrapper>
        </IllosWrapper>
    )
}

export default Illos;

const IlloInfo = styled.div`
    color: ${props => props.textColor};
    padding-left:1rem;
    padding-right: 1rem;
    width: 65vw;
    align-self: center;
    display: flex;
    font-weight: 600;

    .name {
        font-weight: 400;
        margin-left: auto;
        @media (max-width:${device.tablet}) {
            margin-left: 0;
        }
    }

    @media (max-width:${device.tablet}) {
        font-size: 1rem;
        flex-direction: column;

        p {
            margin: 0;
        }
    }
`

const IllosWrapper = styled.div`
    background-color: ${props => props.background};
    transition: all 0.75s ease;
    padding: 5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    @media (max-width:${device.tablet}) {
        padding: 2rem;
    }
`

const ClockWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    margin: 2rem 2rem 0rem auto;

    img {
        width: 6rem;
        height: 6rem;
        transition: all 0.75s ease;

        @media (max-width:${device.tablet}) {
            width: 4rem;
            height: 4rem;
        }
    }
`

const DescriptionWrapper = styled.div`
    color: ${props => props.textColor};
    font-family: catamaran;
    font-size: 1.5rem;
    text-indent: 2rem;
    transition: all 0.75s ease;
    width: 65vw;
    align-self: center;
    padding: 1rem;

    ::first-letter {
        font-family: italiana;
        font-size: 3rem;
        font-weight: 400;

        @media (max-width:${device.tablet}) {
            font-size: 1.5rem;
        }
    }

    @media (max-width:${device.tablet}) {
        font-size: 1rem;
    }
`