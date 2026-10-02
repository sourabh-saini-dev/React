import React,{useState,useEffect} from 'react'

const Form = () => {
  const [state,setState] = useState([])
  const [ data , setData] = useState([])
     const [ loading , setLoading]= useState(true)
     const [reloading, setReloading] = useState(true)
    


     useEffect (()=>{

        fetch("https://dummyjson.com/users")
         
        .then((res)=> res.json())
        .then((data)=> {
           setData(data.users)
            setLoading(false)
           

        })
           
       
        
        .catch((err)=>{
           console.log(err)
          
             console.log(data)
           setLoading(false)
         
           
        })

     },[reloading])

     if(loading){
      return <h1>loading...</h1>
     }

     const  Reloading =()=>{
          setLoading(true)

          setInterval(()=>{
             setReloading(prev=> !prev)
             
          },3000)

     }



        
  return (
  <>
   <button onClick={Reloading}>Reload</button>
       {data.map((val)=>(
        <div key={val.id}>
          <p>{val.email}</p>
             <h1>{val.firstName} {val.lastName}</h1>
             <h1>{val.password}</h1>
               <h1>{val.city}</h1>
                 <h1>{val.country}</h1>
        </div>
       ))}
         
  </>
  )
}

export default Form

   // api se data get karna  use render karna loading or relaoding button use karna jisse  kuch time baad data show ho jaye 
   
