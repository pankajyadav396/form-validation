// LoginInput.js
import React, { useState } from 'react';
import Inputs from '../components/common/Input';
import { CommonButton } from './common/commonbtn';
import { Link, useLocation } from "react-router-dom";

const LoginInput = ({ onSwitchToSignUp }) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUserNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };
    const handleNameChange = (e) => {
        setUserName(e.target.value);
        if (usernameError) setUserNameError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError('');
    };

    const validateName = (username) => {
        if (username.trim() === '') {
            return false; // Username is empty
        }
        const re = /^[A-Z][a-zA-Z]*([ '-][A-Za-z]*)*$/;
        return re.test(username);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,20}$/;
        return re.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateName(username)) {
            setUserNameError(username.trim() === '' ? 'Name cannot be empty' : 'First letter should be capital');
            valid = false;
        } else {
            setUserNameError('');
        }

        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('At least one lowercase, uppercase, digit, special character from @#$ %^&+= and 8 to 20 characters');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            console.log('Name:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            setEmail('');
            setUserName('');
            setPassword('');
            setShowSuccessPopup(true);
        }
    };

    const closePopup = () => {
        setShowSuccessPopup(false);
    };

    return (
        <div className='flex items-center justify-center w-full min-h-[100vh]'>
            <div className='max-w-[376px] mx-auto w-full'>
                <h1 className='text-5xl font-bold font-sans text-center mb-5'>Login Form</h1>
                <div className='pt-[21px]'>
                    <Inputs
                        placeholder='Enter your username'
                        type='text'
                        inputuse="Username"
                        eyeclasses='hidden'
                        value={username}
                        onChange={handleNameChange}
                    />
                    {usernameError && <p className='text-red-500 text-xs'>{usernameError}</p>}
                </div>
                <div className='pt-[21px]'>
                    <Inputs
                        placeholder='Enter your email address'
                        type='email'
                        inputuse="Email address"
                        eyeclasses='hidden'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {emailError && <p className='text-red-500 text-xs'>{emailError}</p>}
                </div>
                <div className='pt-[21px]'>
                    <Inputs
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        inputuse="Password"
                        eyeclasses=''
                        value={password}
                        onChange={handlePasswordChange}
                        togglePasswordVisibility={() => setShowPassword(!showPassword)}
                        showPassword={showPassword}
                    />
                    {passwordError && <p className='text-red-500 text-xs'>{passwordError}</p>}
                </div>
                <CommonButton
                    text="Login"
                    className="bg-malachite py-4 px-6 text-light-white w-full flex justify-center mt-[21px] max-h-[48px]"
                    onClick={handleSubmit}
                />
                <p className='font-normal text-xs leading-121 tracking-tighter text-light-white text-center mt-6'>
                    Don’t have an account? <Link to='/Signup' className={`${location.pathname === "/Login"} text-blue-700`}>Sign Up</Link>
                </p>
                {showSuccessPopup && (
                    <div onClick={closePopup} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded shadow-md text-center">
                            <h2 className="text-2xl font-bold mb-4">Success</h2>
                            <p className="mb-4">Login was successful!</p>
                            <button className="bg-malachite py-2 px-4 bg-black text-white rounded" onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginInput;
