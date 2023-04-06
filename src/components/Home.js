import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import home_background from "./../assets/home_background.png"
import right_arrow from "./../assets/right_arrow.svg"
import home_orb from "./../assets/home_orb.png"

const Home = () => {
    return (
        <HomeWrapper background={home_background}>
            <ArrowWrapper background={home_orb}>
                <Link to={"/illos"}>
                    <img src={right_arrow} />
                </Link>
            </ArrowWrapper>
            <MainTitle>24 Hours on Campus</MainTitle>
            <MainContent>
                <p>by Spectator Illustrations Team</p>
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

const MainTitle = styled.div`
    font-family: 'Italiana', serif;
    font-size: 10rem;
`

const MainContent = styled.div`
    font-size: 1.25rem;
    padding-top: 2rem;
`