import React, { useEffect, useState } from 'react';
import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import cart from '../../assets/img/cart.svg';
import logo from '../../assets/img/Accessories-logo.svg';
import user from '../../assets/img/user.svg';
export default function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key !== null) {
            setCheckUser(true);
        }
    }, [key]);

    return (
        <>
            <header>
                <div class="logo">
                    <a href="/">
                        {' '}
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <nav>
                    {checkUser ? (
                        <span className="signin" onClick={signOutButton}>
                            Logout
                        </span>
                    ) : (
                        <a class="signin" href="Signin">
                            <img src={user} alt="user" />
                        </a>
                    )}
                    {checkUser && (
                        <a href="Cart">
                            {' '}
                            <img src={cart} alt="" />
                        </a>
                    )}
                </nav>
            </header>
        </>
    );
}
