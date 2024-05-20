"use client"

import React, { useState } from "react";
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'

const Slider = () => {

    const sampleImg =
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600";

    // Slider data
    const sliderData = [
        {
            image: "/nonveg/nonveg-4.jpg",
            title: "Epicurean Biryani Bliss",
            description: "Dive into layers of fragrant basmati rice, perfectly spiced to tantalize your taste buds."
        },
        {
            image: "/icecreams/icecream-1.jpg",
            title: "Chill Out with Our Ice Cream Extravaganza",
            description: "Cool down and treat yourself to our creamy, dreamy ice cream delights."
        },
        {
            image: "/pastry/pastry-7.jpg",
            title: "Savor the Sweetness: Perfect Pastries",
            description: "Indulge in our freshly baked pastries, a symphony of flavors in every bite."
        }
    ];
    

    // Variable to handle active index
    const [activeIndex, setActiveIndex] = useState(1);

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    }

    const handleNext = () => {
        if (activeIndex < sliderData.length-1) {
            setActiveIndex(activeIndex +1);
        }
    }


    return (
        <div id="carouselExampleCaptions" className="carousel slide bg-secondary" data-bs-ride="carousel">
            {/* <div style={{backgroundImage:"linear-gradient(to bottom, transparent 100%, grey 30%);"}}> */}
            <div className="sliderImageGradient">

            </div>
            <div className="carousel-indicators">

                {sliderData.map((item, index) => {
                    return <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={`${index == activeIndex ? "active" : "inactive"}`}></button>
                })}
            </div>
            <div className="carousel-inner">
                {
                    sliderData.map((item, index) => {
                        return <div className={`carousel-item z-index-20 ${index == activeIndex ? "active" : "inactive"}`}>
                            <div className="position-absolute h-100 w-100 z-index-1000 bg-dark"></div>
                            <img src={item.image} className="d-block h-10 w-100" alt={item.title} style={{width:"100vw",height:"600px",objectFit:"cover",opacity:0.8}} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={() => handlePrev()}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={() => handleNext()}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider