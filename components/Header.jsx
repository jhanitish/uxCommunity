import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faSearch)

const HeaderContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    background: #FFFFFF;
    display: block;
    padding: 30px 20px;
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
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={ closeNav }>&times;</a>
                <ul>
                    <li class="heading-list">Stories
                        <ul class="subheading-list">
                            <li>Case Studies</li>
                            <li>Discussions</li>
                        </ul>
                    </li>
                    <li class="heading-list">Resources
                        <ul class="subheading-list">
                            <li>Articles</li>
                            <li> E-books</li>
                            <li>Tools</li>
                            <li>Videos</li>
                        </ul>
                    </li>
                    <li class="heading-list">Jobs
                        <ul class="subheading-list">
                            <li>View Jobs</li>
                            <li>Post Job</li>
                        </ul>
                    </li>
                    <li class="heading-list">Professionals</li>
                    <li class="heading-list">About Us</li>
                    <li class="heading-list">Contact</li>
                    <li class="heading-list">Terms & Conditions</li>
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