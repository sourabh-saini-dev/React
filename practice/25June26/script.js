const { log } = require("node:console");


const students = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 22,
        isActive: true,
        address: {
            city: "Delhi",
            state: "Delhi"
        },
        skills: ["JavaScript", "React", "Node.js"],
        courses: [
            {
                courseId: 101,
                title: "ReactJS",
                duration: "3 Months",
                fee: 15000,
                completed: true
            },
            {
                courseId: 102,
                title: "NodeJS",
                duration: "2 Months",
                fee: 12000,
                completed: false
            }
        ],
        payments: [
            { amount: 10000, status: "Paid" },
            { amount: 5000, status: "Pending" }
        ]
    },

    {
        id: 2,
        name: "Priya Singh",
        age: 24,
        isActive: false,
        address: {
            city: "Mumbai",
            state: "Maharashtra"
        },
        skills: ["HTML", "CSS", "JavaScript"],
        courses: [
            {
                courseId: 103,
                title: "Frontend Development",
                duration: "4 Months",
                fee: 20000,
                completed: true
            }
        ],
        payments: [
            { amount: 20000, status: "Paid" }
        ]
    },

    {
        id: 3,
        name: "Amit Kumar",
        age: 21,
        isActive: true,
        address: {
            city: "Jaipur",
            state: "Rajasthan"
        },
        skills: ["MongoDB", "Express", "Node.js"],
        courses: [
            {
                courseId: 104,
                title: "MERN Stack",
                duration: "6 Months",
                fee: 30000,
                completed: false
            }
        ],
        payments: [
            { amount: 15000, status: "Paid" },
            { amount: 15000, status: "Pending" }
        ]
    },

    {
        id: 4,
        name: "Sneha Verma",
        age: 23,
        isActive: true,
        address: {
            city: "Pune",
            state: "Maharashtra"
        },
        skills: ["React", "Redux", "TypeScript"],
        courses: [
            {
                courseId: 105,
                title: "Advanced React",
                duration: "3 Months",
                fee: 18000,
                completed: true
            }
        ],
        payments: [
            { amount: 18000, status: "Paid" }
        ]
    }
];

// 1. Get all student names.

    // let ans =  students.map((val) =>{
    //     return val.name
    // })
    
    // console.log(ans)

// 2. Get all active students.
        // let ans = students.filter((students) => {
        //     return students.isActive;
        // })
        // console.log(ans);
 
        
       

// 3. Get students whose age is greater than 22.
     let ans = students.filter((students) => students.age > 22)
              .map(student => student.age)
                
     console.log(JSON.stringify(ans))

// 4. Find the student whose id is 3.

// 5. Get all students from Maharashtra.

// 6. Get all students from Jaipur.

// 7. Get total number of students.

// 8. Check if any student is inactive.

// 9. Check if all students are active.

// 10. Get names of all active students.

// 11. Get all skills from all students.

// 12. Get unique skills.

// 13. Find students who know React.

// 14. Find students who know Node.js.

// 15. Find students having more than 2 skills.

// 16. Add "NextJS" skill to Rahul Sharma.

// 17. Remove "CSS" skill from Priya Singh.

// 18. Sort students by number of skills.

// 19. Get all course titles.

// 20. Get all completed courses.

// 21. Get all incomplete courses.

// 22. Find students enrolled in MERN Stack.

// 23. Calculate total course fees of all students.

// 24. Get students whose course fee is greater than 18000.

// 25. Find the most expensive course.

// 26. Count completed courses.

// 27. Count incomplete courses.

// 28. Calculate total amount paid by all students.

// 29. Calculate total pending amount.

// 30. Get students having pending payments.

// 31. Find students who paid full fees.

// 32. Find students whose payment is still pending.

// 33. Calculate total revenue collected.

// 34. Calculate total revenue pending.
