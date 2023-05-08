import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import '../pages/Campaign.css'

function Campaign2() {
    return (
        <div className='bg-teal-200'>
            <div className='text-center p-2 text-decoration-underline'>
                <h1 className='header-text'>
                    100% Renewable Energy
                </h1>
            </div>
            <Carousel className='main-slide mx-5 rounded-5 car-bg'>
                <div>
                    <img className="rounded-2" src={img1} height="400px" />
                </div>
                <div>
                    <img src={img2} height="400px" />
                </div>
                <div>
                    <img src={img3} height="400px" />
                </div>
                <div>
                    <img src={img4} height="400px" />
                </div>
            </Carousel>
            <div className="bg-dark p-5 mx-5 rounded-5">
                <h1>
                    Campaign Summary
                </h1>
                <div className='text-white d-flex justify-content-between'>
                    <div className='flex col-7 py-2 text-12 blockquote'>
                        <p>
                            <b>Goals:</b>
                            Pass the 100% Clean Act (An Act transitioning Massachusetts to clean electricity, heating, and transportation) in the MA legislature, Advocate for 100% Renewable energy in MA and at UMass Amherst. Advocate for climate conscious activities at UMass Amherst.
                            Contact Information: Caroline Williams, Carolinewill@umass.edu, Serene Omran, somran@umass.edu

                            Meeting Information: Tuesday, 7-8PM
                            Wins: Carbon Zero at UMass Amherst where UMass Amherst committed to 100% renewable energy by 2032.
                            Helped pass the MA Climate Bill (An act driving clean energy and offshore wind) H5060
                            Gallery of Pictures:

                        </p>
                        <a className="link-light" href="https://forms.gle/8sJtqmEsXoTfhsRu6">Sign Up to Join Our Team</a>
                    </div>
                    <div className='flex'>
                        <img src={img3} alt="campaign details image" width={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaign2