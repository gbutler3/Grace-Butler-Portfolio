import React from "react";
import github from "../../assets/logos/github-logo.png";
import linkedin from "../../assets/logos/linkedin-logo.svg";
import mail from "../../assets/logos/mail-closed-envelope-back.svg";
import phone from "../../assets/logos/phone-receiver-silhouette.svg";

function Contact() {
  return (
    <section className= "contactpg bg-green pt-5">
      <div className= "text-center">
        <h1 className= "text-7xl m-10"> Contact </h1>
        <p className= "text-4xl m-10"> Thanks for checking out my work I hope you liked it. Contact me Below! </p>
      </div>

      <div className= " contact-grid">
        <ul className = " flex flex-wrap md\:flex-col sm\:flex-col text-3xl lg\:justify-between ml-32">
          <li className= "border-8 border-blue-200 p-14 m-10"><div className= ""><a href="https://github.com/gbutler3">Github</a>
            <img src={github} alt="Github logo" className= "ml-6" height="42px" width="55px"/></div></li>
          <li className= "border-8 border-blue-200 pt-14 md:py-14 pl-10 pr-10 m-10"><div><a href=" https://www.linkedin.com/in/grace-butler-834429188">LinkedIn</a>
            <img src={linkedin} alt="LinkedIn logo"  className= "ml-11" height="35px" width="33px"/></div></li>
          <li className= "border-8 border-blue-200 p-14 m-10"><div><a href="mailto:gmx.butler@gmail.com">Email</a>
            <img src={mail} alt="Mail" className= "ml-6"  height="35px" width="35px" /></div></li>
          <li className= "border-8 border-blue-200 p-14 m-10" ><div><a href="tel:214-918-8862">Phone</a>
            <img src={phone} alt="Phone" className= "ml-9"  height="35px" width="35px" /></div></li>
        </ul>
      </div>

      
    </section>
  );
}

export default Contact;