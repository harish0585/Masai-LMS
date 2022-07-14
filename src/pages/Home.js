import React from 'react'
import { Navbar } from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { logoutInitiate } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const { currentUser }  = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = () => {
    if(currentUser)
    {
      dispatch(logoutInitiate())
    }
    // if(!currentUser)
    // {
    // navigate("/login");
    // }
  };

  return (
    <div>
        <Navbar/>
        <br/>
        {/* <button className='btn btn-danger' onClick={handleAuth}>Logout</button> */}
        <h1>Welcome to Masai School</h1>
    </div>
  )
}
