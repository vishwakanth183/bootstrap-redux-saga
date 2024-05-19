"use client"

import React, { useState } from 'react'
import { countries, statesUSA } from '../shared/common';

const Contactus = () => {

    const aboutusImg = "/contact/contactus-1.jpg";

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="container pb-5" id='contactus'>
            <h2 className='fw-bolder'>Contact Us</h2>
            <div className="card">
                <div className="card-body">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="cols">
                            <img src={aboutusImg} style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="cols my-auto">
                            {/* Heading */}
                            <h2 className="fw-bolder text-center mb-5 mt-5 mt-md-0 text-dark display-5">Lets Chat, Reach Out to Us</h2>

                            <form>
                                {/* Email section */}
                                <div className="my-3">
                                    <div className="form-label fw-bold text-dark">Email</div>
                                    <input type="email" className="form-control" placeholder='abc@gmail.com' />
                                </div>

                                {/* Country section */}
                                <div className="my-3">
                                    <div className="form-label fw-bold text-dark">Country</div>
                                    <select className="form-select" >
                                        {/* <option selected>Select Country</option> */}
                                        {
                                            countries.map((country, index) => {
                                                return <option value={`${index}`}>{country.name}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                {/* Country section */}
                                <div className="my-3">
                                    <div className="form-label fw-bold text-dark">State</div>
                                    <select className="form-select" >
                                        {/* <option selected>Select State</option> */}
                                        {
                                            statesUSA.map((states, index) => {
                                                return <option value={`${index}`}>{states.name}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                {/* Message section */}
                                <div className="my-3">
                                    <div className="form-label fw-bold text-dark">Message</div>
                                    <textarea rows={3} className="form-control" placeholder='Type your message here...' />
                                </div>

                                {/* Terms and Conditions */}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label">
                                            I agree to our friendly <span><a href=''>Terms and Conditions</a></span>
                                        </label>
                                </div>

                                {/* Submit button */}
                                <div className="d-flex justify-content-center mt-5">
                                    <button className="btn btn-success">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus