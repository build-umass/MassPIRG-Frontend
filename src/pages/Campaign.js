import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/image5.jpg'
import img2 from '../assets/image6.jpg'
import img3 from '../assets/image7.jpg'
import img4 from '../assets/image10.jpg'
import img5 from '../assets/image11.jpg'
import '../pages/Campaign.css'

function Campaign() {
  return (
    <div className='bg-teal-200'>
      <div className='text-center p-2 text-decoration-underline'>
        <h1 className='header-text'>
          Make Textbooks Affordable
        </h1>
      </div>
      
      <div className="bg-dark p-5 mx-5 rounded-5">
        <h1>
          Campaign Summary
        </h1>
        <div className='text-white d-flex justify-content-between'>
          <div className='flex col-7 py-2 text-12 blockquote'>
            <p>
              <u>Goals</u>: The cost of college is extremely high with tuition and housing alone, in addition to these already exorbitant costs, professors expect students to pay thousands more dollars on class materials. The Affordable Textbooks Campaign works to reduce the cost of textbooks, access codes and other class materials for students.
              <p><u>Contact Information</u>: Megan Joyce, meganjoyce@umass.edu</p>
              <p><u>Meeting Information</u>: Wednesday 7-8PM</p>
              <p><u>Wins</u>: OER Grant Program where small grants are given to instructors who wish to use open educational resources instead of using resources that require students to pay to use them (ex. Textbooks, online access codes, etc.)</p>

            </p>
            <a className="link-light" href="https://forms.gle/8sJtqmEsXoTfhsRu6">Sign Up to Join Our Team</a>
          </div>
          <div className='flex'>
            <img src={img2} alt="campaign details image" width={500} height={620} />
          </div>
        </div>
      </div>
      <div className='m-5 rounded-5 bg-dark p-2 align-items-center'>
      <h1 className='m-4 align-center'>Gallery of Photos</h1>
      <Carousel className='main-slide'>
        <div>
          <img src={img1} height="700px" />
        </div>
        <div>
          <img src={img2} height="700px" />
        </div>
        <div>
          <img src={img3} height="700px" />
        </div>
        <div>
          <img src={img4} height="700px" />
          </div>
          <div>
            <img src={img5} height="700px" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Campaign