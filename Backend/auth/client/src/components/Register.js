import React, { useState } from 'react';

function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handlechange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleregister = async () => {
        try {
            console.log(user);
            const response = await fetch('http://localhost:5007/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || 'Error in registration');
                console.error('Error in register:', data);
            } else {
                setError(''); // Clear any previous errors
                console.log('User registered successfully');
            }
        } catch (error) {
            setError('Network error');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div>
                <input type="text" name='name' placeholder='Name' onChange={handlechange} />
                <input type="email" name='email' placeholder='Email' onChange={handlechange} />
                <input type="password" name='password' placeholder='Password' onChange={handlechange} />
                <button onClick={handleregister}>Register</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

export default Register;
