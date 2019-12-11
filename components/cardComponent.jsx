import styled from 'styled-components';
import '../static/bootstrap.min.css';

const CardRowContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    @media (max-width: 1200px) { 
        justify-content: left;
    }
`;
const CardComponentContainer = styled.div`
    box-sizing: border-box;
    max-width: 300px;
    padding: 30px; 
    border: 1px solid #94BCFF;
    border-radius: 5px;
    margin: 13px;
`;
const ImageDiv = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: #D8D8D8;
`;
const NameHeading = styled.p`
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 24px;
    margin-bottom: 3px;	
    color: #2F3442;	
    font-family: "Proxima Nova";	
    font-size: 18px;	
    font-weight: 600;	
    line-height: 22px;
`;
const SubHeading = styled.p`
    margin: 0;	
    color: #9499A6;	
    font-family: "Proxima Nova";	
    font-size: 14px;	
    font-weight: 600;	
    line-height: 17px;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const YearsExp = styled.p`
    margin-top: 12px;	
    color: #9499A6;	
    font-family: "Proxima Nova";	
    font-size: 12px;	
    font-weight: 600;	
    line-height: 15px;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const FollowButton = styled.button`
    box-sizing: border-box;	
    padding: 12px 20px;
    border: 1px solid rgba(41,121,255,0.5);	
    border-radius: 5px;
    color: #1B5DFF;	
    font-family: "Proxima Nova";	
    font-size: 16px;	
    font-weight: 600;	
    line-height: 20px;
    margin-top: 18px;
    margin-bottom: 24px;
`;
const UserDetails = styled.div`
    color: #5A6377;	
    font-family: "Proxima Nova";	
    font-size: 12px;	
    font-weight: 600;	
    height: 15px;
    span{
        max-width: 90px;	
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    & .user-location{
        float: left;

    }
    & .total-followers{
        float: right;
    }
`;
const CardComponent = props => {
    return(
        <CardRowContainer className="row">
            {
                props.lists.map(list => (
                    <CardComponentContainer className="col-lg-3 col-md-4 col-xs-12 col-sm-6">
                        <ImageDiv>
                            <img src="" alt="Profile Pic"/>
                        </ImageDiv>
                        <NameHeading>{ list.name }</NameHeading>
                        <SubHeading>{ list.title }</SubHeading>
                        <YearsExp>{ list.experience }</YearsExp>
                        { 
                            props.page === 'recommended' ? 
                            (<FollowButton> + Bookmark </FollowButton>) :
                            list.follow ?
                            <FollowButton> + Following </FollowButton> :
                            <FollowButton> + Follow </FollowButton>
                        }
                        
                        <UserDetails>
                            <span className="user-location">{ list.location }</span>
                            <span className="total-followers">{ list.followers }</span>
                        </UserDetails>
                    </CardComponentContainer>
                ))
            }    
        </CardRowContainer>
    );
};


export default CardComponent;

