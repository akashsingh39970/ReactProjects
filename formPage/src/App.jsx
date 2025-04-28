import { useState } from 'react';
import './App.css';

const App = () => {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [emailId, setemailId] = useState('');
  const [contactNumber, setcontactNumber] = useState('');
  const [gender, setgender] = useState('');
  const [skill, setskill] = useState({
    react: true,
    nodejs: false,
    nextjs: false,
  });

  const [resume, setResume] = useState('');
  const [url, setURL] = useState('');
 
  const [selectedOption, setSelectedOption] =
        useState("");
    const [about, setAbout] = useState("");


  const handelsillchange = (sk) => {
    setskill((prev) => ({
      ...prev,
      [sk]: !prev[sk],

    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
        firstName,
        lastName,
        emailId,
        contactNumber,
        gender,
        selectedOption,
        skill,
        resume,
        url,
        about
    );
    // Add your form submission logic here
};


  return (
    <div className='formmain'>
      <form action="">
        <fieldset>
          {/* <legend>form Page</legend> */}
          <h2>Form Submissiom Page</h2>
          <div className='formfield'>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name='first_name' id='first_name' value={firstName} onChange={(e) => {
              setfirstName(e.target.value);

            }} placeholder='Enter First Name' />
          </div>



          <div className='formfield'>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name='last_name' id='last_name' value={lastName} onChange={(e) => {
              setlastName(e.target.value);
            }} placeholder='Enter Last Name' />
          </div>


          <div className='formfield'>
            <label htmlFor="email_id">Email Address</label>
            <input type="email" name='email_id' id='email_id' value={emailId} onChange={(e) => {
              setemailId(e.target.value);
            }} placeholder='Enter Email id' />
          </div>


          <div className='formfield'>
            <label htmlFor="contact_number">Contact Number</label>
            <input type="tel" name='contat_number' id='contat_number' value={contactNumber} onChange={(e) => {
              setcontactNumber(e.target.value);
            }} placeholder='Enter Contact Number' />
          </div>


          <div className="formfield">
            <label htmlFor="gender">Gender</label>
            <div className="radio-group">
              <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'}
                onChange={(e) => { setgender(e.target.value) }} />
              <label htmlFor="male">Male</label>

              <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'}
                onChange={(e) => { setgender(e.target.value) }} />
              <label htmlFor="female">Female</label>

              <input type="radio" id="others" name="gender" value="others" checked={gender === 'others'}
                onChange={(e) => { setgender(e.target.value) }} />
              <label htmlFor="others">Others</label>
            </div>
          </div>

          <div className="formfield">
            <label htmlFor="skill">Select Your Skill</label>
            <div className="radio-group">
              <input type="checkbox" id="react" name="react" value="react"
                checked={skill.react === true}
                onChange={(e) => {
                  handelsillchange("react")
                }} />
              <label htmlFor="react">React</label>

              <input type="checkbox" id="nodejs" name="nodejs" value="nodejs"
                checked={skill.nodejs === true}
                onChange={(e) => {
                  handelsillchange("nodejs")
                }} />
              <label htmlFor="nodejs">Node js</label>

              <input type="checkbox" id="nextjs" name="nextjs" value="nextjs"
                checked={skill.nextjs === true}
                onChange={(e) => {
                  handelsillchange("nextjs")
                }} />
              <label htmlFor="nextjs">Next js</label>
            </div>
          </div>

          <div className='formfield'>
            <label htmlFor="file">Upload Resume</label>
            <input type="file" id='file' name='file' placeholder='Enter Upload File'
              onChange={(e) =>
                setResume(e.target.files[0])
              } />
          </div>

          <div className='formfield'>
            <label htmlFor="url">Enter URL</label>
            <input type="url" id='url' name='url' placeholder='Enter URL'
              onChange={(e) =>
                setURL(e.target.value)
              } />
          </div>

          <div className='formfield'>
            <label htmlFor="select">Select Your Field</label>
            <select name="select" id="select" value={selectedOption}
              onChange={(e) =>
                setSelectedOption(
                  e.target.value
                )
              }>
              <option value="" disabled 
               selected={selectedOption === ""}>Select Your Field</option>
              <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">
                  JavaScript
                </option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">
                  Express
                </option>
                <option value="t">
                  MongoDB
                </option>
              </optgroup>
            </select>
          </div>

          <div className='formfield'>
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"

              style={{ width: '80%', height: '189px' }}
              placeholder="About your self"
              required
              onChange={(e) =>
                setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className='formfield'>
            <button
              type="reset"
              value="reset"
              onClick={() => handleReset()}

            >
              Reset
            </button>
            <button
              type="submit"
              value="Submit"
              onClick={(e) => handleSubmit(e)}

            >
              Submit
            </button>
          </div>











        </fieldset>
      </form>

    </div>
  )
}

export default App
