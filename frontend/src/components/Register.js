import { useState } from 'react';
import API from '../api/axios';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'user',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('accounts/register/', formData);
            setMessage('Registration successful');
        } catch (error) {
            setMessage('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <br />

                <button type="submit">Register</button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default Register;
