// This file is used array practice questions 
let marks_class_12 = [78,39,49,28,true,"NOt present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) //wil be undefined because index 6 does not exits
console.log("The lengtth of marks_class_12 is",marks_class_12.length)
marks_class_12[6] = 100 //Adding a new value to the array
marks_class_12[0] = 189 //changing the value of an array
console.log (marks_class_12) 

// Array methods 
let num = 123;
let str = num.toString();
console.log(str);           // "123"
console.log(typeof str);    // "string"

        //num.concat
        let num1=[45,67,89,60,47]
        let num2=[35,8,6,4,9,0]
        let ar = num.concat(num1,num2)
        console.log(ar)
        