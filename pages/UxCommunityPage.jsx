import styled, { createGlobalStyle } from "styled-components";
import '../static/bootstrap.min.css';
import Header from '../components/Header';
import CardComponent from '../components/cardComponent';
import lists from '../mock/uxCommunity.json';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    * {
        box-sizing: border-box;
    }
  }
`;

const BodyContent = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    margin-top: 200px;
`;

const CustomCardComponent = styled(CardComponent)`
    
`;

const UxCommunityPage = () => {
    return (
        <>
            <GlobalStyle />
            <Header/>
            <BodyContent>
                <CardComponent lists = { lists.community } page= "uxcommunity"/>
            </BodyContent>
        </>
    );
};

export default UxCommunityPage;