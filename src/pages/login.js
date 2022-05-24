/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable indent */
/* eslint-disable func-names */
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {};

    useEffect(() => {
        document.title = 'Login Page - InstaClone';
    }, []);

    return (
        <div className="container flex justify-center mx=auto max-w-screen-md items-center h-screen">
            <div className="flex flex-col w-2/3">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram" ></img>
            </div>
            <div className="flex flex-col w-4/5">
                <div className="flex flex-col items-center bg-white p-8 border border-gray-primary mb-10">
                <h1 className="flex justify-center w-full ">
                    <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4"></img>
                </h1>
                {error && <p className="mb-4 text xs text-red-primary">{error}</p>}

                <form onSubmit={handleLogin} method="POST">
                    <input
                        aria-label="Enter your email address"
                        type="text"
                        placeholder="Email address"
                        className="text-md text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                     <input
                        aria-label="Enter your Password"
                        type="password"
                        placeholder="Password"
                        className="text-md text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <button
                        disabled={isInvalid}
                        type="submit"
                        className={`bg-blue-500 text-white w-full rounded h-8 font-bold
                        ${isInvalid && 'opacity-50'}`}
                    >
                        Log In 
                    </button> 
                </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
                <p clasName="text-sm">
                    Don't have an account?{''}
                </p>
            </div>
            </div>
        </div>
    );
}

//bg-blue-medium
//text-gray-base
//text-red-primary
//border-gray-primary