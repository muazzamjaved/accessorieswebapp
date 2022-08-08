import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import Home from '../containers/Home';
import CrossX from '../assets/img/cross.png';
import { push } from 'connected-react-router';

const Signin = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Home />
            <section className="gradient">
                <section class="popup">
                    <div class="popup-inner">
                        <span onClick={closeButton}>
                            <a href="/">
                                {' '}
                                <img src={CrossX} class="close" />{' '}
                            </a>
                        </span>
                    </div>
                    <div class="popup-preview">
                        <div class="input">
                            <div className="heading-sign-in">
                                <h2>Sign In</h2>
                                <p class="bottom"> Lorem ipsum, dolor sit amet consectetur adipisicing elit the printing </p>
                            </div>
                            <div className="input-feilds">
                                <input
                                    type="email"
                                    onChange={inputEmail}
                                    required
                                    placeholder="Email"
                                    value={email}
                                />{' '}
                                <br />
                                <br />
                                <input
                                    type="password"
                                    onChange={inputPassword}
                                    required
                                    placeholder="Password"
                                    vlaue={password}
                                />
                                <br />
                                <div class="forgot">
                                    <div class="keep">
                                        <input type="checkbox"/>
                                        <label for="check">Keep me signed in</label>
                                    </div>
                                    <p class="bottom">Forgot Password</p>
                                </div> 
                                <button class="button" onClick={signInButton}>
                                    SIGN IN
                                </button>
                                <p class="bottom">
                                    <a href="/signup">Not a Member Sign Up{' '}</a>{' '}
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Signin;
