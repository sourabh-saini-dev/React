
let marks = 70;

switch (true) {
    

    case (marks >= 70 && marks < 90):
        console.log("A");
        break;

    case (marks >= 60 && marks < 70):
        console.log("B ");
        break;

    case (marks >= 50 && marks < 60):
        console.log("C");
        break;

    default:
        
        console.log("Fail");
}





// let num = 59687;
// let sum = 0;
// let last;

// while(num){
//     last = num%10;
//     sum = sum+last;
//   num = Math.floor(num/10);

// }
// console.log(sum);



//   let i = 1;
//   while(i<=11){
//     console.log(i);
//     i++;

//   }


// for(let i = 25; i <= 50; i++) {

//     if(i < 35 || i > 40) {
//         console.log(i);
//     }

// }




// let num = 345;
// let last;
// let sum = 0;
// let count = 0;
// while(num){
//     last = num%10;
//     sum = sum*10+last;
//     count++;
//    num = Math.floor(num/10);

// }
// console.log(count);







// function reverse(n){
//     let sum = 0;
//     let last ;
//     while(n){
//         last = n%10;
//         sum = sum*10+last;
//         n = Math.floor(n/10);
//     }
//    return sum;
// }
//  console.log(reverse(1234))



//  let age = 10;
//  let a = age>6? "you can marry": "you cannot marry";
//  console.log(a);

// let str = "hello world";
// console.log(str.slice(1,9));




let str="hello world";
console.log(str.replace("hello","ram"))