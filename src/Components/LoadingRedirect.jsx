import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const LoadingRedirect = () => {
    const [count, setCount] = useState(2);
    
    const navigate = useNavigate();

    useEffect(() => {
      const intervel = setInterval(() => {
        setCount((currentCount) => --currentCount)
      }, 1000)
      count === 0 && navigate("/login");
      return () => clearInterval(intervel)
    }, [count, navigate])

  return (
    <div>Redirecting you in {count} seconds</div>
  )
}

export default LoadingRedirect