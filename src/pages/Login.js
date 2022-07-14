import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { loginInitiate } from '../redux/actions';
import styles from "./Login.module.css"

export const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const {email, password} = state;

    const { currentUser }  = useSelector(state => state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser)
        {
            navigate("/")
        }
    }, [currentUser, navigate])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!email || !password)
      {
        return;
      }
     dispatch(loginInitiate(email, password))
     setState({email: "", password: "" })
    }

    const handleGoogleSignIn = () => {

    }

    const handleFacebookSignIn = () => {

    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value}) 
    }

  return (
    <div>
        <div id="logreg-forms">
        <form className='form-signin' onSubmit={handleSubmit}>
            {/* <h1 className='h3 mb-3 font-weight-normal' styles={{textAlign: "center"}}>
                Sign in
            </h1> */}
            <img className={styles.loginImage} src="https://www.masaischool.com/img/navbar/logo.svg" alt="/" />
            {/* <div className='social-login'>
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
            </div> */}
            {/* <p style={{textAlign: "center"}}> OR </p> */}
            <div className={styles.box}>
            <h6>Email</h6>
            <input type="email" id="inputEmail"  placeholder='Email Address' name="email" onChange={handleChange} value={email} required />
            <h6>Password</h6>
            <input type="password" id="inputPassword" placeholder='Email Password' name="password" onChange={handleChange} value={password} required />
            <br/>
            <button className={styles.but} type="submit">
                LOG IN
            </button>
            <hr />
            <p>Dont have an account</p>
            <Link to="/register">
            <button className='btn btn-primary btn-block' type="button" id="btn-signup">
                <i className='fas fa-user-plus'></i>
                Sign up New Account
            </button>
            </Link>
            </div>
        </form>
        </div>
    </div>
  )
}
