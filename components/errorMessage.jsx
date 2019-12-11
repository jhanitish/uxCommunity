import styled from 'styled-components';

const ErrorContainer = styled.div`
    font-size: 15px;
    color: red;
    height: 10px;
    display: block;
`;
const ErrorMessage = props => {
    return (
        <ErrorContainer className="errorMessage">
            { props.errorText }
        </ErrorContainer>
    );
};

export default ErrorMessage;