import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handlelogin = async () => {
        try {
            console.log(user);
            const response = await fetch('http://localhost:5007/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            if(data.userexist){
                navigate('/home');
            }
            else{
                alert( 'User not exist');
            }
            console.log(data.userexist)
        } catch (error) {
            setError('Network error');
            console.error('Error:', error);
        }
    };
  return (
    <div>
    <div>
        <input type="email" name='email' placeholder='Email' onChange={handlechange} />
        <input type="password" name='password' placeholder='Password' onChange={handlechange} />
        <button onClick={handlelogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
</div>
  )
}

export default Login
