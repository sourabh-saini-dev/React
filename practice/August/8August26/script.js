    

      
       
        
         
        //   let str = ["mango" , "programing", "javascript.js"]
        //   let ans = 0
        //    for(let i = str.length-1; i>=0; i--){
        //         ans =  ans +str[i]


        //    }
        //       console.log(ans)




         
        //   let str =  " mango sourabh saini jaipur rajashthan ajmer";

        //   let ans = str.split("").filter((ch)=> "aeiou".includes(ch)).length
        //      console.log(ans);

          
        //   let str = 'sourabh saini'
        //     console.log( str.replace("sourabh", "kotputli" ));

            //  let arr = [ "s" , "g"]
            //   console.log(arr.join(""));
              


              let arr = [ 1,2, 0,3,0,4,3,2]
              let res = []

               for(let i = 0; i<arr.length;i++){
                if(arr[i] !== 0){
                    res.push(arr[i])
                }
                    }
                    for(let j = 0; j<arr.length; j++){
                if(arr[j] === 0){
                 res.push(arr[j])
            
                   }
               }
                console.log(res);
                
               