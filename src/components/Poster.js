import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding:20px;    
`;

const Image = styled.div`

    background-image:url(${props => `${props.bgUrl}`});    
    height: 130px;
    width: 130px;
    border-radius: 4px;
    background-position: center center;
    transition:opacity 0.1s linear;
`;

const Rating= styled.span`
    bottom: 5px;
    right:5px;
    position: absolute;
    opacity:0;
`;

const ImageContainer = styled.div`
    margin-bottom:5px;
    position:relative;
    &:hover{
        ${Image}{
            opacity:0.3;
        }
        ${Rating}{
            opacity:1;
        }
    }
`;
const Title = styled.span`
    display:block;
    margin-bottom:3px;
`;

const Year = styled.span`
    font-size: 10px;
    color:rgba(255,255,255, 0.5);
`;

const Poster = ({
                naver_code,
                title,
                poster,
                star,
                director,
                actors,
                genre,
                runningtime,
                releaseDt
}) => {
    return(
        <Link to={`/movie/${naver_code}`}>
        <Container>
            <ImageContainer>
                <Image
                bgUrl = {
                    poster ? poster: require("../assets/noPosterSmall.png")
                }  
                >
                </Image>                                
                <Rating>
                    <span role="img" aria-label="rating">
                    ⭐️
                    </span>
                    {star} / 10
                </Rating>
            </ImageContainer>
            <Title>
                {title}
            </Title>
            <Year>{releaseDt}</Year>
        </Container>
    </Link>
    );
    
    
}

export default Poster

