import React from 'react';
import { Card } from 'react-bootstrap';
import { IMAGES } from '../../../assets';
import { ClientPartners, FooterComponent } from '../../HomePage';
import Navbar from '../../HomePage/Navbar';

function ClientTestimonials() {
    return (
        <>
            <Navbar />
            <div className='bg-white'>
                <div className="cr__header section__padding pb-3" id="home">
                    <div className="cr__header-content mr-0">
                        <h1 className="gradient__text">Client Testimonials</h1>
                    </div>
                </div>
                <div className='row section__padding'>
                    {
                        clientTestimonialsData.map((item, index) => {
                            return (
                                <div className='col-12' key={index}>
                                    <Card className='client-testimonials-card shadow'>
                                        <Card.Body>
                                            <div className='row d-flex'>
                                                <div className='col-12 col-md-2 d-flex align-self-center justify-content-center'>
                                                    <img className='client-testimonial-img-class' src={IMAGES.AVATAR} alt="" />
                                                </div>
                                                <div className='col-12 col-md-10 align-self-center mt-4 mt-md-0'>
                                                    <p className='text-light font-16'>
                                                        {item.comment}
                                                    </p>
                                                    <p className='text-light font-weight-bold font-16'>
                                                        {item.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <ClientPartners />
                <FooterComponent />
            </div>
        </>
    );
};

export default ClientTestimonials;

let clientTestimonialsData = [
    {
        id: 0,
        comment: '"Creditciti gave me a fresh start. I was so stressed from being turned down by every lender. After working with Creditciti, my credit is good and I feel more secure. I want to extend a very big THANK YOU to all the wonderful people at Creditciti."',
        location: "Rose - Richmond, VA",
    },
    {
        id: 1,
        comment: '"You guys are awesome! Thank you so much. It has been exciting to see the results or your services. I can’t believe how much negative information was deleted from my credit. The money we paid Creditciti was well worth it."',
        location: "Mrs. Lee - Baltimore, MD",
    },
    {
        id: 2,
        comment: '"I purchased your standard plan thinking I should give it a try! Glad I did because I am very happy with the results. I was able to remove 5 items on my first try. Your methods really work. Thank you Creditciti for all of your advice."',
        location: "Jerry - Miami, FL",
    },
    {
        id: 3,
        comment: '"I have not been able to get a major credit card for several years. However, after following your instructions I now have a good credit rating and a credit card. I am so grateful to Creditciti. Thanks."',
        location: "Hannah - Erie, PA",
    },
]

