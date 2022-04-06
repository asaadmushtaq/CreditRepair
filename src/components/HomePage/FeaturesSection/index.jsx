import React from 'react';

const FeaturesSection = () => (
    <div className="cr__features section__padding" id="features">
        <div className="cr__features-heading">
            <h1 className="gradient__text">Creditciti software is the most automated creditciti software in the industry right now.</h1>
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
        text: 'Creditciti is in-the-cloud, so you can access it from any device and from anywhere in the world.',
    },
    {
        title: 'No Comparison',
        text: 'We don’t do credit repair services like other we use cutting edge state of the art software that is cloud base. We also help our client to remove all negative attempts from their credit reports in reasonable amount of time legally permanently from their credit report.',
    },
    {
        title: 'Privacy and Security Matter',
        text: `Creditciti database is not shared with any of our clients. This feature ensures that no one can access our database. we use encrypted coding language to secure our client data.
        your information: creditciti client portals are hosted inside our website for security reasons, so our company is protected against cyber criminals and identity theft.
        `,
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
            <p className='text-left red-text-class'>{text}</p>
        </div>
    </div>
);

