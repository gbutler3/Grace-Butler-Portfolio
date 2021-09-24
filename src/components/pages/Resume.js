import React from "react";
import pg1 from "../../assets/resume/pg1.PNG";
import pg2 from "../../assets/resume/pg2.PNG";
import downloadresume from "../../assets/resume/Grace Butler's Resume.pdf";
import downloadimg from "../../assets/resume/download.png"

function Resume(props) {
    return (
      <section className= "contactpg bg-green pt-5 text-black">
      <div className= "text-center">
        <h1 className= "text-7xl m-2"> Resume </h1>
        <a href= {downloadresume} className= "text-2xl">Download<img src= {downloadimg} alt="download-img"style={{height: '20px', width:'20px', display:'block', margin:'auto'}}></img></a> 
        <img src= {pg1} alt="resume1" style={{display:'block', margin:'auto', paddingBottom: '5px', paddingTop: '10px'}}></img>
        <img src= {pg2} alt="resume2" style={{display:'block', margin:'auto',paddingBottom: '10px'}}></img> 
      </div>
      </section>
    );
}


export default Resume;