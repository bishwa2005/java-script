function add(){
    console.log(arguments[0]);

    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

add(1,2,3,4,5)