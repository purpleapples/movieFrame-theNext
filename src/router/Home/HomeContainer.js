import React from 'react';
import HomePresenter from './HomePresenter';
import {movieApi} from '../../api';
class HomeContainer extends React.Component {
    constructor(props){
        super(props);        
    }
    
    state = {
        movieList:null,
        error:null,
        loading:true
    };
    
    async componentDidMount(){
        try {
            
            const {
                data: {results: movieList},
    
            } = await movieApi.getMovieList();                         
            this.setState({movieList});
        }catch (error) {
            this.setState({error});
        }finally{
            this.setState({loading:false});
        }
    };
    render(){        
        const {movieList, error, loading} = this.state;        
        return (<HomePresenter 
                    movieList={movieList}
                    error={error}
                    loading={loading}
                />       
                );
    };
}

export default HomeContainer;