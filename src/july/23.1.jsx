import React ,{useState}from 'react'

const  Form = () => {

  const [form , setForm] = useState({
      email:"",
      password:"",
      gender:"",
      state:"",

  });
  const [error , setError] = useState({})

  const handleChange = (e)=>{
    const {name,value}= e.target
    setForm({...form,
        [name]:value,


    });

  }


  const handleSubmit= (e)=>{
    e.preventDefault()


    let obj = {}

    if(form.email === ""){
      obj.email="email is required";
    }

    if(form.password === ""){
      obj.password="password id required";
    }

    if(form.gender === ""){
      obj.gender="gender is required";

    }

    if(form.state === ""){
      obj.state="state is required";
    }

    setError(obj)
     localStorage.setItem("user", JSON.stringify(form))
     if(Object.keys(obj).length === 0){
      setForm({...form,
        email:"",
        password:"",
        gender:"",
        state:"",

      })
     }
  }
  let ans = localStorage
    console.log(form);
    
   


  return (
  <>
  <fieldset>
    <form onSubmit={handleSubmit}>

      <h1>Login Form</h1>

      <label htmlFor="">
        Email:
        <input type="text" name="email" id="email" onChange={handleChange} />
      </label>
      <p style={{color: "red"}}>{error.email}</p>
      <br /><br />


      <label htmlFor="">
        password:
        <input type="text" name="password" id="password" onChange={handleChange}  />
      </label>
      <p style={{color: 'pink'}}>{error.password}</p>
      <br /><br />

      <label htmlFor=""  onChange={handleChange}>
        Gender:
        <input type="radio" name="Gender" value="male"  />Male
        <input type="radio"  name="Gender" value="female"  />Female
      </label>
      <p style={{color: 'yellow'}}>{error.Gender}</p>
        <br /><br />


        <select  name="" id="" onChange={handleChange}>
          State:
            <option value="select your state">select your state</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>
        <p style={{color: "blue"}}>{error.state}</p>
        <br /><br />

        <button type='submit'>submit</button>
    </form>
  </fieldset>

  </>
  )
}

export default  Form
