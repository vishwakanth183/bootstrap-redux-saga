import React from "react";
import { nonvegArray } from "./productData";
import { FaStar } from "react-icons/fa6";

const ListView = () => {
  const sampleImg =
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <div className="card">
      <div className="card-body">
        {/* Top view */}
        <div className="topview">
          <div className="d-flex flex-row justify-content-between align-items-center mt-5 mt-md-0">
            {/* Heading */}
            <h4 className="fw-bolder text-dark">
              Product List
              <span className="text-dark text-opacity-75"> (59)</span>
            </h4>

            {/* Right View */}
            <div className="d-flex flex-row gap-3 align-items-end">
              <h6 className="d-inline w-25 fw-light">Sort by</h6>
              <select className="form-select w-75">
                <option value={"lowtohigh"}>{"Price: Low to High"}</option>
                <option value={"hightolow"}>{"Price: High to Low"}</option>
                <option value={"recent"}>{"Recent Collections"}</option>
                <option value={"popular"}>{"Popular Collections"}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid View */}
        <div className="row gx-3">
          {nonvegArray.map((product, index) => {
            return (
              <div className="card col-12 col-md-4 p-0" key={index}>
                <img
                  src={product.url ? product.url : sampleImg}
                  alt="prod-image"
                  className="card-img-top"
                />
                <div className="card-body">
                  {/* product name */}
                  <div className="card-title fw-bolder">{product.title}</div>

                  {/* rating */}
                  <div className="d-flex flex-row">
                    <div className="hstack">
                      <FaStar color="gold" />
                      <FaStar color="gold" />
                      <FaStar color="gold" />
                      <FaStar color="gold" />
                      <FaStar color="gold" />
                    </div>
                    <span className="ms-2">({product.rating.totalReview})</span>
                  </div>

                  {/* price */}
                  <div className="price">
                    <span>₹{product.price}</span>
                    <span className="ms-3 text-secondary text-opacity-50 text-decoration-line-through">
                      ₹{product.mrp}
                    </span>
                  </div>
                  {/* add to cart button */}
                  <button className="btn btn-primary w-100 my-2">
                    Add to bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListView;
