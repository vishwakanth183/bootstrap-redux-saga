import React from 'react'

const Aboutus = () => {

    const aboutusImg = "/veg/veg-2.jpg";

    return (
        <div className='container mb-5' id='aboutus'>
            <h2 className='fw-bolder'>About Us</h2>
            <div className="card">
                <div className="card-body">
                    <div className="row row-cols-1 row-cols-md-2 card-body">
                        <div className="cols">
                            <img src={aboutusImg} style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="cols">
                            <p className="lh-sm">
                                VK Restaurant is more than just a place to eat; it's a culinary journey waiting to be explored. Fueled by a deep love for food and a desire to connect people, we offer exceptional experiences that tantalize taste buds and nourish souls. As you enter our warm and inviting atmosphere, prepare to embark on a delightful exploration of flavors.

                                Our story began with a passion for food and a vision to share it. [Insert a brief story about the founders' passion for food, their culinary background, or the inspiration behind the restaurant's name (if applicable)]. We envisioned a space for gathering, celebrating, and indulging in fresh, high-quality ingredients meticulously prepared and presented with artistic flair. Today, we're thrilled to welcome you to our table.

                                Our culinary philosophy centers around [mention your core culinary philosophy - fresh, seasonal, globally inspired, traditional with a twist, etc.]. We source ingredients locally whenever possible, ensuring the freshest seasonal bounty graces your plate. Our skilled chefs combine classic techniques with innovative approaches, creating dishes that are both familiar and surprising. Whether you're a seasoned foodie or simply seeking a delicious and satisfying meal, we have something to tantalize your taste buds.

                                VK Restaurant isn't just about the food; it's about the entire experience. Our attentive and friendly staff is dedicated to making your visit unforgettable. We strive to create a warm and inviting atmosphere where you can relax, unwind, and connect with loved ones. We offer [mention any special features - spacious patio seating, live music nights, family-friendly environment, etc.] to cater to a diverse range of occasions and preferences.

                                We believe in fostering a strong connection with our community. We [mention any community involvement initiatives - supporting local farmers, partnering with charities, hosting community events, etc.]. Your patronage allows us to continue this commitment and give back to the people who support us.

                                Come experience the magic of VK Restaurant. Whether you're craving a romantic dinner, a fun night out with friends, or a casual family meal, we have something for everyone. Explore our menu, indulge in our culinary creations, and discover why VK Restaurant is more than just a meal – it's a journey for your senses. We look forward to welcoming you soon!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus