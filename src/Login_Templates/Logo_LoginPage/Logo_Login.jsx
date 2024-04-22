import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Logo_Login.css'

import c4elogo from './c4e_logo.png'
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';


export const Logo_Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            toast.error('Invalid email');
            return;
        }

        console.log('Email:', email);
        console.log('Password:', password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="root">
            <div className="paper_logologin">
                <img src={c4elogo} alt="logo_logologin" className="logo_logologin" />
                <h3>Login to continue</h3>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <div className="icon-container">
                            <FaEnvelope className="input-icon" />
                        </div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Email Address"
                            value={email}
                            required
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="input-container">
                        <div className="icon-container">
                            {showPassword ? (
                                <FaEyeSlash className="password-icon" onClick={togglePasswordVisibility} />
                            ) : (
                                <FaEye className="password-icon" onClick={togglePasswordVisibility} />
                            )}
                        </div>
                        <input
                            className="input"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button className="submit" type="submit">
                        Sign In
                    </button>
                </form>
                <div className="remember-me">Remember me</div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Logo_Login;
