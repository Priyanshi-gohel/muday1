// Function with no argument
let msg1 = () => console.log("Hello");
msg1(); 

//Arrow function with one argument
let msg2 = x => console.log(x);
msg2("World"); 

//Arrow function with one argument
let add = (x, y) => x * y;
console.log(add(10, 20)); 

//Arrow function as an Expression
let age = 5;
let welcome = (age < 18) ?
() => console.log('Baby') :
() => console.log('Adult');
welcome(); 

//MultiLine Arrow Function
let sum = (a, b) => {
    let result = a + b;
    return result;
    }
    let result1 = sum(5,7);
    console.log(result1); 