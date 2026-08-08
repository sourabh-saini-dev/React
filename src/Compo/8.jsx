import React,{useState, useEffect} from 'react'

const Test = () => {
     const [data, setDate] = useState([])
     
    

     useEffect(()=>{
          fetch("https://dummyjson.com/users")
           .then((res)=> res.json())
        .then((data)=>{
             setDate(data.users)
             setReload(false)
               
        })
        .catch((err)=>{
            console.log(err)
            
        })
     },[])

     const Reload=()=>{
         setReload(true)
     }



  return (
    <div>
   
        {data.map((val)=>(
            <div key={val.id}>
                <p>{val.firstName} {val.lastName}</p>
                <h1>{val.email}</h1>
                <h2>{val.password}</h2>
                <h3>{val.country}</h3>
            </div>
        ))}
   
    </div>
  )
}

export default Test
