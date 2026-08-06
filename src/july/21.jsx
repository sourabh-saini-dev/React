import React, { useState } from "react";

const Sourabh = () => {
  const [name , setName] = useState("");
  const [ email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [gender, setGender] = useState("");
   const [phone, setPhone] = useState("");
   const [city, setCity] = useState("");
   const [bio, setBio] = useState("");
   const [hobbies, setHobbies] = useState("");
   const [date, setDate] = useState("");
   const [ profileimg, setProfileimg] = useState("");

  //  const [error, setError] = useState("")
   const abc=(e)=>{
    e.preventDefault();
    console.log(name, email,password,gender,phone,city,bio,hobbies,date,profileimg)
   }

  return (
    <>
     <fieldset>
      <form   onSubmit={abc} >

        <label htmlFor="">
          Name:
          <input type="text" placeholder="Enter your name" onChange={(e)=> setName(e.target.value)} />
      
        </label>
        <br /><br />


        <label htmlFor="">
          Email:
          <input type="text" name="Email" id="email" onChange={(e)=> setEmail(e.target.value)} />
        </label>
        <br /><br />



        <label htmlFor="">
          Password:
          <input type="text" name="Password" placeholder="Enter your password" id="password"  onChange={(e)=> setPassword(e.target.value)} />

        </label>
        <br /><br />



        <label htmlFor="">
          Gender:
          <input type="radio" name="Gender"  value="male" onChange={(e)=> setGender(e.target.value)}/>Male
          <input type="radio" name="Gender" value="female" onChange={(e)=> setGender(e.target.value)}/>Female

        </label>
        <br /><br />



        <label htmlFor="">
          Phone:
          <input type="text" placeholder="Enter your phone number" onChange={(e)=> setPhone(e.target.value)} />
        </label>
        <br /><br />




           <label htmlFor="">
            City:
            <select name="Select your city" id=""  onChange={(e)=> setCity(e.target.value)}>
              <option value="Jaipur">Jaipur</option>
              <option value="Delhi">Delhi</option>
              <option value="Gujrat">Gujrat</option>

            </select>
           </label>
           <br /><br />


           <label htmlFor="">
            Bio:
            <textarea placeholder="please write something here" id="" onChange={(e)=> setBio(e.target.value)}></textarea>
           </label>
           <br /><br />




           <label htmlFor="">
            Hobbies:
            <input type="checkbox" value="coding"  onChange={(e)=> setHobbies(e.target.value)}/> coding
            <input type="checkbox" value="react" onChange={(e)=> setHobbies(e.target.value)} />React
            <input type="checkbox" value="javascript" onChange={(e)=> setHobbies(e.target.value)}/>Javascript
           </label>
           <br /><br />


           <label htmlFor="">
            DOB:
            <input type="date" onChange={(e)=> setDate(e.target.value)}/>
           </label>
           <br /><br />



           <label htmlFor="">
            Profileimg:
            <input type="file" name="" id="" onChange={(e)=>setProfileimg(e.target.value)}/>
           </label>


           <br /><br />




           <button>submit</button>




     
      </form>
     </fieldset>
      
    </>
  );
};

export default Sourabh;
