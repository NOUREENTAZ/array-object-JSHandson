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

studentRecords.map((item) => {

    {
        console.log(item.marks > 50 ? item : "");
    }

})