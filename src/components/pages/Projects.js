import React from "react";
import communitySidekick from "../../assets/Community Sidekicks.png"
import workday from "../../assets/Workday scheduler screenshot.png"
import codeQuiz from "../../assets/coding quiz screenshot.PNG"
import password from "../../assets/Password Generator screenshot.PNG"
import budget from "../../assets/budget tracker screenshot.PNG"
import fitness from "../../assets/fitness tracker screenshot.PNG"
import cmdline from "../../assets/command line image.PNG"
import notes from "../../assets/Note Taker screenshot.PNG"


function Projects() {
  return (
    <body className= "bg-blue pb-1">
      <h1 className="text-center pt-5 text-6xl">Projects</h1>
      
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

        <card className= " relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className= " relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 transform hover:scale-110 motion-reduce:transform-none ">
            <div className= "mx-auto">
              <div className= "py-3 leading-6 space-y-4 text-purple-700 sm:text-lg sm:leading-7">
                <div>
                  <a id= "title" className= "text-2xl mb-5" href= "https://sleepy-mesa-04272.herokuapp.com/"> The Anywhere Budget Tracker</a>
                </div>
                <img className= "mb-3" alt="communitySideKick" src= {budget} ></img>
                <a className= "text-sm object-scale-down" href= "https://github.com/gbutler3/The-Anywhere-Budget-Tracker">
                  <p>This budget tracker can be utilized on and offline to track your expenses. </p>
                </a>
              </div>
            </div>
          </div>
        </card>

        <card className= " relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className= " relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 transform hover:scale-110 motion-reduce:transform-none ">
            <div className= "mx-auto">
              <div className= "py-3 leading-6 space-y-4 text-purple-700 sm:text-lg sm:leading-7">
                <div>
                  <a className= "text-2xl mb-5" href= "https://obscure-thicket-67236.herokuapp.com/"> Note Taker</a>
                </div>
                <img className= "mb-3" alt="communitySideKick" src= {notes} ></img>
                <a className= "text-sm object-scale-down" href= "https://github.com/gbutler3/Meeting_Notes_Taker">
                  <p> Note taker for any individual who has multiple tasks or meetings. Individuals are able to create, save and delete notes from this application. </p>
                </a>
              </div>
            </div>
          </div>
        </card>

        <card className= " relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className= " relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 transform hover:scale-110 motion-reduce:transform-none ">
            <div className= "mx-auto">
              <div className= "py-3 leading-6 space-y-4 text-purple-700 sm:text-lg sm:leading-7">
                <div>
                  <a id= "title" className= "text-2xl mb-5" href= "https://gbutler3.github.io/Web_APIs_Code_Quiz/">Coding Quiz Challenge</a>
                </div>
                <img className= "mb-3" alt="communitySideKick" src= {codeQuiz} ></img>
                <a className= "text-sm object-scale-down" href= "https://github.com/gbutler3/Web_APIs_Code_Quiz">
                <p>Dynamically updates each question in the HTML and CSS by utilizing JavaScript.</p>
                </a>
              </div>
            </div>
          </div>
        </card>

        <card className= " relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className= " relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 transform hover:scale-110 motion-reduce:transform-none ">
            <div className= "mx-auto">
              <div className= "py-3 leading-6 space-y-4 text-purple-700 sm:text-lg sm:leading-7">
                <div>
                  <a className= "text-2xl mb-5" href= "https://blooming-sands-23937.herokuapp.com/?id=6144bdc4dc1cde00166647b0"> Workout Progress Tracker</a>
                </div>
                <img className= "mb-3" alt="communitySideKick" src= {fitness} ></img>
                <a className= "text-sm object-scale-down" href= "https://github.com/gbutler3/Workout_Progress_Tracker-NoSQL">
                  <p> Workout Progress Tracker where the user can track and view their progress over time when they input the exercise, reps, weight, and duration of each workout. </p>
                </a>
              </div>
            </div>
          </div>
        </card>

        <card className= " relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className= " relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 transform hover:scale-110 motion-reduce:transform-none ">
            <div className= "mx-auto">
              <div className= "py-3 leading-6 space-y-4 text-purple-700 sm:text-lg sm:leading-7">
                <div>
                  <a id= "title" className= "text-2xl mb-5" href= "https://github.com/gbutler3/ORM_E_Purchasing_and_Spending"> ORM E Purchasing and Spending </a>
                </div>
                <img className= "mb-3" alt="communitySideKick" src= {cmdline} ></img>
                <a className= "text-sm object-scale-down" href= "https://github.com/gbutler3/ORM_E_Purchasing_and_Spending">
                  <p>Backend e-commerce site which is deployed through the command line. </p>
                </a>
              </div>
            </div>
          </div>
        </card>

        <card className= " relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className= " relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 transform hover:scale-110 motion-reduce:transform-none ">
            <div className= "mx-auto">
              <div className= "py-3 leading-6 space-y-4 text-purple-700 sm:text-lg sm:leading-7">
                <div>
                  <a id= "title" className= "text-2xl mb-5" href= "https://gbutler3.github.io/Work_Day-Schedule_Mini_Project/"> Work Day Scheduler </a>
                </div>
                <img className= "mb-3" alt="communitySideKick" src= {workday} ></img>
                <a className= "text-sm object-scale-down" href= "https://github.com/gbutler3/Work_Day-Schedule_Mini_Project">
                  <p>Calendar Application which users are able to input events, which are saved in local storage. This utlizes Moment.js. for the Date and Time.</p>
                </a>
              </div>
            </div>
          </div>
        </card>

        <card className= " relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className= " relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 transform hover:scale-110 motion-reduce:transform-none ">
            <div className= "mx-auto">
              <div className= "py-3 leading-6 space-y-4 text-purple-700 sm:text-lg sm:leading-7">
                <div>
                  <a id= "title" className= "text-2xl mb-5" href= "https://gbutler3.github.io/JavaScript-Password-Generator-Mini-Project/">Password Generator</a>
                </div>
                <img className= "mb-3" alt="communitySideKick" src= {password} ></img>
                <a className= "text-sm object-scale-down" href= "https://github.com/gbutler3/JavaScript-Password-Generator-Mini-Project">
                <p>Users are able to generate a random password. Alerts prompt the user for input in which the password is then displayed. JavaScript code dynamically updates the HTML and CSS. </p>
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