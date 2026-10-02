
//1. Recursive functions   jo self ko call karta hai

// function printNumber(num){
//     if(num>10){
//         return
//     }
//     console.log(num);
//     printNumber(num + 1)
// }
// printNumber(1);
    


// }
// printNumber(1)



// function fac(num){

//     if(num == 0 || num == 1){
       
//         return 1;
//     }
//     result num *fac(num - 1);
// }
//  let result = fac(5);
//  console.log(result);




//default fun 



// function abc (a , b = 20){
//     console.log(a,b);
// }
// abc(10)



//* NumberMethor 
//number methor inbuild method hote hai  ye number par 

   
//  1. tostring()
//   let a = 10;
//   console.log(typeof a.toString());   ye string me convert kar deta hai 
  

//2. toFixed()      number ke baad jitme b digit chahiye utne likh sakte hai app
// let a = 10.2345;
// console.log(a.toFixed(3));



//3.toPrecision()    yap pure number ki length ko fix karta hai number or decimal number dono ko    (esme around method use b karna hai)

// let a = 10.201;
// console.log(a.toPrecision(10));




//4.parseInt()    strime me se number nikalta hai   start me char aata hai to nan aata hai

// console.log(parseInt("12.52"));
// console.log(parseInt("12"));
// console.log(parseInt("-12"));
// console.log(parseInt("12.52"));

// console.log(parseInt(12));
// console.log(parseInt("abc12"));
// console.log(parseInt("12abc"));


//5. parseFloat()

// console.log( parseFloat("12.34"));   
// console.log(parseFloat("12"));




    
//6. Number()

// console.log(Number("123"));
// console.log(Number(true));
// console.log(Number("false"));   // ye nan aayega q ki ye string hai number me convert nhe ho skata hai q ki character number me convert nhe hote hai bhai




//7. isInteger()      //YAH NUMBER DECIMAL TYPE KA HAI ESLIYE YE FALSE DIYA HAI AGE 12 HOTA HAI TO TRUE DETA YE PAR YHA PAR FALSE HE DEGA
// let a = 12.5;
// console.log( Number.isInteger(a));


//8. isInfiniteNumber()

// let a = 12.3;
// let b = Infinity
// console.log(Number.isFinite(a));
// console.log(Number.isFinite(b));



//9. isNaN()

console.log(  Number.isNaN(NaN));
console.log(Number.isNaN(10));     //yah number hota hai to nan nhe ho sakta hai 
console.log(Number.isNaN("10"/10));  // esme divide karta hai to 1 aata hai wo b number hota hai esliye false
console.log(Number.isNaN("abc"/10));  //abc ko divide nhe kar sakta hai to false




