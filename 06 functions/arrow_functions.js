// normal method

// function sayHello(){
//     console.log("hello")
// }

// arrow method
const sayHello=() =>{
    console.log("hello");
}

sayHello();

// passing arguments
const add=(a,b)=>{
    console.log(a+b);
}

add(1,2);

// another method one liner
const add1=(a,b)=> a+b

console.log(add1(1,4))


// arguments can't be defined in arrow function
const addN=(...nums)=>{
    console.log(nums);
}
addN(1,2,5,7,8,9);


// hoisting
// normal functions mein apn phele call karke 
// baad mein bhi function ko define karskte leking arrow functions mein nhi


// "this" keyword
const obj={
    value: 20,
    myFunc : function(){
        console.log("value is " + this.value);
    },
};

obj.myFunc(120);