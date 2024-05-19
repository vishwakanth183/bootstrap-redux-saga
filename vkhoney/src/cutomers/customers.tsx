"use client"

import React from "react"

const Customers = () => {


    // Variable to handle customer data
    const customerData = [
        {
            url: "https://randomuser.me/api/portraits/men/65.jpg",
            name: "John Snow",
            location: "New York, USA",
            favourites: [
                "Non-Veg",
                "Juices",
                "Ice-creams"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/women/65.jpg",
            name: "Jane Doe",
            location: "San Francisco, USA",
            favourites: [
                "Vegan",
                "Smoothies",
                "Pastries"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/men/66.jpg",
            name: "Alice Johnson",
            location: "London, UK",
            favourites: [
                "Non-Veg",
                "Coffees",
                "Cakes"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/women/66.jpg",
            name: "Bob Smith",
            location: "Sydney, Australia",
            favourites: [
                "Salads",
                "Teas",
                "Cookies"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/men/67.jpg",
            name: "Charlie Brown",
            location: "Toronto, Canada",
            favourites: [
                "Grilled Chicken",
                "Lemonades",
                "Brownies"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/women/67.jpg",
            name: "Daisy Miller",
            location: "Paris, France",
            favourites: [
                "Pasta",
                "Sodas",
                "Donuts"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/men/68.jpg",
            name: "Edward Green",
            location: "Berlin, Germany",
            favourites: [
                "Burgers",
                "Shakes",
                "Pies"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/men/70.jpg",
            name: "Fiona Clark",
            location: "Tokyo, Japan",
            favourites: [
                "Sushi",
                "Iced Teas",
                "Macarons"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/women/70.jpg",
            name: "George King",
            location: "Dubai, UAE",
            favourites: [
                "Steaks",
                "Mocktails",
                "Cupcakes"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Hannah Scott",
            location: "Barcelona, Spain",
            favourites: [
                "Tacos",
                "Energy Drinks",
                "Gelato"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/women/71.jpg",
            name: "Ian Baker",
            location: "Rome, Italy",
            favourites: [
                "Seafood",
                "Juices",
                "Eclairs"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/men/72.jpg",
            name: "Julia Adams",
            location: "Amsterdam, Netherlands",
            favourites: [
                "Vegetarian",
                "Herbal Teas",
                "Tarts"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/women/72.jpg",
            name: "Kevin White",
            location: "Dublin, Ireland",
            favourites: [
                "Barbecue",
                "Smoothies",
                "Cookies"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/men/73.jpg",
            name: "Laura Lewis",
            location: "Vienna, Austria",
            favourites: [
                "Wraps",
                "Milkshakes",
                "Muffins"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/women/73.jpg",
            name: "Michael Harris",
            location: "Zurich, Switzerland",
            favourites: [
                "Pizza",
                "Colas",
                "Cheesecake"
            ]
        },
        {
            url: "https://randomuser.me/api/portraits/men/74.jpg",
            name: "Nina Evans",
            location: "Cape Town, South Africa",
            favourites: [
                "Paninis",
                "Fruit Punch",
                "Churros"
            ]
        }
    ];




    // Function to handle theme toggling
    const toggleTheme = (theme: string) => {
        localStorage.setItem('theme', theme);
    };

    return (
        <div className="container pb-5" id="customers">
            {/* Mode buttons */}
            <div className="d-flex justify-content-end py-5 px-5">
                <div className="button-group">
                    <button className="btn btn-dark btn-sm" onClick={() => toggleTheme("dark")}>Dark</button>
                    <button className="btn btn-light btn-sm" data-bs-theme-value="light" onClick={() => toggleTheme("light")}>Light</button>
                </div>
            </div>

            {/* Heading */}
            <h1 className="fw-bolder">Happy Customers</h1>

            {/* Search view */}
            <div className="row row-cols-1 row-cols-md-2 mt-5">
                <div className="col">
                    <input type="search" className="form-control form-control" placeholder="Search for customers" />
                </div>
                <div className="col mt-3 mt-md-0 d-flex justify-content-end">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="" className="nav-link text-bg-primary rounded-3">New Customers</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-bg-secondary diabled rounded-3 ms-2 disabled">Reputation</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-bg-secondary diabled rounded-3 ms-2 disabled">Moderators</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* List of user grids */}
            <div className="row row-cols-1 row-cols-md-3 my-5 gap-3 d-flex justify-content-center justify-content-md-start">
                {
                    customerData.map((customer, index) => {
                        return <div className="card" style={{ maxWidth: 425 }} key={index} >
                            <div className="card-body d-flex gap-3">
                                <div style={{ height: "70px", width: "70px" }}>
                                    <img src={customer.url} alt={customer.name} className="img-fluid rounded-circle" />
                                </div>
                                <div className="user-info">
                                    <div className="col">
                                        <h5>{customer.name}</h5>
                                        <span>{customer.location}</span>
                                    </div>
                                    <div className="hstack gap-2 mt-2">
                                        {
                                            customer.favourites.map((favouriteItem, favIndex) => {
                                                return <span className="badge bg-secondary" key={favIndex}>{favouriteItem}</span>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

            {/* Pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <a className="page-link" href="#">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item disabled"><a className="page-link" href="#">2</a></li>
                    <li className="page-item disabled"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Customers