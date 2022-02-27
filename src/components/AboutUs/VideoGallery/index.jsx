import React from 'react';
import { ClientPartners, FooterComponent } from '../../HomePage';
import Navbar from '../../HomePage/Navbar';
import ReactPlayer from 'react-player'

function VideoGallery() {
    return (
        <>
            <Navbar />
            <div className='bg-white'>
                <div className="cr__header section__padding pb-3" id="home">
                    <div className="cr__header-content mr-0">
                        <h1 className="gradient__text">Video Gallery</h1>
                    </div>
                </div>
                <div className='section__padding'>
                    <div className='d-flex justify-content-center'>
                        <ReactPlayer width={1280} height={720} url='https://www.youtube.com/watch?v=BXancm6vukU' />
                    </div>
                </div>
                <ClientPartners />
                <FooterComponent />
            </div>
        </>
    );
};

export default VideoGallery;


