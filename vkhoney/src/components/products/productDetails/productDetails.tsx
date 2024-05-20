import React, { FC } from 'react'
import { FoodItem, description, nonVegProductOptions } from '../productList/productData'
import Rating from '../../rating/rating'
import { FaStar } from "react-icons/fa6";

const ProductDetails: FC<{ productData: FoodItem }> = ({ productData }) => {
    return (
        <div className="container">
            <div className="row mt-2 mb-4">
                <div className="col-12 col-md-4">
                    <img
                        src={productData?.url}
                        alt="prod-image"
                        style={{ cursor: 'pointer', height: "100%", width: "100%" }} // Optional for hover effect
                    />
                </div>
                <div className="col-12 col-md-8">
                    <h4 className="fw-bolder text-dark">{productData?.title}</h4>
                    {/* rating */}
                    <div className="d-flex flex-row">
                        <div className="hstack">
                            <FaStar color="gold" />
                            <FaStar color="gold" />
                            <FaStar color="gold" />
                            <FaStar color="gold" />
                            <FaStar color="gold" />
                        </div>
                        <span className="ms-2">
                            ({productData?.rating?.totalReview})
                        </span>
                    </div>
                    {/* price */}
                    <div className="price mt-1">
                        <span>${productData?.price}</span>
                        <span className="ms-2 text-secondary text-opacity-50 text-decoration-line-through">
                            ${productData?.mrp}
                        </span>
                    </div>
                    {/* Description */}
                    <div className="form-label fw-bolder text-md mt-3">
                        Description
                    </div>
                    <div className="text-sm">
                        {description}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div
                style={{ height: "1px" }}
                className="bg-secondary bg-opacity-25 my-2"
            ></div>

            {/* Options */}
            {
                nonVegProductOptions.map((nonvegOptions, index) => {
                    return <div className="vstack my-3" key={index}>
                        <h6 className="fw-bold">
                            {nonvegOptions.category}
                        </h6>
                        <div className="d-flex flex-row flex-wrap gap-3 my-1">
                            {
                                nonvegOptions.options.map((value, valueIndex) => {
                                    return <div className="form-check" key={valueIndex}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={value.active}
                                        />
                                        <label className="form-check-label">
                                            {value.name}
                                        </label>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }
            <Rating />
        </div>
    )
}

export default ProductDetails