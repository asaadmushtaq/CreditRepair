import React from 'react';

const FeaturesSection = () => (
    <div className="cr__features section__padding" id="features">
        <div className="cr__features-heading">
            <h1 className="gradient__text">Credit Repair is the most automated credit repair software in the industry right now.</h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className="cr__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default FeaturesSection;

const featuresData = [
    {
        title: 'Cloud Compatible',
        text: 'Credit Repair is in-the-cloud, so you can access it from any device and from anywhere in the world.',
    },
    {
        title: 'No Comparison',
        text: 'We don’t do credit repair services like others. We only sell software, we don’t compete with our clients.',
    },
    {
        title: 'Privacy Matters',
        text: 'Your program database is not shared with other of our clients. This feature ensures that another of our clients cannot access your clients.',
    },
    {
        title: 'Your Information',
        text: 'our portals are hosted inside your website for security reasons, so your company is protected against Our Highest Priority theft of your clients’ information.',
    },
];

const Feature = ({ title, text }) => (
    <div className="cr__features-container__feature">
        <div className="cr__features-container__feature-title">
            <div />
            <h1 className='text-left'>{title}</h1>
        </div>
        <div className="cr__features-container_feature-text">
            <p className='text-left'>{text}</p>
        </div>
    </div>
);

