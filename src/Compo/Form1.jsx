import React ,{useState, useEffect}from 'react'

const Form1 = () => {
    const [ form, setForm] = useState({
         email:"",
         password:"",
         gender:"",
         state:"",
        })

        const [ error, setError] = useState({})

      const handleChange=(e)=>{
      const {name,value} = e.target
      setForm({...form,
        [name]:value
      })

   }
      


         const Submit =(e)=>{
            e.preventDefault()  

         
 let obj ={}


         if(form.email === ""){
            obj.email="email is not required";
         }

         if(form.password === ""){
            obj.password="password is not required";
         }
         
         if(form.gender === ""){
              
            obj.gender="gender is not requird";
         }

         if(form.state === ""){
            obj.state="state is not requiredd";
         }

          setError(obj)

          if(Object.keys(obj).length===0){
          localStorage.setItem("setForm", JSON.stringify(form))
        
          console.log(form)
           }
         }

        
         
      

  return (
    <div>
        <fieldset>
            <form  onSubmit={Submit}>
                 <label htmlFor="">email</label>
                 <input type="text" name="email" value={form.email} placeholder='enter your email' onChange={handleChange}  />
                 <p style={{
                  color: "red",
                 }}>{error.email}</p>
                 
              
                 <br /><br />


                 <label htmlFor="">password</label>
                 <input type="text" name="password" value={form.password} placeholder='enter your password' id=""   onChange={handleChange} />
                 <p style={{
                  color: "red",
                 }}>{error.password}</p>
                 <br /><br />

                 <label htmlFor="">gender</label>
                 <input type="radio" name="gender" value="male"  onChange={handleChange}/>male


                 <input type="radio" name="gender" value="female " onChange={handleChange} /> female
                  <p style={{
                     color: "red",
                  }}>{error.gender}</p>


                 <br /><br />


                 <select name="state" value={form.state} id=""  onChange={handleChange}>
                    <option value="choose state">chose state</option>
                    <option value="rajasthan">rajasthan</option>
                    <option value="maharashtra">maharashtra</option>
                 </select>
                 <p style={{
                  color:"red",
                 }}>{error.state}</p>
                 <br /><br />
                   
                   <button 
                 type='submit'>submit</button>
            </form>
        </fieldset>
        <br /><br />

        <h1>{form.email}</h1>
        <p>{form.gender}</p>
        <p>{form.password}</p>
     
    </div>
  )
}

export default Form1



// data ko render kia fir use localstorage me save kia hai //
