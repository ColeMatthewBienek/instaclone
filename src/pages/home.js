/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
function Home(props) {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <p>Go to Login</p>
            <hr />
            <p>
               <button onClick={() => navigate('/login')}>Go to Login</button>
            </p>

        </div>
    );
}

export default Home;
