import styled from 'styled-components';
import Helmet from 'react-helmet';
const Container = styled.div`
    padding: 20px;
`;
const Form = styled.form`
    display:grid;
    grid-template-columns: 50px 150px 50px;
    gap: 5px;
`;
const Select = styled.select`
    border-radius : 4px 4px 4px 4px;
`;
const Option = styled.option`    
`;
const InputText = styled.input``;
const InputButton = styled.input``;

const SearchPresenter = () => {

    return (
        <Container>
            <Helmet>
                <title>MovieFrame | Search </title>
            </Helmet>
            <Form>
                <Select>                    
                    <Option value="null">선택</Option>
                    <Option>감독</Option>
                    <Option>배우</Option>
                    <Option>장르</Option>
                </Select>
                <InputText></InputText>
                <InputButton type="submit" value="검색"/>
            </Form>
        </Container>
    );
};

export default SearchPresenter;