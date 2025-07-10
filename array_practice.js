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
consloe.log (marks_class_12) 

// Array methods 
let num =[1,5,4,7,8]
let A = num.toString // B is now a string
console.log(b)
           
        // num.join  -> join all the array elements using a saprator 
        let n =num.join("_")
        console.log(n)

        //num.pop     ->remove last element from tha array
        let m= num.pop
        console.log(m)

        //num.push    -> add a new element at the end of array
        let p=num.push
        console.log(p)

        //num.shift  -> remove first element and return it
        let r= num.shift
        console.log(r)

        //num.unshift
        let u=num.unshift
        console.log(u)

        //num.delete
        let d= num.delete(1)
        console.log(d)