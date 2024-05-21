import React from "react";
import { FiCheck } from "react-icons/fi";
import { RiVipCrown2Fill } from "react-icons/ri";

const Pricing = () => {
  // Variable to handle pricing data
  const pricingData = [
    {
      plan: "Weekly",
      price: "$19.99",
      description: "Enjoy a week of delicious meals.",
      usage: "5 Meals per Week",
      targetGroup: "Ideal for School Students",
      perks: [
        "Free Delivery",
        "1 Starter per Meal",
        "1 Main Course per Meal",
        "1 Dessert per Meal",
        "1 Beverage per Meal",
      ],
    },
    {
      plan: "Monthly",
      price: "$69.99",
      description: "Savor a month's worth of culinary delights.",
      usage: "20 Meals per Month",
      targetGroup: "Perfect for Working Professionals",
      perks: [
        "Free Delivery",
        "1 Starter per Meal",
        "1 Main Course per Meal",
        "1 Dessert per Meal",
        "1 Beverage per Meal",
        "1 Complimentary Appetizer per Week",
      ],
    },
    {
      plan: "Yearly",
      price: "$699.99",
      description: "Indulge in gourmet dining all year round.",
      usage: "240 Meals per Year",
      targetGroup: "Great for Families",
      perks: [
        "Free Delivery",
        "2 Starters per Meal",
        "2 Main Courses per Meal",
        "2 Desserts per Meal",
        "Unlimited Beverages per Meal",
        "Chef's Special Dish Once a Month",
        "Priority Seating",
        "Exclusive Invites to Special Events",
      ],
    },
  ];

  return (
    <div className="container-fluid" id="pricing">
      <div className="row row-cols-1 row-cols-lg-3">
        {pricingData.map((item) => {
          return (
            <div className="col mt-5 mb-5">
              <div className="card border-0 rounded-4 shadow-lg">
                <div className="card-body" style={{ height: "500px" }}>
                  <div>
                    <h4 className="fw-bolder">{item.plan}</h4>
                    <div className="p text-muted">{item.targetGroup}</div>
                    <h2 className="fw-bolder mt-3 mb-3">{item.price}</h2>
                    <ul className="list-group list-group-flush">
                      {item.perks.map((perksItem) => {
                        return (
                          <li className="list-group-item ps-0">
                            <FiCheck />
                            <span className="ms-2">{perksItem}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button className="btn btn-success mt-2 mb-2">
                    Subscribe
                    <i className="ms-1">
                      <RiVipCrown2Fill size={"18"} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
