import React from "react";
import communitySidekick from "../../assets/Community Sidekicks.png"


function Projects() {
  return (
    <body className= "bg-blue">
      <h1 className="text-center text-6xl">Projects</h1>
      
      <section className=" flex flex-wrap gap-12 justify-center text-center m-10 sm:py-12 ">
        <card className= " relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className= " relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 transform hover:scale-110 motion-reduce:transform-none ">
            <div className= "mx-auto">
              <div className= "py-3 leading-6 space-y-4 text-purple-700 sm:text-lg sm:leading-7">
                <div>
                  <a id= "title" className= "text-2xl mb-5" href= "https://community-sidekicks.herokuapp.com/"> Community SideKicks </a>
                </div>
                <img className= "mb-3" alt="communitySideKick" src= {communitySidekick} ></img>
                <a className= "text-sm object-scale-down" href= "https://github.com/gbutler3/community-sidekicks">
                  <p>Community Sidekicks is a humanitarian website in which you can sign up to donate your time to a number of organizations in search of people willing to do volunteer work. Non-profit organizations can create an account and see a list of volunteers, and volunteers can sign up to be viewed and vetted by organizations.</p>
                </a>
              </div>
            </div>
          </div>
        </card>
      </section>

    </body>
  );
}

export default Projects;