import "./Login.css"
import React, { useRef, useState } from 'react'
import { validateFormData } from "../../utils/validateFormData"
import { login, SignUp } from "../../utils/firebase"

const Login = () => {
    const [isSign, setIsSign] = useState(true)
    const [emailError, setEmailError] = useState(null)
    const [paswordError, setPasswordError] =useState(null)
    const [nameError, setNameError] = useState(null)

    const name =useRef(null)
    const email = useRef(null)
    const password =useRef(null)
    const validateForm= ()=>{
        const nameValue = !isSign && name.current ? name.current.value : null
        const emailValue = email.current.value
        const passValue = password.current.value
        const {nameMessage, emailMessage, paswordMessage} = validateFormData(nameValue,emailValue,passValue)
        setEmailError(emailMessage)
        setPasswordError(paswordMessage)
        setNameError(nameMessage)
    }
    const SignState=()=>{
        setIsSign(!isSign)
    }
  return (
    <div className="login"> 
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className='login-logo'/>
       <div className="login-form">
        <h1>{isSign ? "Sign In" : "Sign Up"}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isSign && (<input ref={name} type="test" placeholder='Full name'/>)}
          {!isSign && (<span className='errorMessage'>{nameError}</span>)}
          
          <input ref={email} type="email" placeholder='Enter Email'/>
          <span className='errorMessage'>{emailError}</span>

          <input ref={password} type="password" placeholder='Enter password'/>
          <span className='errorMessage'>{paswordError}</span>

          <button className='signin-btn' onClick={validateForm}>
              {isSign ? "Sign In" : "Sign Up"}
          </button>
        </form>
          <h3>OR</h3>
          <button className='sign-in-code'>Use a sign-in code</button>
          <span className='forget-pass'>Forget password?</span>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <div className="form-switch">
              <p>New to Netflix? 
                 <span onClick={SignState}>{isSign ? " Sign up now." : "Sign in now."}</span>
              </p>
            </div>
            <p className='recaptcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </div>
       </div>
    </div>
  )
}

export default Login
