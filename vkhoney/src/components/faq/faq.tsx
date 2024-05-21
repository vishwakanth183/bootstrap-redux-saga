"use client";

import React, { useState } from "react";

const FAQ = () => {
  // FAQ data
  const faqData = [
    {
      question: "What are your opening hours?",
      answer: "We are open from 10:00 AM to 10:00 PM from Monday to Sunday.",
    },
    {
      question: "Do you offer vegetarian and vegan options?",
      answer: "Yes, we offer a wide range of vegetarian and vegan dishes.",
    },
    {
      question: "Can I make a reservation?",
      answer:
        "Yes, you can make a reservation online through our website or by calling us directly.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer delivery services through various delivery partners.",
    },
    {
      question: "Are there gluten-free options available?",
      answer:
        "Yes, we have a selection of gluten-free dishes available on our menu.",
    },
    {
      question: "Do you have a kids' menu?",
      answer:
        "Yes, we offer a special menu designed for kids with a variety of options.",
    },
    {
      question: "Is parking available at your restaurant?",
      answer: "Yes, we have a parking lot available for our customers.",
    },
    {
      question: "Do you offer catering services for events?",
      answer:
        "Yes, we offer catering services for various events. Please contact us for more details.",
    },
    {
      question: "Can I customize my order?",
      answer:
        "Yes, we are happy to accommodate special requests and dietary restrictions. Please let us know your preferences when ordering.",
    },
    {
      question: "Do you have outdoor seating?",
      answer:
        "Yes, we have a lovely outdoor seating area for you to enjoy your meals.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null); // Keeps track of the open accordion index

  const handleToggle = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the same accordion
    } else {
      setActiveIndex(index); // Open a different accordion
    }
  };

  return (
    <div className="container pb-5 mt-5" id="FAQ">
      {/* FAQ heading */}
      <h3 className="fw-bolder">Frequently Asked Questions (FAQ)</h3>

      {/* Accordion view */}
      {faqData.map((item, index) => (
        <div className="accordion" key={index}>
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${index + 1}`}>
              <button
                className={`accordion-button ${
                  activeIndex !== index ? "collapsed" : ""
                }`} // Add 'collapsed' class for active item
                type="button"
                onClick={() => handleToggle(index)}
              >
                {item.question}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                activeIndex === index ? "show" : ""
              }`} // Add 'show' class for active item
            >
              <div className="accordion-body">
                <strong>{item.answer}</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
