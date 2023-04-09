import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import home_background from "./../assets/home_background.png"
import right_arrow from "./../assets/right_arrow.svg"
import home_orb from "./../assets/home_orb.png"
import { device } from "../device";

const Home = () => {
    return (
        <HomeWrapper background={home_background}>
            <LogoWrapper>
                <a href="https://columbiaspectator.com"><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png" alt="Spec logo"></img></a>
            </LogoWrapper>
            <ArrowWrapper background={home_orb}>
                <Link to={"/illos"}>
                    <img src={right_arrow} alt="right arrow button to illustrations page"/>
                </Link>
            </ArrowWrapper>
            <MainTitle>24 Hours on Campus</MainTitle>
            <MainContent>
                <p>by Spectator Illustrations Team</p>
                <br/>
                <p>Design and Development by Laura Castro Venegas, Engineering Manager & Muchen Guo, Head of Product</p>
            </MainContent>
        </HomeWrapper>
    )
}

export default Home;

const HomeWrapper = styled.div`
    background-image: url('${props => props.background}');
    background-size: cover;
    height: 100vh;
    padding: 10rem;

    @media (max-width: 1000px) {
        padding: 5rem;
    }

    @media (max-width:${device.tablet}) {
        padding: 2rem;
    }
`

const ArrowWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-image: url('${props => props.background}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 12rem;
    height: 12rem;
    display: flex;
    
    img {
        width: 2rem;
        height: 2rem;
    }

    a {
        margin: 4rem 4rem 0rem auto;
        height: fit-content;
    }
`

const LogoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('${props => props.background}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 3rem;
    height: 3rem;
    display: flex;
    
    img {
        width: 3rem;
        height: 3rem;
    }

    a {
        margin: 3rem auto 0rem 4rem;
        height: fit-content;
    }
`

const MainTitle = styled.div`
    font-family: 'Italiana', serif;
    font-size: 9rem;

    @media (max-width: 1000px) {
        margin-top: 4rem;
        font-size: 7rem;
    }

    @media (max-width:${device.tablet}) {
        margin-top: 10rem;
        font-size: 5rem;
    }
`

const MainContent = styled.div`
    font-size: 1.25rem;
    padding-top: 2rem;
`