import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/image7.png'
import img2 from '../assets/image14.png'
import '../pages/Campaign3.css'

function Campaign3() {
    return (
        <div className='bg-teal-200'>
            <div className='text-center p-2 text-decoration-underline'>
                <h1 className='header-text'>
                    Democracy for the People
                </h1>
            </div>
           
            <div className="bg-dark p-5 mx-5 rounded-5">
                <h1>
                    Campaign Summary
                </h1>
                <div className='text-white d-flex justify-content-between'>
                    <div className='flex col-7 py-2 text-12 blockquote'>
                        <p><u>Goals</u>: To promote civic engagement with UMass students, get election day off from classes on campus, and pass legislation that would allow same-day voter registration in Massachusetts.</p>
                        <p><u>Contact Information</u>: Isabel Rojas, irojas@umass.edu</p>
                        <p><u>Meeting Information</u>: Spring 23’ meetings TBD</p>
                        <p><u>Wins</u>: For 2022 Midterm elections, we registered 309 students to vote on the UMass Amherst campus and contacted almost 20,000 students across Massachusetts to get out the vote on election day. </p>

                        <a className="link-light" href="https://forms.gle/8sJtqmEsXoTfhsRu6">Sign Up to Join Our Team</a>
                    </div>
                    <div className='flex'>
                        <img src={img2} className="my-3" alt="campaign details image" width={500} />
                    </div>
                </div>
            </div>
            <div className='m-5 rounded-5 bg-dark p-2 align-items-center'>
                <h1 className='m-4 align-center'>Gallery of Photos</h1>
                <Carousel className='main-slide'>
                <div>
                    <img src={img1} height="400px" />
                </div>
                <div>
                    <img src={img2} height="400px" />
                </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Campaign3