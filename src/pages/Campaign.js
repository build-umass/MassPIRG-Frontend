import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import '../pages/Campaign.css'

function Campaign1() {
  return (
    <div className='bg-teal-200'>
      <div className='text-center p-2 text-decoration-underline'>
        <h1 className='header-text'>
          Hunger and Homelessness
        </h1>
      </div>
      <Carousel className='main-slide mx-5 rounded-5 car-bg'>
        <div>
          <img className="rounded-2" src={img1} height="400px"/>
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
              Rates of hunger and homelessness on college campuses across the state are too high. Students should be able to focus on their studies, not where their next meal will be coming from or where they will stay for the night. The Hunger Free Campus Initiative, if passed by the Massachusetts State Legislature, would reduce these rates and allow students to focus on more important things. In the past, we have made efforts to help the local Amherst community through running food drives for the Amherst Survival Center, and we have supported a Swipe Out Hunger Initiative on campus. Now, we are setting our sights on statewide change in addition to local service.
              Interested is making a change? 
            </p>
            <a className="link-light" href="https://forms.gle/8sJtqmEsXoTfhsRu6">Sign Up to Join Our Team</a>
          </div>
          <div className='flex'>
            <img src={img3} alt="campaign details image" width={500}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaign