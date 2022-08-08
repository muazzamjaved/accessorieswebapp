import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getUser } from '../reducks/users/selectors';
import { push } from 'connected-react-router';
import Footer2 from '../components/Common/Footer2';

const ThankYou = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('LOGIN_USER_KEY'));
    useEffect(() => {
        console.log(user);
    }, []);
    return (
        <>
        
            <div>
                <div class="box">
                    <p>Thank you for ordering</p>
                </div>

                <div class="message">
                    <p class="para">
                        Thank you for your ordering <span class="color">{user.user_name}</span>. We received your request.{' '}
                        <br />
                        <br />
                        Our staff will be contacting with you to tell next steps.
                    </p>
                </div>

                <div class="backhome">
                    <a href="">
                        <button onClick={() => dispatch(push('/'))}>Back to Home</button>
                    </a>
                </div>
            </div>
            <Footer2 />
        </>
            
        
    );
};

export default ThankYou;
