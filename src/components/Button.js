import styled from 'styled-components';

const HeartButton = styled.button`
    height:35px;
    width:35px;
    background-image: url(${props=> props.like ? "./tempImage/ignore.png" : "./tempImage/like.png"});    
    background-size:cover;
    z-index:1;
    &:hover{
        cursor:pointer;
    }
`;

const LikeButton = (props) =>{
     
    return(<HeartButton like={props.like} onClick={(event) => {
        props._handler(event)} }/>);
}

export default LikeButton;