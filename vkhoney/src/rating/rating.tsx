import React from 'react'
import { FaStar } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Rating = () => {

    const ratingArray = [
        {
            rating: 5,
            percentage: 80
        },
        {
            rating: 4,
            percentage: 70
        },
        {
            rating: 3,
            percentage: 60
        },
        {
            rating: 2,
            percentage: 50
        },
        {
            rating: 1,
            percentage: 40
        }
    ]

    return (
        <div className="container pb-5">
            <div className="card py-3">
                <div className="card-body">

                    {/* Overall Review */}
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="text-center fw-bolder">What others think about the product</h4>
                        <div className="bg-success p-4 bg-opacity-25 rounded-4">
                            <div className="d-flex align-self-center mb-3 mb-md-0">
                                <FaStar size={42} color='gold' />
                                <span className="h1 fw-bolder ms-2">4.8</span>
                            </div>
                            <div className="fw-bolder text-center">Average Rating</div>
                        </div>

                    </div>

                    {/* Search Input */}
                    <div className="input-group input-group-lg mt-3 mb-1">
                        <span className="input-group-text rounded-start-5">
                            <CiSearch />
                        </span>
                        <input type="search" className="form-control rounded-end-5" placeholder='Search Reviews' />
                    </div>

                    {/* Review Item */}
                    <div className="row p-5">
                        <div className="cols-12 vstack gap-2">
                            <h5>Reviews</h5>
                            {
                                ratingArray.map((rating, index) => {
                                    return <div className='d-flex flex-row align-items-center' key={index}>
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="spam fw-bolder">{rating.rating}</span>
                                            <FaStar size={18} color='gold' />
                                        </div>
                                        <div className="progress ms-2 bg-secondary bg-opacity-25" style={{ height: "10px", width: "100%" }}>
                                            <div className="progress bg-warning" style={{ height: "10px", width: `${rating.percentage}%` }}></div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Create review button */}
                    <div className="d-flex row justify-content-start ms-5 ">
                        <button className="btn btn-success" style={{width:180}}>Write a Review</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating