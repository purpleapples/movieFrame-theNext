import styled from 'styled-components';

const StyledTitle = styled.span`
    border-radius: 4px 4px 4px 4px;
    font-weight:bold;
    font-size:18px;
    color:yellow;    
`
const SubTitle = (props) => {
    return(<StyledTitle>{props.value} </StyledTitle>)
}

export default SubTitle;