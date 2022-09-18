import React from 'react';
import './Games.css';

const Games = () => {

    return (

    <section className="items-sec">

        <div className="cards-row-container">

            {/* <!-- left card -------------------> */}
            <div className="item-card">

                {/* <!-- img --> */}
                <div className="item-img-div">
                    <img src="" alt="" />
                </div>

                {/* <!-- item info --> */}
                <div className="item-card-content">
                    <h3>Title</h3>
                    <p>Desciption</p>
                    <a href="item-details.html">Link to item page</a>
                </div>
            </div>

            {/* <!-- Middle card -----------------> */}
            <div className="item-card mid-card">

                {/* <!-- img --> */}
                <div className="item-img-div">
                    <img src="" alt="" />
                </div>

                {/* <!-- item info --> */}
                <div className="item-card-content">
                    <h3>Title</h3>
                    <p>Desciption</p>
                    <a href="item-details.html">Link to item page</a>
                </div>
            </div>

            {/* <!-- Right card ------------------> */}
            <div className="item-card">

                {/* <!-- img --> */}
                <div className="item-img-div">
                    <img src="" alt="" />
                </div>

                {/* <!-- item info --> */}
                <div className="item-card-content">
                    <h3>Title</h3>
                    <p>Desciption</p>
                    <a href="item-details.html">Link to item page</a>
                </div>
            </div>

        </div>
    </section>
    );
};

export default Games;