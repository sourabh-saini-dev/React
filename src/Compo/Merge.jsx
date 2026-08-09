import React,{useState, useEffect} from 'react'

const Merge = () => {
    const [ data, setData] = useState([])
     const [post, setPost] = useState([])
     const [show, setShow] = useState(true)

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
             .then(res => res.json())
             .then((data)=>{
                  setData(data.users)
             })
             .catch((err)=>{
                console.log(err);
                
             })



             fetch("https://jsonplaceholder.typicode.com/users")

              .then(res => res.json())
              .then((data)=>{
                  setPost(data)
              })
              .catch((err)=> console.log(err))
    },[])
      console.log(data)
      console.log(post)

      const handleSubmit=()=>{
         setShow(!show)
      }

  return (
  <>

          <button onClick={handleSubmit}>
            {show ? "Hide" : "show"}

          </button>

          {show ? (

                 <>
              {data.map((val)=>(
            <div key={val.id}>
               <p>{val.email}</p>
               <h1>{val.firstName}</h1>
               <h1>{val.age}</h1>
            </div>
        ))}
         
        
         {post.map((val)=>(
            <div key={val.id}>
                 <p>{val.name}</p>
                <p>{val.email}</p>
              
             
            </div>
         ))}

         </> 
         ) : false }
                                                    
      
  </>
  

    
  )
}

export default Merge

    // 2 api merge karna data render karna  with show hide ke sath me //
