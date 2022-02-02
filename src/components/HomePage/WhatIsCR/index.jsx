import React from 'react';

const WhatIsCR = () => (
    <div className="cr__whatcr section__margin">
        <div className="cr__whatcr-feature">
            <Feature title="What is Credit Repair" text="Credit Repair is the only One-Click “Done-For-You,” Credit Repair that not only extracts all derogatories automatically but, at the same time, assigns the letters and the dispute reasons. Unbelievable! This benefit, and countless more, can’t be emphasized enough." />
        </div>
        <div className="cr__whatcr-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p>Explore</p>
        </div>
        <div className="cr__whatcr-container">
            <Feature title="Dispute Reasons" text="Dispute Reasons, and the Dispute Types, saves you up to 90% of your valuable time and avoids errors and mental fatigue when selecting letters and dispute reasons." />
            <Feature title="Three-Line Approach" text="This approach allows you to detect, very quickly, discrepancies between Creditor’s Names, Account’s IDs, Open Dates, Balances, etc." />
            <Feature title="Speed & Power" text="Credit Repair is designed for speed and power, to save you time and to empower you with the tools that will make your work easier, faster, and accurate." />
        </div>
    </div>
);

export default WhatIsCR;

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