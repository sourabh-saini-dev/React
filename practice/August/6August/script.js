


    // let arr = ["sourahkumarsaini"]
    // let ans = arr.map((val)=> val+"@gmail.com")
    // console.log(ans);


    //   let arr = [45,65,100]
    //   let ans = arr.reduce((acc,val)=> {
    //     return acc+val
    //   },0)
    //   console.log(ans);


    //  let arr = [ 2,2,3,4,2,5,6]

    //  let ans = arr.filter((val)=>{
    //     return  arr.indexOf(val)===arr.lastIndexOf(val)
    //  })
    //   console.log(ans);

    //   let arr = [2,2,3,4,2,5,6]

    //    for(let i = 0; i<arr.length; i++){
    //      let count = 0;
    //       for( let j = 0; j<arr.length; j++){
    //          if(arr[i] === arr[j]){
    //              count++
    //          }
    //       }
    //       if(count==1){
    //         console.log(arr[i]);
            
    //       }
    //    }
      

      //  let arr = [4,5,0,8,0,8,0,6]
      //  let res = []
      //   for(let i = 0; i<arr.length; i++){
      //        if(arr[i]!==0){
      //           res.push(arr[i])

      //        }
        
      //        }
      //        for(let j = 0; j<arr.length; j++){
      //            if(arr[j]===0){
      //               res.push(arr[j])

      //            }
      //        }
      //         console.log(res);
              
        
      

      //  let str = "my name is sourabh saini"
      //   let ans="";
      //    for(let i = str.length-1; i>=0; i--){
      //     ans = ans+str[i]

      //    }
      //    console.log(ans)
           

      // function palindrame(str){
      //    let rev = "";
      //   for(let i =  str.length-1; i>=0; i--){
         
      //     rev = rev+str[i]
      //   }
      //   if(str === rev){
      //    return "pallindrame"
      //   }else{
      //      return "not palindrame"
      //   }

      // }
      //   console.log(palindrame("madam"));



      //  let str = "my name is sourabh saini "
          
      //  let ans = str.split(" ").map((val)=>val.charAt(0).toUpperCase()+val.slice(1)).join("");
      //    console.log(ans);




       let str = "my name is sourabh saini" 

        let ans = str.split("").filter((ch)=> "a,e,i,o,u".includes(ch)  ).length
           
         console.log(ans);
         
         
        

      
    