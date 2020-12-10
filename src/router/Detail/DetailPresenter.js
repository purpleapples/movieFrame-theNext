import styled from 'styled-components';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.poster});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.2;
  z-index: -1;
`;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;    
    align-items:flex-end;
    height:100%;    
    z-index:1;  
    opacity:1;
`;
const UpperDiv = styled.section`
    margin-top:20px;    
    height:400px;
    width: 600px;
    min-width:600px;    
    margin-right:10vw;
    display:grid;
    grid-template-columns: 400px 200px;    
`;
const LowerDiv = styled.section`    
    height:150px;
    width: 600px;
    min-width:600px;    
    margin-right:10vw; 
`;
const ImageArticle = styled.article`
    background-image:url(${props=> `${props.poster}`});
    background-repeat:no-repeat;
    background-size:cover;
    opacity:1;
    
`;
const StoryArticle = styled.article`
    padding-top:10px;
`;
const CreatorArticle = styled.article`
    display:grid;
    grid-template-rows: 3em 3em 3em 3em 3em 6em 3em 3em 3em 3em; 
`
const StyledP = styled.p`
    font-size:1rem;
    color:whitesmoke;
    opacity:0.7;
    font-weight:bold;
`;
const FigureSpan = styled.span`
    color:white;
    font-size:1.4rem;
    font-weight:bold;
`;
const DetailPresenter = ({
    result,
    error,
    loading,
    like,
    _handleOnClick
}) => {          
    
    return(
    <>
    {loading ? (<Loader />) : (result && (
        <>
        <Backdrop poster={result.poster}/>
        <Container >                                
        <UpperDiv>
            <ImageArticle poster={result.poster}/>
            <CreatorArticle>
                <FigureSpan> 감독 </FigureSpan>
                <FigureSpan>{result.director}</FigureSpan>
                <FigureSpan>장르 </FigureSpan>
                <FigureSpan>{result.genre}</FigureSpan>
                <FigureSpan>배우</FigureSpan>
                <FigureSpan>{result.actors.map((actor) => (actor+" "))}</FigureSpan>
                <FigureSpan>개봉일 </FigureSpan>
                <FigureSpan>{result.releaseDt}</FigureSpan>
                <FigureSpan>상영시간</FigureSpan>
                <FigureSpan>{result.runningtime} <Button like={like} oid={result._id} _handler={ _handleOnClick} />
                 </FigureSpan>
            </CreatorArticle>
        </UpperDiv>
        <LowerDiv>
            <StoryArticle>
            <StyledP>{result.synopsys}</StyledP>
            </StoryArticle>
        </LowerDiv>
    </Container>
    </>
    )
    )}
        
    </>
    )
}

export default DetailPresenter;