import Typical from "react-typical"
import './profile.css';
import imageOne from '../assets/imageOne.jpeg'
export default function Profile(){
    return(
       
             <div     style={{
        backgroundImage: `url(${imageOne})`,
    backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
      }} className='home'>
        
        <div className="profile-parent">
           <div className="profile-details">
           <div className="colz">
              <div className="colz-items">
              <a href="#"> <i className="fa fa-facebook-square"></i></a>
              <a href="#"> <i className="fa fa-instagram"></i></a>
              <a href="#"> <i className="fa fa-github-square"></i></a>
              </div>
           </div>
           <div className="profile-name">
            <span className="primary-text"> {" "} 
            Hello I'M <span className="highlighted-text">Gelila</span>
            </span>
           </div>
           <div className="profile-role">
            <span className="primary-text"> {" "} 
            <h1>
                {" "}
                <Typical
                loop={Infinity}
                steps={["Ethusiastic Dev", 1000,
                "Full stack Developer", 1000, 
                "ReactJS ", 1000,
                "NodeJS ", 1000,]}
                />
            </h1>
            <span className="profile-intro">
                contact me for your beautifull websites  your beautifull websites. . 
            </span>
            </span>
            </div>
            <button className="btn hireMe-btn">{""} Hire me{" "}</button>
            <a href="report.pdf" download='report.pdf'> 
                <button className="btn resume-btn">Get Resume</button></a>
                </div>
          
           
            </div>  
      </div>
           
      
    )
}