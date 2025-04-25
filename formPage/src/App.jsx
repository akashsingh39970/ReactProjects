import { useState } from 'react';
import './App.css';

const App = () => {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [emailId, setemailId] = useState('');
  const [contactNumber, setcontactNumber] = useState('');

  return (
    <div className='formmain'>
      <form action="">
        <fieldset>
          {/* <legend>form Page</legend> */}
          <h2>Form Submissiom Page</h2>
          <div className='formfield'>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name='first_name' id='first_name' value={firstName} placeholder='Enter First Name' />
          </div>


          <div className='formfield'>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name='last_name' id='last_name' value={lastName} placeholder='Enter Last Name' />
          </div>


          <div className='formfield'>
            <label htmlFor="email_id">Email Address</label>
            <input type="email" name='email_id' id='email_id' value={emailId} placeholder='Enter Email id' />
          </div>


          <div className='formfield'>
            <label htmlFor="contact_number">Contact Number</label>
            <input type="tel" name='contat_number' id='contat_number' value={contactNumber} placeholder='Enter Contact Number' />
          </div>


          <div className="formfield">
            <label htmlFor="gender">Gender</label>
            <div className="radio-group">
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>

              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>

              <input type="radio" id="others" name="gender" value="others" />
              <label htmlFor="others">Others</label>
            </div>
          </div>

          <div className="formfield">
            <label htmlFor="skill">Select Your Skill</label>
            <div className="radio-group">
              <input type="checkbox" id="react" name="react" value="react" />
              <label htmlFor="react">React</label>

              <input type="checkbox" id="nodejs" name="nodejs" value="nodejs" />
              <label htmlFor="nodejs">Node js</label>

              <input type="checkbox" id="reactjs" name="reactjs" value="reactjs" />
              <label htmlFor="reactjs">Next js</label>
            </div>
          </div>

          <div className='formfield'>
            <label htmlFor="">Upload Resume</label>
            <input type="upload" />
          </div>






        </fieldset>
      </form>

    </div>
  )
}

export default App
