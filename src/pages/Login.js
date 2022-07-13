import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useHistory, Link} from "react-router-dom";

export const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const {email, password} = state;

    const handleSubmit = () => {

    }

    const handleGoogleSignIn = () => {

    }

    const handleFacebookSignIn = () => {

    }

    const handleChange = () => {

    }

  return (
    <div>
        <div id="logreg-forms">
        <form className='form-signin' onSubmit={handleSubmit}>
            <h1 className='h3 mb-3 font-weight-normal' styles={{textAlign: "center"}}>
                Sign in
            </h1>
            <div className='social-login'>
                <button className='btn google-btn social-btn' type="button" onClick={handleGoogleSignIn}>
                    <span>
                        <i className='fab fa-google-plus-g'></i> Sign in with Google+
                    </span>
                </button>
                <button className='btn facebook-btn social-btn' type="button" onClick={handleFacebookSignIn}>
                    <span>
                        <i className='fab fa-facebook-f'></i> Sign in with Facebook
                    </span>
                </button>
            </div>
            <p style={{textAlign: "center"}}> OR </p>
            <input type="email" id="inputEmail" className='form-control' placeholder='Email Address' name="email" onChange={handleChange} value={email} required />
            <input type="password" id="inputPassword" className='form-control' placeholder='Email Password' name="password" onChange={handleChange} value={password} required />
            <button className='btn btn-secondary btn-block' type="submit">
                <i className='fas fa-sign-in-alt'></i>  Sign In
            </button>
            <hr />
            <p>Dont have an account</p>
            <Link to="/register">
            <button className='btn btn-primary btn-block' type="button" id="btn-signup">
                <i className='fas fa-user-plus'></i>
                Sign up New Account
            </button>
            </Link>
        </form>
        </div>
    </div>
  )
}
