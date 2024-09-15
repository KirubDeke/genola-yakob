import './style/about.css'
import image6 from './assets/img6.png'
import image2 from './assets/img2.png'
import image3 from './assets/img5.png'
function About(){
   return(
    <>
     <div className='section-about'>
        <div className='image-one'>
            <img src={image3} alt='image'/>
        </div>
        <div className='about-main-content'>
            <h1 className='heading'>About</h1>
            <p className='about-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint optio omnis magnam ratione architecto. Doloremque et, corporis voluptate dolore nostrum illo nihil, odio optio eum aliquam expedita, modi dolor culpa.</p>
            <button className="read-button">Read More</button>
        </div>
        <div className='image-two'>
           <img src={image6} alt='image'/>
        </div>
     </div>
    </>
   )

}export default About;