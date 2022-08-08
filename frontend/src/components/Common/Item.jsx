import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';
import { push } from 'connected-react-router';

const Item = ({ item }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [particularCart, setParticularCart] = useState(null);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (carts != undefined && carts.length > 0) {
            console.log('carts');
            console.log(carts);
            let matchedCarts = carts.filter(cart => cart.item.id == item.id);
            console.log('matchedCarts');
            console.log(matchedCarts);
            if (matchedCarts.length > 0) {
                setParticularCart(matchedCarts[0]);
            } else {
                setParticularCart(null);
            }
        }
    }, [subtotal]);

    const clickAddCart = () => {
        if (key) {
            dispatch(addCart(item));
        } else {
            dispatch(push('/signin'));
        }
    };
    const clickPlusCart = () => {
        dispatch(increaseCart(particularCart.id));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(particularCart.id));
    };
    return (
        <>
            <div className="item-background">
                <div className="item-image">
                    <img src={item.image} alt="Items" />
                </div>
            </div>
            <div className="item-bottom">
                <div className="item-price">
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                </div>
                {particularCart && particularCart.quantity > 0 ? (
                    <div class="added-cart">
                        <span id="minus" onClick={clickMinusCart}>
                            －
                        </span>
                        <span id="count">{particularCart.quantity}</span>
                        <span id="plus" onClick={clickPlusCart}>
                            +
                        </span>
                    </div>
                ) : (
                    <button onClick={clickAddCart}>
                        ADD TO CART
                    </button>
                )}
            </div>
        </>
    );
};

export default Item;
