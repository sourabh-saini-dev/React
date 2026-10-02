   

   
   //   function abc (callback, a,b){
   //      console.log(a + b)
   //      callback()

   //   }

   //    abc(function mno(){

   //    },10,34)


       
    // promise ke liye 


      //  let p = new Promise((resolve, reject) =>{
      //    let a = true
      //    if(a){
      //       resolve("resolve")
      //    }else{
      //       reject("reject")
      //    }
      //  },)


      //  p.then((res) => console.log(res))
      //      .catch((err) => {
      //       console.log(err);
      //      })
      //       .finally(console.log("finally"))











       // promise ke statics methods 

       //  1 promise.resolve("success")     
        
          //  Promise.resolve("success").then(res => console.log(res))
    


       //  2   promise.reject

            //  Promise.reject("reject").catch(err => console.log(err));
             


             // 3. promise.all




            //  let p1 = Promise.resolve("1")
            //    let p2 = Promise.resolve("2")
            //      let p3 = Promise.resolve("3") // promise.reject karte he sara  galat ho jayega 



            //      Promise.all([p1,p2,p3]).then(res => console.log("res",res)).catch(err => console.log("err", err))




          //  4 promise.allsettled     //  esme  sare promise complete honge wo chahe reject ya resolve ho dono he aayenge




            //   let p1 = Promise.resolve("1")
            //    let p2 = Promise.reject("2")      // yha par reject b le sakte hai 
            //      let p3 = Promise.resolve("3") // promise.reject karte he sara  galat ho jayega 



            //      Promise.allSettled([p1,p2,p3]).then(res => console.log("res",res)).catch(err => console.log("err", err))




             //5 promise.race   //  jo promise pahle aayega wo return hoga wo reject ya resolve koi b ho sakta hai dono me se   esme single promise aayega  




               //  let p1 = Promise.resolve("1")
               // let p2 = Promise.reject("2")      
               //   let p3 = Promise.resolve("3") 



               //   Promise.race([p3,p2,p1]).then(res => console.log("res",res)).catch(err => console.log("err", err))




           // 6 promise.any    //   ye resolve ko search krne ki koshish karta hai    sare reject ho to all promise reject aggregatererror deta ha i or agr reject first me milta hai to wo first ko print kar dega



               // let p1 = Promise.resolve("1")
               // let p2 = Promise.reject("2")      
               //   let p3 = Promise.resolve("3") 



               //   Promise.any([p1,p2,p3]).then(res => console.log("res",res)).catch(err => console.log("err", err))
