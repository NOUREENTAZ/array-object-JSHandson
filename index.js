let studentRecords = [{ name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'yaga', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 }
]


studentRecords.map((item, index) => {
    console.log(`${index} value is ${item.name}`);
})

// const ArrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ArrayNew.map((item, index) => {
//     console.log(`${index} value  is ${item}`);
// })

//Q1.
studentRecords.map((item) => {
    console.log(`${item.name}`.toUpperCase());
    //or
    console.log(item.name.toUpperCase());
})

//Q2.
studentRecords.map((item) => {

    if (item.marks > 50) {
        console.log(item);
    }

})

// studentRecords.map((item) => {

//     {
//         console.log(item.marks > 50 ? item : "");
//     }

// })

// studentRecords.map((item) => {
//     if (item.marks > 50) {
//         console.log(item.name, item.id, item.marks);
//     }
// })


// let student = studentRecords.filter((item) => {
//     return item.marks > 50
// })
// console.log(student)

//Q3

let st = studentRecords.filter((item) => {
    return item.marks > 50 && item.id > 120
})
console.log(st);


// studentRecords.map((item) => {
//     if (item.marks > 50 && item.id > 120) {
//         console.log(item.name, item.id, item.marks);
//     }
// })


// studentRecords.map((item) => {

//     {
//         console.log(item.marks > 50 && item.id > 120 ? item : "");
//     }

// })

//Q4
let sum = studentRecords.reduce((pre, cur) => {
    return pre += cur.marks;
}, 0)
console.log(sum)


//Q5
studentRecords.map((item) => {
    if (item.marks > 50) {
        console.log(item.name);
    }
})

//Q6


let q6 = studentRecords.filter((item) => {
    return (item.id > 120)
}).reduce((pre, cur) => {
    return pre += cur.marks
}, 0)
console.log(q6);


//Q7
let q7 = studentRecords.map(function(std) {
        if (std.marks < 50) {
            std.marks += 15;
        }
        return std;
    })
    .filter(std => std.marks > 50).reduce((pre, cur) =>
        pre + cur.marks, 0);

console.log(q7);

//Q8
// 1st type object creation
// const obj1 = { Name: 'Noureentaz', class: 10, marks: 200 }
// console.log(obj1);
//2nd type Object Creation
// const obj2 = new Object();
// obj2.name = 'Riyaz';
// obj2.class = 12;
// obj2.marks = 500;
// console.log('Name :' + obj2.name, 'class :' + obj2.class, 'marks :' + obj2.marks);
let std = [obj3 = { Name: 'Nazeerahmed', class: 'phd', marks: 800 },
    { Name: 'Shabana', class: 'msc', marks: 500 },
    { Name: 'Noureentaz', class: 'BCA', marks: 450 },
    { Name: 'Simran', class: 'BE', marks: 400 },
    { Name: 'Suzain', class: 'BSC', marks: 600 },
    { Name: 'Mohammadismail', class: 12, marks: 800 }
]
console.log(std);
