


// Question 1.
// const employees = [
//   {
//     id: 1,
//     name: "Rahul",
//     age: 25,
//     department: "IT",
//     salary: 50000,
//     city: "Delhi",
//     skills: ["React", "Node", "MongoDB"],
//     experience: 2,
//     active: true
//   },
//   {
//     id: 2,
//     name: "Amit",
//     age: 30,
//     department: "HR",
//     salary: 60000,
//     city: "Mumbai",
//     skills: ["Communication", "Recruitment"],
//     experience: 5,
//     active: false
//   },
//   {
//     id: 3,
//     name: "Neha",
//     age: 27,
//     department: "IT",
//     salary: 70000,
//     city: "Pune",
//     skills: ["Java", "Spring"],
//     experience: 4,
//     active: true
//   },
//   {
//     id: 4,
//     name: "Priya",
//     age: 22,
//     department: "Design",
//     salary: 45000,
//     city: "Delhi",
//     skills: ["Figma", "Photoshop"],
//     experience: 1,
//     active: true
//   },
//   {
//     id: 5,
//     name: "Rohit",
//     age: 35,
//     department: "Finance",
//     salary: 90000,
//     city: "Bangalore",
//     skills: ["Excel", "Accounting"],
//     experience: 10,
//     active: false
//   }
// ];


// 1.1 Increase salary by 10%.
// 1.2 Group employees by department.
// 1.3 Find average salary.
// 1.4 Find employees who know React.
// 1.5 Print employees from Delhi.

// Question 2. Create callback for multiplication.

// Question 3. API : https://jsonplaceholder.typicode.com/user

// 3.1 Fetch all users.
// 3.2 Print only names.
// 3.3 Print email addresses.
// 3.4 Find user by ID.

// Question 4. Convert array into object using id as key.

// Question 5. Create a Promise that resolves after 2 seconds.






//ans 1.1.

// let ans = employees.map((val) => {
//     return val.salary+(val.salary)*10/100
// })

// console.log(ans)



//ans 1.2.
// let ans =   employees.reduce((acc,val)=>{
//     if(acc[val.department]){
//         acc[val.department]
//     }
//     acc[val.department].push(val)
//     return acc
// })

// console.log(ans);




// ans 1.3

//   let ans = employees.reduce((acc,val)=> {
//     return acc+val,0
//     let sum = ans/employees.length
//   })
   
//    console.log(sum)



// 1.4  


// let ans= employees.filter((val) => {
//     return val.skills.includes("React")
// })
// console.log(ans);



// 1.5

//   let ans = employees.filter((val)=>{
//     return val.city==="delhi"
//   })
//    console.log(ans);
   





// ans 2

//    function multiply(callback, a,b){
//              let ans = a*b 
//              console.log(ans)
//              callback(ans)
//    }
//     function res(ans){
//         console.log(ans)

//     }

//     multiply(useCallback, 3,4)


       // ans 3

// 3.1
    //    .then((res)=> res.json())
    //    .then((date)=> {
    //     console.log(data)
    //    })

    //    .catch((err)=>  {
    //     console.log(err)
    //    })



    // ans 3.2




    // ans 4


    //  let ans = employees.reduce((acc,val)=>{
    //     acc[val.id] = val
    //     return acc
    //  },{})

    //  console.log(ans);
     




    // ans 5  

    //    let p = new Promise((resolve,reject)=>{
    //     setTimeout(() =>{
    //         resolve("resolved")
    //     },2000)
    //    })

    //     Promise.then((data)=> {
    //         console.log(data);
            
    //     })
              
