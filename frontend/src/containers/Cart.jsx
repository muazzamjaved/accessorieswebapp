import React, { useEffect, useState } from 'react';
import CartItem from '../components/Common/CartItem';
import { fetchCarts } from '../reducks/carts/operations';
import { fetchItems } from '../reducks/items/operations';
import { getCarts } from '../reducks/carts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../reducks/users/selectors';
import { getItems } from '../reducks/items/selectors';

const Cart = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const user = getUser(selector);
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCarts());
        console.log(carts);
    }, []);

    return (
        <>
            <section>
                <div className="heading">
                    <h3>Cart Items</h3>
                </div>
                <div class="images">
                    <ul class="menu">
                        {
                            (carts,
                            items &&
                                carts.map(cart => (
                                    <li>
                                        <CartItem
                                            cart={cart.item}
                                            cartId={cart.id}
                                            quantity={cart.quantity}
                                            key={cart.item.id}

                                        />
                                    </li>
                                )))
                        }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Cart;
