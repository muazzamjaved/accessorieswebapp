import React, { useEffect, useState } from 'react';
import logo2 from '../../assets/img/Accessories-logo.svg';

export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (pageUrl.includes('cart')) {
            setShowCheckoutButton(false);
        }
    }, []);

    return (
        <footer>
            {key !== null && (
                <div class="footPath">
                    <h2>total: ${price}</h2>
                    {showCheckoutButton ? (
                        <a href="/cart">
                            <button class="btn">Next Step</button>
                        </a>
                    ) : (
                        <a href="/Shipping">
                            <button class="btn">Next Step</button>
                        </a>
                    )}
                </div>
            )}
            <div class="refresh">
                <img src={logo2} alt="logo" />
                <p>
                Premium Quality mobile accessories wallets glasses at the best and most affordable price.
                </p>
                <p>we have a new offer every day for 365 days</p> <br />
                <span>Contact</span><br />
                <br />
                <p>E-mail: buy@accessories.com | Hotline: +1 131 138 138</p><br />
            </div>
            <div className="copyright"><br />
                <p>DESIGN BY ACCESSORIES- &copy; 2022. ALL RIGHTS RESERVED</p><br />
            </div>
        </footer>
    );
}
