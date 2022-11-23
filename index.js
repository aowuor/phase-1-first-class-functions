function receivesAFunction(callback){
    callback();
}

function msg(){
    console.log(`Nice to meet you`);
}

receivesAFunction(msg);

function returnsANamedFunction(){
    return function greet(){console.log("Hi")};
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function(){"I am anonymous"};
}
returnsAnAnonymousFunction()