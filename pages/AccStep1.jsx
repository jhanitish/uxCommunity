import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import '../static/bootstrap.min.css';
import Header from '../components/Header';
import ErrorMessage from '../components/errorMessage';

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

    & .form-content{
        margin: 0 auto;
        max-width: 530px;
        width: 100%;
        margin-top: 50px;
        .profile-pic-div{
            height: 100px;
            margin-bottom: 30px;
            .oval{
                box-sizing: border-box;	
                height: 100px;	
                width: 100px;	
                border: 1px solid #D4D9E2;	
                background-color: rgba(212,217,226,0.25);
                display: inline-block;
                border-radius: 50%;
                position: relative;
                top: -40px;
            }
            .upload-pic-div{
                display: inline-block;
                position: relative;
                top: 15px;
                left: 30px;
                p{
                    color: #5A6377;	
                    font-family: "Proxima Nova";	
                    font-size: 18px;	
                    font-weight: 600;	
                    line-height: 22px;
                    margin-bottom: 12px;
                }
                button{
                    box-sizing: border-box;	
                    padding: 7px 20px;	
                    border: 1px solid rgba(41,121,255,0.5);	
                    border-radius: 5px;
                    color: #1B5DFF;	
                    font-family: "Proxima Nova";	
                    font-size: 16px;	
                    font-weight: 600;	
                    line-height: 20px;
                    background-color: #fff;
                    outline: none;
                }
            }
        } 
        .form-input-div{
            margin-bottom: 30px;
            p{
                color: #5A6377;	
                font-family: "Proxima Nova";	
                font-size: 18px;	
                line-height: 22px;
                margin-bottom: 12px;
            }
            input{
                box-sizing: border-box;	
                height: 50px;	
                max-width: 530px;	
                width: 100%;
                border: 1px solid #D4D9E2;	
                border-radius: 5px;
                padding: 15px 20px;
                outline: none;
            }
            textarea{
                box-sizing: border-box;	
                height: 150px;	
                max-width: 530px;	
                width: 100%;	
                border: 1px solid #D4D9E2;	
                border-radius: 5px;
                padding: 15px 20px;
                resize: none;
                outline: none;
            }
            .short-intro{
                width: 50%;
                text-align: left;
                display: inline-block;
            }
            .text-count{
                width: 50%;
                text-align: right;
                display: inline-block;
            }
        }
    }
`;


const AccStepPage = () => {
    const [errorMessage, setErrorMessage] = useState('noError');
    const [errorText, setErrorText] = useState('noErrorText');
    const [textareaInput, setTextareaInput] = useState(' ');
    const [textareaInputCount, setTextareaInputCount] = useState(0);
    const readTextarea = e => {
        if(e.target.value.length > 0){
            console.log("e.target.value", e.target.value);
            setTextareaInput(e.target.value);
            setTextareaInputCount(e.target.value.length);
        }
    }
    const textareaBlur = () => {
        console.log("textareaInput", textareaInput);
    }

    const nextButtonHeader = () => {
        const username = document.getElementById("username");
        const userid = document.getElementById("userid");
        const emailAdd = document.getElementById("emailAdd");
        if(username.value.length === 0 || username.value === ""){
            setErrorMessage('username');
            setErrorText('Please enter a your name.');
        }else if(userid.value.length === 0 || userid.value === ""){
            setErrorMessage('userid');
            setErrorText('Please enter a valid user name.');
        }else if(emailAdd.value.length === 0 || emailAdd.value === ""){
            setErrorMessage('emailError');
            setErrorText('Email field cannot be empty.');
        }else {
            setErrorMessage('noError');
            if( !validateEmail(emailRef.current.value)){
                setErrorMessage('emailError');
                setErrorText('Please enter a valid email id.');
            }else {
                setErrorText('');
                console.log('validation successfull', emailRef.current.value, pswRef.current.value);
            }
        }
    }
    return (
        <>
            <GlobalStyle />
            <Header page="accStep1" onClick = { nextButtonHeader }/>
            <BodyContent className="container-fluid">
                <div className="heading">
                    <h2>Welcome to UX Stories</h2>
                    <h4>Set your profile details properly and make your idenity.</h4>
                </div>
                <div className="form-content">
                    <div className="profile-pic-div">
                        <div className="oval">
                            <img src="" />
                        </div>
                        <div className="upload-pic-div">
                            <p>Your Profile Picture</p>
                            <button>Upload Picture</button>
                        </div>
                        {errorMessage === 'userpic' ? <ErrorMessage errorText={errorText} /> : ''}
                    </div>
                    <div className="form-input-div">
                        <p>Your Name</p>
                        <input type="text" id="username" />
                        {errorMessage === 'username' ? <ErrorMessage errorText={errorText} /> : ''}
                    </div>
                    <div className="form-input-div">
                        <p>Pick a Username</p>
                        <input type="text" id="userid" />
                        {errorMessage === 'userid' ? <ErrorMessage errorText={errorText} /> : ''}
                    </div>
                    <div className="form-input-div">
                        <p>Your Email Address</p>
                        <input type="text" id="emailAdd" />
                        {errorMessage === 'emailAdd' ? <ErrorMessage errorText={errorText} /> : ''}
                    </div>
                    <div className="form-input-div">
                        <p>
                            <span className="short-intro">Short Introduction</span>
                            <span className="text-count"> { textareaInputCount } / 200 </span>
                        </p>
                        <textarea maxLength="200" id="textArea" onChange={ readTextarea } onBlur= { textareaBlur } value={ textareaInput }/>
                    </div>
                </div>
            </BodyContent>
            
        </>
    );
};

export default AccStepPage;