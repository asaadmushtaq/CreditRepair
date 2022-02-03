import React from 'react';
import { IMAGES } from '../../../assets';

const BlogSection = () => (
    <div className="cr__blog section__padding" id="blog">
        <div className="cr__blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="cr__blog-container">
            <div className="cr__blog-container_groupA">
                <Article imgUrl={IMAGES.BRIEFCASE} date="Jan 31, 2022" text="Credit Repair is the future. Let us exlore how it is?" />
            </div>
            <div className="cr__blog-container_groupB">
                <Article imgUrl={IMAGES.CAR_BATTERY} date="Jan 31, 2022" text="Remove Negative Items" />
                <Article imgUrl={IMAGES.BAR_CHART} date="Jan 31, 2022" text="Increased Credit Scores" />
                <Article imgUrl={IMAGES.REPAIR_MAN} date="Jan 31, 2022" text="Automated Credit Repair" />
                <Article imgUrl={IMAGES.ENVELOPE} date="Jan 31, 2022" text="Educational Material" />
            </div>
        </div>
    </div>
);

export default BlogSection;

const Article = ({ imgUrl, date, text }) => (
    <div className="cr__blog-container_article">
        <div className="cr__blog-container_article-image">
            <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="cr__blog-container_article-content">
            <div>
                <p className='text-left'>{date}</p>
                <h3 className='text-left'>{text}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
    </div>
);
