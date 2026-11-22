import "./App.css";
import { useState } from "react";

function App() {
  const[formData, setFormData] = useState({
   firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:""
   , state:"", postalCode:"",comments:false,candidates:false, offers:false,pushNotification:""

  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked : value}) );
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("finally printing the value of form data:");
    console.log(formData)
  }

  return(
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

      <lable htmlFor="firstName">First name</lable>
      <br/> 
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Ankit"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

      <br/>

      <lable htmlFor="lastName">last name</lable>
      <br/> 
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="sharma"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br/>
        <lable htmlFor="Email">Email Address</lable>
      <br/> 
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ankit18.8@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <lable htmlfor="country">Country</lable>
        <br/>
        <select
        id="country"
        name="country"
        value={formData.country}
        onchange={changeHandler}
        className="outline"
        >

          <option>India</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>


        <br/>

      <lable htmlFor="streetAddress"> Street Address</lable>
      <br/> 
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="pkl 11"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />


      <br/>
      <lable htmlFor="city">City</lable>
      <br/> 
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Harayana"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />


      <br/>
      <lable htmlFor="state">State / Province</lable>
      <br/> 
        <input
          type="text"
          name="state"
          id="state"
          placeholder="hp"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />


      <br/>
      <lable htmlFor="postalCode">postalCode</lable>
      <br/> 
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="163099"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <br/>
        <br/>
        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
          <input
          id="comments"
          name="comments"
          type="checkbox"
          checked={formData.comments}
          onChange={changeHandler}
          />
          <div>
            <lable htmlFor="comments">Comments</lable>
            <p> get notification when some one posests a comments on a posting.</p>
          </div>
          </div>


          <div className="flex">
          <input
          id="candidates"
          name="candidates"
          type="checkbox"
          checked={formData.candidates}
          onChange={changeHandler}
          />
          <div>
            <lable htmlFor="candidates">Candidates</lable>
            <p>ome one posests a comments on a posting.</p>
          </div>
          </div>


          <div className="flex">
          <input
          id="offers"
          name="offers"
          type="checkbox"
          checked={formData.offers}
          onChange={changeHandler}
          />
          <div>
            <lable htmlFor="offers">Offers</lable>
            <p> one posests a comments on a posting.</p>
          </div>
          </div>

        </fieldset>


        <br/>
        <br/>
        <fieldset>
          <legend>Push NOtifications</legend>
          <p>These are delivered via sms to your mobil phone.</p>

          <input
          type="radio"
          onChange={changeHandler}
          name="pushNotifications"
          value="EveryThink"
          id="pushEverythink"
          />

        <lable htmlFor="pushEverythink">Everythink</lable>


        <br/>
        <input
          type="radio"
          onChange={changeHandler}
          name="pushNotifications"
          value="same as email"
          id="pushEmail"
          />

        <lable htmlFor="pushEmail">same as email </lable>

        <br/>
        <input
          type="radio"
          onChange={changeHandler}
          name="PushNotifications"
          value="No push Notification"
          id="push nothing"
          />

        <label htmlFor="PushNothing"> No push Notification </label>




        </fieldset>

        <button
        className="bg-blue-500 text-white font-bold rounded py-2 px-4"
        >Save</button>


        
      </form>


    </div>
  );
}
export default App;