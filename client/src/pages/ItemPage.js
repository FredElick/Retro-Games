import React from 'react';

const ItemPage = () => {

    return (
        <section className="item-details-sec">
        <div className="item-details-container">
            <div className="item-top-info">
                <div className="item-img">
                    <img src="" alt="item image" />
                    cover image
                </div>
                <div className="item-bio">
                    <h1>Title</h1>
                    <h2>console or console creator</h2>
                    <p>game description</p>
                    <h3>rating</h3>
                    <h4>value (rating)</h4>
                    <h3>year of realease</h3>
                    <h4>value (year)</h4>
                    <a href="">Link to external site; or link to checkout</a>
                </div>
            </div>
            <div className="item-bottom-info">
                <div className="item-vid" >
                    video of gameplay
                </div>
                <div className="item-photo">
                    photo of gameplay
                </div>
            </div>
        </div>
    </section>
    );
};

export default ItemPage;