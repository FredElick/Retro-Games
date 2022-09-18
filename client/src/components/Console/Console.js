import React from "react";
import './Console.css';

const Console = () => {
    return (

    <section className="items-sec">
        <div className="cards-row-container">
            <div className="item-card">
                <div className="item-img-div">
                    <img src="" alt="">
                </div>

                <div className="item-card-content">
                    <h3>Title</h3>
                    <p>Desciption</p>
                    <a href="item.html">Link to item page</a>
                </div>
            </div>

            <div className="item-card mid-card">
                <div className="item-img-div">
                    <img src="" alt="">
                </div>

                <div className="item-card-content">
                    <h3>Title</h3>
                    <p>Desciption</p>
                    <a href="item.html">Link to item page</a>
                </div>
            </div>

            <div className="item-card">
                <div className="item-img-div">
                    <img src="" alt="">
                </div>

                <div className="item-card-content">
                    <h3>Title</h3>
                    <p>Desciption</p>
                    <a href="item.html">Link to item page</a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Console;