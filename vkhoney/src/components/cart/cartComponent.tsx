import React from "react";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa6";
import {
  getRandomSpicyAddons,
  nonvegArray,
  spicyAddons,
} from "../products/productList/productData";
import "./cart.css";

const CartComponent = () => {
  const details = {
    subTotal: 130,
    discount: 10,
    tax: 10,
    delivery: 10,
    shipping: 10,
    total: 150,
  };

  const checkoutDetails = [
    "subTotal",
    "discount",
    "tax",
    "delivery",
    "shipping",
    "total",
  ];

  return (
    <div className="container-xl" style={{ marginTop: 80, marginBottom: 40 }}>
      <div className="row">
        {/* Cart List */}
        <div className="col-12 col-md-6">
          <div className="row gy-4">
            {nonvegArray.map((nonvegItem, index) => {
              return (
                <div className="col-12" key={index}>
                  <div className="card shadow-lg">
                    <div className="d-flex flex-row card-body">
                      {/* item image */}
                      <img
                        src={nonvegItem.url}
                        alt={nonvegItem.title}
                        style={{ height: 200, width: 160 }}
                        className="card-img-left"
                      />
                      {/* item details */}
                      <div className="ms-3">
                        {/* title */}
                        <h5 className="fw-bolder">{nonvegItem.title}</h5>
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
                            ({nonvegItem.rating.totalReview})
                          </span>
                        </div>

                        {/* price */}
                        <div className="price">
                          <span>${nonvegItem.price}</span>
                          <span className="ms-3 text-secondary text-opacity-50 text-decoration-line-through">
                            ${nonvegItem.mrp}
                          </span>
                        </div>

                        {/* Add on badges */}
                        <div className="d-flex flex-wrap gap-3 mt-1">
                          {getRandomSpicyAddons().map((addons, addonIndex) => {
                            return (
                              <div className="form-check" key={addonIndex}>
                                <input
                                  type="checkbox"
                                  className="form-check-input bg-dark"
                                  readOnly
                                  checked={true}
                                />
                                <label className="form-check-label">
                                  {addons}
                                </label>
                              </div>
                            );
                          })}
                        </div>

                        {/* Quantity button */}
                        <div className="btn-group mt-2">
                          <div className="btn btn-primary btn-sm">
                            <FaMinus />
                          </div>
                          <div className="btn btn-light btn-sm">1</div>
                          <div className="btn btn-primary btn-sm">
                            <FaPlus />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end gap-2">
                      <button className="btn btn-success">Replace</button>
                      <button className="btn btn-danger">Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right section */}
        <div className="col-12 col-md-6">
          {/* Cart Summary */}
          <div className="cartSummary col-md-5 w-48 mt-5 mt-md-0">
            <div className="card shadow-lg">
              <div className="card-body">
                <div className="card-title text-primary fw-bolder h5">
                  Cart Summary
                </div>
                {/* Divider */}
                <div
                  style={{ height: "1px" }}
                  className="bg-secondary bg-opacity-25"
                ></div>
                {checkoutDetails.map((detailItem, detailIndex) => {
                  return (
                    <div className="">
                      <div
                        key={detailIndex}
                        className="d-flex w-100 flex-row justify-content-between my-2"
                      >
                        <div className="text fw-bold text-capitalize">
                          {detailItem}
                        </div>
                        <div className="text-fw-bold">
                          ${Number(details[detailItem]).toFixed(2)}
                        </div>
                      </div>
                      {/* Divider */}
                      {detailIndex != checkoutDetails.length - 1 && (
                        <div
                          style={{ height: "1px" }}
                          className="bg-secondary bg-opacity-25 w-100"
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="card-footer d-flex justify-content-end">
                <div className="btn btn-primary">
                  Checkout{" "}
                  <span className="fw-bolder text-white">
                    ${details.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* You May Also Like */}
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
