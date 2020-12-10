import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import Poster from '../../components/Poster';
const Container = styled.div`
    padding:20px;
`;
const HomePresenter = (
    {
        movieList,
        error,
        loading
    }
) => {            
    return (
        <>        
            <Helmet>
                <title>MovieFrame | Home</title>
            </Helmet>
            {loading ? (<Loader />) : (
                <Container>                            
                    <Section title="영화목록">
                    {
                        movieList.map(movie => {
                            return(<Poster 
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
                </Container>
            )}
            
        </>
    );
};

export default HomePresenter;