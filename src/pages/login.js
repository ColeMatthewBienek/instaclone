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
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5">
                Welcome!
            </p>
            <p className="text-gray-500 text-lg">
                React and Tailwind CSS in action
            </p>
        </div>
    );
}
