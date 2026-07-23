import React, { useState } from "react";

const A = () => {
  const [form, setForm] = useState({
    email:"",
    password:"",
    phone:"",
    gender:""
  });

  const [error,setError]=useState({})

  const handleChange=(e)=>{
    const { name,value } =e.target 
    setForm({...form,
        [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {};

    if (form.email == "") {
      obj.email = "email is required";
    }

    if (form.password == "") {
      obj.password = "password is required";
    }
    setError(obj)
    localStorage.setItem("user",JSON.stringify(form))
    if(Object.keys(obj).length === 0){
        setForm({
            email:"",
            password:""
        })
    }
  };
  console.log(form)
  let output = localStorage.getItem("user")
  console.log(output)
  return (
    <>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Email:
            <input
              type="text"
              name="email"
              value={form.email}
              placeholder="Enter your Email"
 onChange={handleChange}
            />
          </label>
          <p style={{ color: "red",background:"white" }}>{error.email}</p>
          <br />
          <br />

          <label htmlFor="">
            Password:
            <input
              type="text"
              name="password"
              value={form.password}
              placeholder="Enter your Password"
              onChange={handleChange}
            />
          </label>

          <p style={{ color: "red" }}>{error.password}</p>
          <br />
          <br />

          <button type="submit">submit</button>
        </form>
      </fieldset>
    </>
  );
};

export default A;
