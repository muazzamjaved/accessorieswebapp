import React, { useEffect, useState } from 'react';
import Item from '../components/Common/Item';
import { fetchItems } from '../reducks/items/operations';
import { getItems } from '../reducks/items/selectors';
import { useDispatch, useSelector } from 'react-redux';
import MainImage from '../assets/img/web-banner.png';
import { fetchCarts } from '../reducks/carts/operations';

const Home = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem('LOGIN_USER_KEY')) {
            dispatch(fetchCarts());
            console.log(items);
        }
    }, []);

    return (
        <>
            <section class="main-image">
                <img src={MainImage} alt="main-image" />
                <div class="text">
                <div>
                <span>Cool </span> <br />
                ACCESSORIES& <br />
                GADGETS
              </div>
                </div>
            </section>
            <div className="product-heading">
                <span>Selected just for you</span>
            </div>
            <section className="item-container">
                <div className="item-grid">
                    {items &&
                        items.map(item => (
                            <div className="item">
                                <Item key={item.id} item={item} />
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
};

export default Home;
