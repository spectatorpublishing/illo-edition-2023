import { Link } from "react-router-dom";
import styled from "styled-components";
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
            <MainTitle>Main Title/Text</MainTitle>
            <MainContent>
                <p>Lorem ipsum dolor sit amet. Cum veritatis nulla rem neque voluptas est voluptas iure et dolorum ipsum? Vel voluptatem adipisci et voluptatibus nihil sit alias totam. Et harum architecto eum quas amet aut provident provident? In rerum debitis vel asperiores eaque sed explicabo esse ex commodi dolore?</p>
                <p>Aut sunt neque non eveniet quaerat quo nihil nesciunt est ullam dolores sit vitae accusantium in impedit nihil qui quia officiis! Et porro esse sed totam galisum qui sint exercitationem qui sequi quaerat non commodi magnam sit eligendi necessitatibus. Eos voluptatem reiciendis hic rerum itaque rem nihil aliquid eum deserunt quidem vel quam alias. Eos inventore beatae At vero beatae vel repellendus quam eum voluptas placeat et veritatis nisi.</p>
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
    font-size: 3.5rem;
`

const MainContent = styled.div`
    font-size: 1.25rem;
    padding-top: 2rem;
`