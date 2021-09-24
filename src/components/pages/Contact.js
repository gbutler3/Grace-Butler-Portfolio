import React, {useState} from "react";
import github from "../../assets/logos/github-logo.png";
import linkedin from "../../assets/logos/linkedin-logo.svg";
import mail from "../../assets/logos/mail-closed-envelope-back.svg";
import phone from "../../assets/logos/phone-receiver-silhouette.svg";
import { validateEmail } from '../utils/helpers';


function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [submitname, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    }

    if (inputType === 'Name') {
      setName(inputValue);
    }
    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();    

    // First we check to see if the email is not valid or if the email is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail('');
    setName('');
    setMessage('');
  };
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

      <form className="form flex items-center justify-center ">
        <input className= "m-2"
            value={submitname}
            name="Name"
            onChange={handleInputChange}
            type="Name"
            placeholder="Name"
        />
        <br></br>
        <input className= "m-2"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <br></br>
        <input className= "m-2"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text text-center text-pink font-semibold">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;