import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import Poster from '../../components/Poster';
import SubTitle from '../../components/SubTitle';

const Container = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    padding:20px;
`;
const Article = styled.article`
    display:grid;    
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 20px;
`;
const Ul = styled.ul`
    display:grid;    
    grid-template-rows: repeat(auto-fill, 15px);
    gap: 10px;
`;
const UserPresenter = ({
    state   
}) => {        
    const {result, error, loading} =state;
// return (<div>{loading}</div>);
    console.log(result);
    return (
        <>        
            <Helmet>
                <title>MovieFrame | User</title>
            </Helmet>
            {loading ? (<Loader />) : result && (                
                <Container>                            
                    {console.log(result)}
                    <Section title="내가 좋아하는 영화목록~">
                    {
                        result.movie_lst.map(movie => {
                            return(<Poster 
                                key={movie._id}
                                naver_code = {movie.naver_code}
                                title={movie.title}
                                poster={movie.thumbnail}
                                star={movie.star}
                                director={movie.director}
                                actors={movie.actors}
                                genre={movie.genre}
                                runningtime={movie.runningtime}
                                releaseDt={movie.releaseDt}
                                />)
                        }                            
                        )
                    }
                    </Section>                               
                    <Section title="나의 취향">
                        
                        <Ul>                                                        
                            <SubTitle value="감독" />
                            {result.top5.director.map(director => (<li key="">{director}</li>))}
                        </Ul>             
                        <Ul>        
                            <SubTitle value="배우" />                    
                            {result.top5.actor.map(actor => (<li key="">{actor}</li>))}
                        </Ul>             
                        <Ul>                     
                            <SubTitle value="장르" />
                            {result.top5.genre.map(genre => (<li key="">{genre}</li>))}
                        </Ul>                        
                    </Section>

                </Container>
            )}
            
        </>
        
    );
};

export default UserPresenter;