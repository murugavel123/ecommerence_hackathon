import React from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsign-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>
            Continue
          </button>
          <p className="loginsignup-login">
            Already have an Account? <span>Login Here</span>
          </p>
          
        </div>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree to use & privacy policy. </p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup
