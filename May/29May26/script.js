
//function expression code

// let a = function ab(a,b){
//     console.log(a+b)
// }

// a(10,20)



// setTimeout(function(){
//     console.log("hello")
// },0)

//NOte for Arrow Function
//arrow funtion this bine nhe hota hai yah modern js me use hota hai//


// let a = (a) => {
//     console.log("hello");
    
// }
// a(10)


//agr single argument bhej rhe hai or paranthesic ki jarurat nhe hai

// let a = (b,c) => b*c
// console.log(a(10,20))


//emidatly inwoke function
// (function (){
// console.log("hello")
// })()


//6 callback function
  // esa fun jo dusre fun me pass ho


function task1(abc, x , y){// yaha par task2 b fun task1 me add ho gya hai or x,y parameter pass kiye ha i
    console.log(abc, x, y);
     abc(x,y)

}


function task2(a, b){          // yha par taske 2 me a b  value lekar unme taske 1 ki value daal rhe hai//
    console.log(a + b)
}

task1(task2,10,20)  // task2 ko fun task1 me all kia to task2 call fun ho gya jo task1 me upr addd ho gya
