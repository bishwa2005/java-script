// a function that takes another function as argument is called higher order function

function add(a,b,cb){
    const result = a+b;
    cb(result);
}

add(2,3,function(val){
    console.log(val)
})

// here cb -> callback
// callback hi value ko store karta hai aur next function mein pass 
// karne mein help karta hai  

// ab apn ek call back mein function ko bhi kar sakte
function ad(a,b,cb){
    const result = a+b;
    cb(result);

    return ()=> console.log(result);
}

let res=ad(2,4,()=>{})
res();