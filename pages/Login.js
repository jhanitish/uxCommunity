import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle } from "styled-components"
import Header from '../components/Header';
import ErrorMessage from '../components/errorMessage';
import '../static/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    * {
        box-sizing: border-box;
    }
  }
`;
const LoginContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;

    .mainHead {
        color: #444C5F;
        font-family: "Proxima Nova";
        font-size: 36px;
        line-height: 44px;
        font-weight: 500;
        @media screen and (max-width: 991px) {
            font-size: 22px;
            line-height: 27px;
            text-align: center;
        }
    }
    .subString {
        color: #5A6377;
        /* font-family: "Proxima Nova"; */
        font-size: 18px;
        line-height: 40px;
        font-weight: 500;
        @media screen and (max-width: 991px) {
            font-size: 14px;
            line-height: 17px;
            text-align: center;
        }
    }

    input[type=text], input[type=password] {
        box-sizing: border-box;	
        height: 50px;	
        width: 100%;	
        border: 1px solid #D4D9E2;	
        border-radius: 5px;
        padding: 10px;
        @media screen and (max-width: 991px) {
            min-width: 280px;
        }
    }
    .email-psw{
        margin-bottom: 30px;
    }
    .user-form{
        max-width: 524px;
        width: 100%;
        margin: 0 auto;
    }
    .form-div{
        margin-top: 50px;
    }
    .form-div label{
        display: block;
        margin-bottom: 12px;
        color: #5A6377;
        font-family: "Proxima Nova";
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
    }
      
      button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
      }
      
      button:hover {
        opacity: 0.8;
      }
      
      .loginBtn {
        height: 48px;
        width: 120px;
        border-radius: 5px;
        background-color: #1B5DFF;
        float: right;
      }
      
      span.psw a{
        float: left;
        height: 20px;
        width: 130px;
        color: #5A6377;
        font-family: "Proxima Nova";
        font-size: 16px;
        line-height: 20px;
        padding-top: 16px;
        text-decoration: underline;
      }
      .btn-div{
          margin-top: 24px;
      }
      
`;

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('noError');
    const [errorText, setErrorText] = useState('gfdfgff');
    const emailRef = useRef();
    const pswRef = useRef();
    const logInBtn = () => {
        
        if(emailRef.current.value === '' || emailRef.current.value.lenght === 0){
            setErrorMessage('emailError');
            setErrorText('Email field cannot be empty');
        }else if(pswRef.current.value === '' || pswRef.current.value.lenght === 0){
            setErrorMessage('pwdError');
            setErrorText('Password field cannot be empty');
        } else {
            setErrorMessage('noError');
            if( !validateEmail(emailRef.current.value)){
                setErrorMessage('emailError');
                setErrorText('Please enter a valid email id');
            }else {
                console.log('validation successfull', emailRef.current.value, pswRef.current.value);
            }
        }
    };
    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    return(
        <>
        <GlobalStyle />
            <Header page="login"/>
            <LoginContainer className="row">
                <div className="hidden-xs hidden-sm col-md-6 loginImage">
                    <img src="../static/login-graphic.png" alt="login image" height="493px" width="556px" />
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="user-form">
                        <div className="heading-div">
                            <h3 className="mainHead">Log in to your network</h3>
                            <h5 className="subString">Share your knowledge and learn from the best!</h5>
                        </div>
                        <div className="form-div">
                            <div className="email-psw">
                                <label for="uname">Username</label>
                                <input type="text" placeholder="Enter Username" name="uname" ref={emailRef} required />
                                {errorMessage === 'emailError' ? <ErrorMessage errorText={errorText} /> : ''}
                            </div>

                            <div className="email-psw">
                                <label for="psw">Password</label>
                                <input type="password" placeholder="Enter Password" name="psw" ref={pswRef} required />
                                {errorMessage === 'pwdError' ? <ErrorMessage errorText={errorText} /> : ''}
                            </div>
                        </div>
                            
                        <div className="btn-div">
                            <span className="psw"><a href="#">Forgot password?</a></span>
                            <button type="button" className="loginBtn" onClick={ logInBtn }>Log in</button>
                        </div>
                    </div>
                </div>
            </LoginContainer>
        </>
    )
}

export default Login;