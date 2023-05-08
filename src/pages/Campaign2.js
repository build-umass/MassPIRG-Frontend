import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image4.jpg'
import img4 from '../assets/image8.jpg'
import img5 from '../assets/image9.jpg'
import img6 from '../assets/image12.jpg'
import '../pages/Campaign.css'

function Campaign2() {
    return (
        <div className='bg-light'>
            <div className='text-center p-2 text-decoration-underline'>
                <h1 className='header-text'>
                    100% Renewable Energy
                </h1>
            </div>
           
            <div className="bg-dark p-5 mx-5 rounded-5">
                <h1>
                    Campaign Summary
                </h1>
                <div className='text-white d-flex justify-content-between'>
                    <div className='flex col-7 py-2 text-12 blockquote'>
                        <p> <u>Goals</u>: Pass the 100% Clean Act (An Act transitioning Massachusetts to clean electricity, heating, and transportation) in the MA legislature, Advocate for 100% Renewable energy in MA and at UMass Amherst. Advocate for climate conscious activities at UMass Amherst.</p>
                            <p><u>Contact Information</u>: Caroline Williams, Carolinewill@umass.edu, Serene Omran, somran@umass.edu</p>

                            <p><u>Meeting Information</u>: Tuesday, 7-8PM</p>
                            <p><u>Wins</u>: Carbon Zero at UMass Amherst where UMass Amherst committed to 100% renewable energy by 2032.
                                Helped pass the MA Climate Bill (An act driving clean energy and offshore wind) H5060</p>
                        
                        <a className="link-light" href="https://forms.gle/8sJtqmEsXoTfhsRu6">Sign Up to Join Our Team</a>
                    </div>
                    <div className='flex'>
                        <img className='my-5' src={img3} alt="campaign details image" width={500} height={400} />
                    </div>
                </div>
            </div>
            <div className='m-5 rounded-5 bg-dark p-2 align-items-center'>
                <h1 className='m-4 align-center'>Gallery of Photos</h1>
                <Carousel className='main-slide'>
                    <div className='my-5'>
                        <img src={img1} height="450px" />
                    </div>
                    <div className='my-3'>
                        <img src={img2} height="550px" />
                    </div>
                    <div className='my-5'>
                        <img src={img3} height="400px" />
                    </div>
                    <div className='my-1'>
                        <img src={img4} height="620px" />
                    </div>
                    <div className='my-5'>
                        <img src={img5} height="400px" />
                    </div>
                    <div className='my-5'>
                        <img src={img6} height="400px" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Campaign2