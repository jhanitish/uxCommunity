import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import '../static/bootstrap.min.css';
import Header from '../components/Header';
import ErrorMessage from '../components/errorMessage';
import ProfileForm from '../components/profileForm';

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
    & .heading{
        h2{
            color: #444C5F;
            font-family: "Proxima Nova";	
            font-size: 36px;	
            line-height: 44px;	
            text-align: center;
        }
        h4{
            color: #5A6377;	
            font-family: "Proxima Nova";	
            font-size: 18px;	
            line-height: 22px;	
            text-align: center;
        }
    }
    & .row{
        max-width: 795px;
        margin: 0 auto;
        margin-top: 60px;
        .settings-div{
            box-sizing: border-box;		
            border: 1px solid #D4D9E2;	
            border-radius: 5px;
            padding: 0;
        }
        .settings-heading{
            width: 100%;
            color: #5A6377;	
            font-family: "Proxima Nova";	
            font-size: 18px;	
            font-weight: 600;	
            line-height: 50px;
            border-bottom: 1px solid #D4D9E2;	
            border-radius: 5px 5px 0 0;
            padding-left: 30px;
        }
        .settings-content{
            width: 100%;
            ul{
                list-style-type: none;
                padding: 12px 32px 20px 30px;
                li{
                    font-family: "Proxima Nova";	
                    font-size: 18px;	
                    line-height: 50px;
                    color: #5A6377;

                    &.active{
                        color: #1B5DFF;
                    }
                }
            }
        }
        .details-div{
            padding-left: 72px;
            p{
                width: 100%;
                color: #444C5F;	
                font-family: "Proxima Nova";	
                font-size: 22px;	
                line-height: 27px;
            }
            textarea{
                box-sizing: border-box;
                width: 100%;
                border: 1px solid #D4D9E2;
                border-radius: 5px;
                background-color: #F4F5F8;
                margin-top: 30px;
                margin-bottom: 30px;
                padding: 40px 95px;
                resize: none;
                color: #5A6377;
                font-family: "Proxima Nova";
                font-size: 18px;
            }
            button{
                color: #FFFFFF;
                font-family: "Proxima Nova";
                font-size: 18px;
                font-weight: 600;
                line-height: 22px;
                padding: 14px 30px;
                border-radius: 5px;
                background-color: #1B5DFF;
                border: 0;
                outline: none;
                float: right;
            }
        }
    }
`;


const Portfolio = () => {
    const [openModal, setOpenModal] = useState(false);
    

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     // if (event.target == modal) {
    //     //     modal.style.display = "none";
    //     // }
    // }

    const openExperience = () => {
        setOpenModal(true);
        console.log('dsdsdds', openModal);
    }

    return (
        <>
            <GlobalStyle />
            <Header page="accStep1"/>
            <BodyContent className="container-fluid">
                <div className="heading">
                    <h2>Create Portfolio page (Optional)</h2>
                    <h4>Setup your portfilo some text will display here.</h4>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-3 settings-div">
                        <div className="settings-heading">
                            Settings
                        </div>
                        <div className="settings-content">
                            <ul>
                                <li className="active">Work Experience</li>
                                <li>Education</li>
                                <li>Skills</li>
                                <li>Contact Info</li>
                                <li>Social Profile</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-9 details-div">
                        <p>Work Experience</p>
                        <textarea defaultValue="You have not added any work experience." readOnly />
                        <button onClick={ openExperience }>+ Add Experience</button>
                    </div>
                </div>
            </BodyContent>
            <ProfileForm isopenModal = { openModal }/>
        </>
    );
};

export default Portfolio;