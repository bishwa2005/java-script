const students=['piyush','john','jane'];

// for(let i=0;i<students.length;i++){
//     console.log(students[i])
// }

// method 1
function print(n){
    console.log(n);
}

students.forEach(print)

// method 2
students.forEach((val)=> console.log(val))


// .map function
students.map((val)=>console.log(val))

// .map aur .forEach mein ek hi difference hai ki map ek nya array return karta hai
const new1=students.forEach((n)=>n);
console.log(new1);

const new2=students.map((n)=>n);
console.log(new2);



// .find method se wo har element pe jayega aur agr number present hua to 
// us no ko return kar dega 
const numbers=[1,2,3,4,5]
let check = numbers.find((val) => val == 4)
console.log(check);

const numbers1=[1,2,3,4,5]
let check1 = numbers1.find((val) => val == 40)
console.log(check1);


// .filter function specific elements ko filter out kar deta hai
const newA = numbers.filter((n)=> n%2==0)
console.log(newA)



// .slice method
let newArr=numbers.slice(1,4)
console.log(newArr)

// .splice remove elements from original array and print them in new array
let ne=numbers.splice(1,4);
console.log(ne);
console.log(numbers)