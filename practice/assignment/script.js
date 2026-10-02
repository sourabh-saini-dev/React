// //2   find the maximun array without using math.max()
// let arr = [12, 3, 54, 67, 89];

// let ans = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > ans) {
//     max = arr[i];
//   }
// }

// console.log(ans);



  
//3    convert an arry of string to uppercase using a array


//    let arr = ["sohan" , "mohan"]
//     let ans = arr.map((val) => val.toUpperCase())
//     console.log(ans);

// let arr = [10, 50, 20, 80, 30];

// let ans = arr.reduce((a, b) => a > b ? a : b);

// console.log(ans);
    

//4 how many times each element apperas in an array


//5

// let arr = [10, 20, -5, 30];

// let ans = arr.some(val => val < 0);

// console.log(ans);



//6      check if at least one number in an array are number

// let arr = [10, 20, 30, 40];

// let ans = arr.every(val => typeof val === "number");

// console.log(ans);


//7     find the first element greater than 50
   
// let arr = [10, 25, 55, 70];

// let ans = arr.find(val => val > 50);

// console.log(ans);


//8    convert a nested array into a single are numbers


//     let arr = [1, 2, [3, 4], [5, 6]];

// let ans = arr.flat();

// console.log(ans);



//9   reverse an array without mulating th original array


// let arr = [1, 2, 3, 4, 5];

// let ans = [...arr].reverse();

// console.log(ans);
// console.log(arr);


//10 find the index the last occurrence of a value


// let arr = [10, 20, 30, 20, 40];

// let ans = arr.lastIndexOf(20);

// console.log(ans);




  //medium level
// //1  reverse number
//   let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr.filter(val => val % 2 === 0);

// console.log(ans);



//2 multiply each element by 3
// let arr = [1, 2, 3, 4];

// let ans = arr.map(val => val * 3);

// console.log(ans);




//3 sum of all numbers
// let arr = [10, 20, 30, 40];

// let ans = arr.reduce((acc, val) => acc + val, 0);

// console.log(ans);




//4   remove false values
// let arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

// let ans = arr.filter(Boolean);

// console.log(ans);



//5  sort numbers in  ascending order


// let arr = [50, 10, 30, 20, 40];

// let ans = arr.sort((a, b) => a - b);

// console.log(ans);


//6 sort objects bya age


//7  unique values using filter()
// let arr = [1, 2, 2, 3, 4, 4, 5];

// let ans = arr.filter((val, index) =>
//   arr.indexOf(val) === index
// );

// console.log(ans);



//8find longest string
// let arr = ["html", "css", "javascript", "react"];

// let ans = arr.reduce((a, b) =>
//   a.length > b.length ? a : b
// );

// console.log(ans);



  // let arr = [12,34,56,78]
  // let ans = arr.lastIndexOf(56)
  // console.log(ans);
  
