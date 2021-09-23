import React from "react";
import AboutPic from "../../assets/ProfilePic.jpg"

function AboutSection() {
  return (

    <section id="about-me" className= "about-me bg-white">
      <h1 className= "text-center text-5xl"> About me! </h1>   
        <div className= "flex">
          <p className= " text-2xl mt-15 mr-24 ml-10 object-right lg\:justify-center"> Hi, I'm Grace. I'm an aspiring full stack web developer. I currently reside in the Dallas-Fortworth Metroplex. I am currently enrolled in the Southern Methodist University Full-Stack Developer Coding BootCamp. We have covered HTML & CSS, BootStrap, Javascript, Web APIs, Third Party APIs and Server-side APIs. Currently we are going over Node, and will be going over MySQL, Express, OOP, MVC, and React.  </p>
        </div>
        <div>
        <img alt= "this is a profile pic" src={AboutPic} style={{height:'15%', width: '15%', borderRadius:'10%', display:'block', margin:'auto' }}></img>
        </div>

        <i class="fab fa-html5"></i>
        <div>HTML   CSS    JavaScript   React     NodeJS      npm</div>


    </section> 
  );
}

export default AboutSection;