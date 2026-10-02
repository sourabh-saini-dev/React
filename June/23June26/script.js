  


//    seal method

//   let obj = {
//      name: "mukesh",
//      age: 45,
//      role: "student",

//   }

//      Object.seal(obj)

//      obj.name = "suresh"  //update

//      obj.city = "jaipur"  //  add
//      delete obj.role    //  delete 
//       console.log(obj);  // console krna






  // method


//   let obj = {
//      name: "mukesh",
//      age: 45,
//      role: "student",

//   }

//      Object.preventExtensions(obj)

//      obj.name = "suresh"  //update

//      obj.city = "jaipur"  //  add
//      delete obj.role    //  delete 
//       console.log(obj);  // console krna






//   let obj = {
//      name: "mukesh",
//      age: 45,
//      role: "student",

//   }

//      Object.preventExtensions(obj)

//      obj.name = "suresh"  //update

//      obj.city = "jaipur"  //  add
//      delete obj.role    //  delete 
//       console.log(obj);  // console krna
//       console.log(Object.isExtensible(obj))





// in operater jo ye btata hai ki value usme add hai ya nhe hai   agr  krti hai to true nhe to false return karega 


//   let obj = {
//      name: "mukesh",
//      age: 45,
//      role: "student",

//   }
//   console.log("role" in obj)    








  // object method

  







//   let obj = {
//     age: 45,
       //  name: "sourabh",
//     role: "student",
//      abc(){
//         console.log(this.name + "" + this.age);

//      }
//  }
 
//   obj.abc()











//   let obj = {
//     age: 45,
//     role: "student",
//      abc() => {
//         console.log(this.name + " " + this.age);

//      }
//  }
 
//   obj.abc()


      



     
       



         //this sari property ko use karta hai  
   let obj = {
      name: "sourabh",
      course: {
        name: "mern stack",
        age: 34,
          abc() {
            console.log(this.name);
          }
      }
   }

    obj.course.abc();






    //    let obj = {
    //     name: "sourabh",
    //     age: 43,
    //     abc(){
    //         return this.name + " " + this.age
    //     },
    //     mno() {
    //         console.log(this.abc());
    //     }
    //    }

    //     obj.mno();
































//     const students = [
//     {
//         id: 1,
//         name: "Rahul Sharma",
//         age: 22,
//         isActive: true,
//         address: {
//             city: "Delhi",
//             state: "Delhi"
//         },
//         skills: ["JavaScript", "React", "Node.js"],
//         courses: [
//             {
//                 courseId: 101,
//                 title: "ReactJS",
//                 duration: "3 Months",
//                 fee: 15000,
//                 completed: true
//             },
//             {
//                 courseId: 102,
//                 title: "NodeJS",
//                 duration: "2 Months",
//                 fee: 12000,
//                 completed: false
//             }
//         ],
//         payments: [
//             { amount: 10000, status: "Paid" },
//             { amount: 5000, status: "Pending" }
//         ]
//     },

//     {
//         id: 2,
//         name: "Priya Singh",
//         age: 24,
//         isActive: false,
//         address: {
//             city: "Mumbai",
//             state: "Maharashtra"
//         },
//         skills: ["HTML", "CSS", "JavaScript"],
//         courses: [
//             {
//                 courseId: 103,
//                 title: "Frontend Development",
//                 duration: "4 Months",
//                 fee: 20000,
//                 completed: true
//             }
//         ],
//         payments: [
//             { amount: 20000, status: "Paid" }
//         ]
//     },

//     {
//         id: 3,
//         name: "Amit Kumar",
//         age: 21,
//         isActive: true,
//         address: {
//             city: "Jaipur",
//             state: "Rajasthan"
//         },
//         skills: ["MongoDB", "Express", "Node.js"],
//         courses: [
//             {
//                 courseId: 104,
//                 title: "MERN Stack",
//                 duration: "6 Months",
//                 fee: 30000,
//                 completed: false
//             }
//         ],
//         payments: [
//             { amount: 15000, status: "Paid" },
//             { amount: 15000, status: "Pending" }
//         ]
//     },

//     {
//         id: 4,
//         name: "Sneha Verma",
//         age: 23,
//         isActive: true,
//         address: {
//             city: "Pune",
//             state: "Maharashtra"
//         },
//         skills: ["React", "Redux", "TypeScript"],
//         courses: [
//             {
//                 courseId: 105,
//                 title: "Advanced React",
//                 duration: "3 Months",
//                 fee: 18000,
//                 completed: true
//             }
//         ],
//         payments: [
//             { amount: 18000, status: "Paid" }
//         ]
//     }
// ];
       

//  let ans = students.map((val) => val.name)
//  console.log(ans)





//  let ans1 =  students.filter((val) => val.students)
//  console.log(ans1)




// let ans = students.filter((age)=> age>22)
// console.log(ans)



//  let ans = students.find((id) => id === 3)
//  console.log(ans)


//   let ans = students.every((val) => val.maharashtra)
//   console.log(ans)



//   let ans =  students.filter((val)=> val.jaipur)
//   console.log(ans)
 


    // let ans =  students.filter((val) =>  skills )