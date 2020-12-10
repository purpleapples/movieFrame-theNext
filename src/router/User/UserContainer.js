import {React, useState, useEffect} from 'react';
import UserPresenter from './UserPresenter';
import {movieApi} from '../../api';

const UserContainer = () => {

    const [state, setState] = useState({
        result:"",
        error:"",
        loading:true
    });    
    
    useEffect(
        ()=>{
        setDefault();           
        }
    ,[])
    const setDefault = async() =>{
        let result = null;        
        try {
            ({data:{result}} = await movieApi.getFavorite());                                 
        } catch (error) {
            setState({error})
        }finally{
            setState({result, loading:false})
        }
    };

    return ( <UserPresenter 
        state={state}
    />);
}

export default UserContainer;