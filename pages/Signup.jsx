import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle } from "styled-components";
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

const BodyContent = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    margin-top: 200px;

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

    .signup-success{
        max-width: 483px;
        width: 100%;
        padding: 20px 18px;
        color: #5A6377;
        font-family: "Proxima Nova";
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        border: 1px solid #D0EDD5;
        border-radius: 5px;
        background-color: #E5F6E8;
        margin-top: 54px;
    }

    .account-type{
        & p{
            color: #5A6377;
            font-family: "Proxima Nova";
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
        }
        .radio-container {
            display: inline-block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            margin-right: 30px;
            cursor: pointer;
            user-select: none;
            color: #5A6377;
            font-family: "Proxima Nova";
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
        }

        .radio-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }

        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50%;
            height: 24px;
            width: 24px;
            border: 2px solid #D4D9E2;
            background-color: white;
        }

        .radio-container input:checked ~ .checkmark {
            background-color: white;
            border: 2px solid #1B5DFF;
        }

        .checkmark:after {
            content: "";
            position: absolute;
            background-color: white;
            border: 2px solid #1B5DFF;
        }

        .radio-container input:checked ~ .checkmark:after {
            display: block;
            background: #1B5DFF;
            border: 2px solid #1B5DFF;
        }

        .radio-container .checkmark:after {
            top: 3px;
            left: 3px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid #D4D9E2;
            background: #D4D9E2;
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
    const [errorText, setErrorText] = useState('');
    const [signupText, setSignupText] = useState('signup');
    const emailRef = useRef();
    const pswRef = useRef();
    const logInBtn = () => {
        
        if(emailRef.current.value === '' || emailRef.current.value.length === 0){
            setErrorMessage('emailError');
            setErrorText('Email field cannot be empty');
        }else if(pswRef.current.value === '' || pswRef.current.value.length === 0){
            setErrorMessage('pwdError');
            setErrorText('Password field cannot be empty');
        } else {
            setErrorMessage('noError');
            if( !validateEmail(emailRef.current.value)){
                setErrorMessage('emailError');
                setErrorText('Please enter a valid email id');
            }else {
                setErrorText('');
                setSignupText('success');
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
            <Header page="signup"/>
            <BodyContent className="row">
                <div className="hidden-xs hidden-sm col-md-6 loginImage">
                    <img src="../static/login-graphic.png" alt="login image" height="493px" width="556px" />
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="user-form">
                        <div className="heading-div">
                            <h3 className="mainHead">Create an account</h3>
                            <h5 className="subString">Join the fastest growing UX professionals’ community.</h5>
                        </div>
                        {
                            signupText === 'success' ? 
                            <div className="signup-success">
                                We have emailed you a secure link. Please click on it to verify
                                your email address.
                            </div> : 
                             <div className="signup-div">
                                <div className="form-div">
                                    <div className="email-psw">
                                        <label for="uname">Working email address</label>
                                        <input type="text" placeholder="Enter Username" name="uname" ref={emailRef} required />
                                        {errorMessage === 'emailError' ? <ErrorMessage errorText={errorText} /> : ''}
                                    </div>
    
                                    <div className="email-psw">
                                        <label for="psw">Password</label>
                                        <input type="password" placeholder="Enter Password" name="psw" ref={pswRef} required />
                                        {errorMessage === 'pwdError' ? <ErrorMessage errorText={errorText} /> : ''}
                                    </div>
                                </div>
 
                                    <div className="account-type">
                                        <p>Join as</p>
                                        <label class="radio-container">UX Professional
                                            <input type="radio" checked="checked" name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio-container">Recruiter
                                            <input type="radio" name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                        
                                    <div className="btn-div">
                                        <button type="button" className="loginBtn" onClick={ logInBtn }>Join</button>
                                    </div>
                                </div>
                        }   
                    </div>
                </div>
            </BodyContent>
        </>
    )
}

export default Login;