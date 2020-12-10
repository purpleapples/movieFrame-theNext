import {React, useState, useEffect} from 'react';
import { movieApi } from '../../api';
import DetailPresenter from './DetailPresenter';

const DetailContainer = (props) => {
    
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    const [like, setLike] = useState("");
    const setDetail = async () => {

        const {match: {params:{naver_code}},
        history:{push}}        
        = props;                
        let result = null; 
        try {
          ({data: {result}}= await movieApi.getMovieSynopsys(naver_code));
          console.log(result);
        } catch (error) {
            setError({error:error});
        }finally{
            setResult(result);    
            setLike(result.like);
            setLoading(false);
        }
    };
    useEffect(()=>{            
        setDetail();
    }, []);

    const _handleOnClick = (event) => {
        event.preventDefault();
        console.log("handle")
        const {_id, like} = result;
        register(_id, like);
    }

    const register = async (_id, like) => {
        let oid = _id;
        console.log(like);
        try {
            if (like ) {
                ({data:{result:like}}= await movieApi.unregister(oid)); 
            }else{
                ({data:{result:like}}= await movieApi.register(oid));
            } 
        } catch (error) {
            setError({error});
        }finally{
            result['like']=like;
            setResult(result);
            setLike(like);
            setLoading(false);
        }        
    }
    return (<DetailPresenter 
            result={result}
            error={error}
            loading={loading}
            like={like}
            _handleOnClick = {_handleOnClick}
        />);

}

export default DetailContainer;