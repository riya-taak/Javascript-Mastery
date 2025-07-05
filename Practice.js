var a = 12;
console.log(a + " Riya");

// for loop

// while loop

// do while

// for of = []

let obj1 = {
    name: 'Riya',
    age: 20,
    roll_no: 18,
    married: false
}

let obj2 = {
    name: 'Riya',
    age: 20,
    gender: 'female',
}

const arr = [obj1, obj2];
for(let s of arr){
    listAllValues(s)
    console.log('-'.repeat(30))
}

// for in = {}

function listAllValues(myObj){   
    for(let ob in myObj){
        console.log(ob + ' ---> ' + myObj[ob]);
    }
}

// forEach 

// map | filter | reduce

// let a =Riya;
// let b =Priya;
// let c = `${a} and ${b} are sisters `
// console.log("c");

let str = "Rahul";
console.log(str.toUpperCase());
console.log(str.toLowerCase());