import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../static/bootstrap.min.css';

library.add(fab, faCheckSquare, faCoffee, faSearch)

const HeaderContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0; 
    right: 0;
    padding: 30px 20px;
    // border-bottom: 1px solid #D4D9E2;
    background: #FFFFFF;
    display: block;
    z-index: 1000;
    margin: 0 auto;

    .mid-content{
        padding: 25px 0; 
        & div {
            float: right;
            display: flex;
            justify-content: center;
            width: 100%;
            & a{
                color: #444C5F;	
                /* font-family: "Proxima Nova Semibold"; */
                font-size: 18px;
                font-weight: 700;
                line-height: 22px;
                padding: 0 30px;
                text-decoration: none;
            }
        }
    }
    .joinClass {
        padding: 9px 18px;
        border-radius: 5px;
        background-color: #1B5DFF;
        margin-left: 33px;
        color: #FFFFFF;	
        font-family: "Proxima Nova Semibold";
        font-size: 18px;	
        font-weight: 600;	
        line-height: 22px;
        outline: none;
        border: none;
        display: inline-block;
        cursor: pointer;
        @media screen and (max-width: 991px) {
            display: none;
        }
    }

    .loginClass {
        padding: 9px 18px;
        height: 22px;
        width: 45px;
        color: #444C5F;
        font-family: "Proxima Nova";
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        cursor: pointer;
        @media screen and (max-width: 991px) {
            display: none;
        }
    }

    .accountSettingsHeader{
        text-align: right;
        span{
            color: #5A6377;	
            font-family: "Proxima Nova";	
            font-size: 18px;	
            font-weight: 600;	
            line-height: 22px;	
            text-align: center;
            display: inline-block;
            margin-right: 20px;
            font-weight: 500;
        }

        button{
            padding: 10px 30px;
            border-radius: 5px;	
            border: 0;
            font-family: "Proxima Nova";	
            font-size: 18px;	
            font-weight: 600;	
            line-height: 22px;
        }
        & .nextButton{
            background-color: #1B5DFF;
            color: #fff;
        }
        & .previousButton{
            border: 1px solid #D4D9E2;
            color: #5A6377;
            margin-right: 20px;
        }
    }

    .right-content {
        padding: 20px 0;
        & > div {
            float: right;
        }
    }
    .search{
        display: inline-block;
        @media screen and (max-width: 991px) {
            position: relative;
            top: -4px;
        }
    }

    .menu-btn {
        font-size:30px;
        cursor:pointer;
        display: none;
        @media screen and (max-width: 991px) {
            display: inline-block;
            padding-left: 20px;
        }
    }

    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #FFFFFF;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        display: none;
        @media screen and (max-width: 991px) {
            display: inline-block;
        }
      }
      
      .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }
      
      @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
      }
      .heading-list{
        color: #444C5F;
        font-family: "Proxima Nova";
        font-size: 16px;
        font-weight: 600;
        line-height: 42px;
        list-style: none;
        & .subheading-list{
            padding-left: 10px;
        }
        & .subheading-list li{
            font-weight: 400;
            list-style: none;
        }
      }
      .joinLogin{
          margin-top: 50px;
          text-align: center;
      }

      .joinMobileClass {
        padding: 9px 18px;
        border-radius: 5px;
        background-color: #1B5DFF;
        margin-left: 33px;
        color: #FFFFFF;	
        font-family: "Proxima Nova Semibold";
        font-size: 18px;	
        font-weight: 600;	
        line-height: 22px;
        outline: none;
        border: none;
        display: inline-block;
        cursor: pointer;
    }

    .loginMobileClass {
        padding: 9px 18px;
        height: 22px;
        width: 45px;
        color: #444C5F;
        font-family: "Proxima Nova";
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        cursor: pointer;
    }
`;
const Header = props => {
    const openNav = ()  => {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    
    return (
        <HeaderContainer className="container-fluid row">
                <div className="col-xs-6 col-md-1 logo">
                    <img src="../static/logo.svg" alt="UX Stories" height="72px" width="74px" />
                </div>
                {
                    props.page === "accStep1" ?
                    <div className="col-md-11 col-xs-6 accountSettingsHeader">
                        <span>Profile settings step 1 of 4</span>
                        <button className="previousButton" onClick = { props.onClick }>Previous</button>
                        <button className="nextButton" onClick = { props.onClick }>Next</button>
                    </div> :
                    <>
                        <div className="hidden-xs hidden-sm col-md-8 mid-content">              
                            <div>
                                <a className="midSection">Stories</a>
                                <a className="midSection">Resources</a>
                                <a className="midSection">Jobs</a>
                                <a className="midSection">Professionals</a>
                                <a className="dotSection">
                                    . . .
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-3 right-content">  
                            <div>
                                <div className="search"><FontAwesomeIcon icon="search" size="lg" /></div>
                                    { props.page === "login" ? 
                                        <a className="joinClass" href="./signup">Join Community</a> : 
                                        <a className="loginClass" href="./login">Login</a>
                                    }
                                <span className="menu-btn" onClick= { openNav }>&#9776;</span>
                            </div>
                        </div>
                    </>
                }
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={ closeNav }>&times;</a>
                    <ul>
                        <li className="heading-list">Stories
                            <ul className="subheading-list">
                                <li>Case Studies</li>
                                <li>Discussions</li>
                            </ul>
                        </li>
                        <li className="heading-list">Resources
                            <ul className="subheading-list">
                                <li>Articles</li>
                                <li> E-books</li>
                                <li>Tools</li>
                                <li>Videos</li>
                            </ul>
                        </li>
                        <li className="heading-list">Jobs
                            <ul className="subheading-list">
                                <li>View Jobs</li>
                                <li>Post Job</li>
                            </ul>
                        </li>
                        <li className="heading-list">Professionals</li>
                        <li className="heading-list">About Us</li>
                        <li className="heading-list">Contact</li>
                        <li className="heading-list">Terms & Conditions</li>
                    </ul>
                    <div className="joinLogin">
                        { props.page === "login" ? 
                            <a className="joinMobileClass" href="./signup">Join Community</a> : 
                            <a className="loginMobileClass" href="./login">Login</a>
                        }
                    </div>
                </div>
        </HeaderContainer>
    )
};

export default Header;