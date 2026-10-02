  


    //  function outer(){
    //      let a = 10
    //      return function inner(){
    //         console.log(a)
    //      }
    //  }






    //  let result = outer()
    //   result()




// lexical scope     eska type lexical he hota hai 

    //   function outer(){
    //      let a = 10
    //      console.log("outer",a)
    //      return function inner(){
    //         console.log("inner", a)
    //         a++;
    //      }
    //  }


    //  let result = outer()    // outer    
    //   result() // inner function 
    //   result()
    //   result()
       






     // promise chainning


        // let p = Promise.resolve("10")
        //  p.then(res1 => res1*2)
        //  .then(res2 => res2 + 5)
        //  .then(res3 =>  console.log(res3))    
        //  .catch(err => console.log(err))
       





        //   async await           ( promise  he return karta hai ye wala b)
                   


//       async function abc(){
//          return "hello"
//       }
//        let a = abc()
//        console.log(a)
//    a.then(res => console.log(res))
  



      // => function se 
        

        //    let result = async() =>{
        //     return "hello"

        //    }
        //    let a = result()
        //    console.log(a)




        // await   (eska use async ke under use hota hai)

          //  function fetchData(){
          //  return new Promise(resolve => {
          //    resolve("data")
          //  })
          //  }
          //   fetchData().then((res)=> {
          //       console.log(res)
          //   })



          //  async function abc(){
          //   console.log("start")
          //   let result = await fetchData()
          //   console.log(result)
          //   console.log("end")
          //  }
          //  abc()




          // fetch api call karna with async await

            //   fectch("https:// jsonplaceholder.typicode.com/users")
               
            //   .then(res => res.json())
            //   .then(data => console.log(data))
            //   .catch(err => console.log(err))


     

            //  async function fetchData(){
            //     let result = await fetch("https://jsonplaceholder.typicode.com/users")
            //      let response = await result.json()
            //      console.log(response)
            //  }
            //   fetchData()



           
















            // async function abc(){
            //   try {
            //     throw new Error("error")
            //   }catch (err){
            //     console.log(err.message)
            //   }
            // }
            // abc()