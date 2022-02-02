import React from 'react';
import { IMAGES } from '../../../assets';

const BlogSection = () => (
    <div className="cr__blog section__padding" id="blog">
        <div className="cr__blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="cr__blog-container">
            <div className="cr__blog-container_groupA">
                <Article imgUrl={IMAGES.BLOG_IMAGE} date="Jan 31, 2022" text="Credit Repair is the future. Let us exlore how it is?" />
            </div>
            <div className="cr__blog-container_groupB">
                <Article imgUrl={IMAGES.BLOG_IMAGE} date="Jan 31, 2022" text="Credit Repair is the future. Let us exlore how it is?" />
                <Article imgUrl={IMAGES.BLOG_IMAGE} date="Jan 31, 2022" text="Credit Repair is the future. Let us exlore how it is?" />
                <Article imgUrl={IMAGES.BLOG_IMAGE} date="Jan 31, 2022" text="Credit Repair is the future. Let us exlore how it is?" />
                <Article imgUrl={IMAGES.BLOG_IMAGE} date="Jan 31, 2022" text="Credit Repair is the future. Let us exlore how it is?" />
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
