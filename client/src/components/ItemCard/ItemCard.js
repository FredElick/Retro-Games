import React from 'react';
import './ItemCard.css';

const ItemCard = () => {

    return (
        <div class="item-card">

                <div class="item-img-div">
                    <img src="" alt="" />
                </div>

                <div class="item-card-content">
                    <h3>Title</h3>
                    <p>Desciption</p>
                    <a href="item.html">Link to item page</a>
                </div>
            </div>
    );
};

export default ItemCard;