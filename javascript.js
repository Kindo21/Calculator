
let result;
let num1Array = [];
//displayInitial will be used by CE as well
function displayInitial(){
    let displayInitial = 0;
    document.getElementById("input").value = displayInitial;
}
displayInitial();
    //display = document.getElementById('input').display

function inputOne(){
    let one = "1";
    num1Array.push(one);
    document.getElementById("input").value = num1Array.reduce((previousVaue, 
        currentValue)=> previousVaue + currentValue);
        
}
function inputTwo(){
    /*One function for all buttons have an if stateent to determine what button
      was clicked and assign the value to not only the display, but a variable 
      need to figure out logic to allow multiple digit numbers will probably
      need to use array and reduce the array and concatenate the inputed number */

      /*Somehow send the input from the inputfield and then store that in a variable
        both num1 and num2 will be 0 from the start constantly update each   */
    
    /**push to add number to array and pop to remove last element from array */
    let one = "2";
    num1Array.push(one);
    document.getElementById("input").value = num1Array.reduce((previousVaue, 
        currentValue)=> previousVaue + currentValue);
    
}  

/** Need to add logic to take whats in the input field and set to first variable */
/**operators will have to use same function */
function operator() {
     let user1 = document.getElementById("input").value + " + "
     console.log(user1);
     num1Array = []
     return result = user1;
}

/**basically convert the logic I have now into an object and to do this
 * you could have the object be dynamic each key in the object represents 
 * the numArray that will be reduced and the final key represents the operator
 * you will be using you can access that object from the equals function and return
 * the final variable.
 */

let v = {


    n1 : 3,
    n2: 4,
    f: null
}

v.f = add(v.n1, v.n2);


console.log(v.f);

function Clear() {
    displayInitial();
    num1Array = []
}

function equal(){
    num1Array = []
    let user2 = document.getElementById("input").value
    console.log(user2);
    result =  Function(`'use strict'; return (${result} ${user2})`)();
    document.getElementById('input').value = result;
    console.log(result);
}



function add(num1, num2){
    let result =  num1 + num2
    return result 
    
}
function subract(num1, num2){ 
   let  result = num1 - num2
   return result 
}
function multiply(num1, num2){
   let result = num1 * num2
   return result 
}
function divide(num1, num2){
    let result = num1 / num2
    return result 
}


function operate(user1, user2) {
    
    console.log(`The addition of ${user1} and ${user2} = ` + add(user1, user2));
    console.log(`The subtraction of ${user1} and ${user2} = ` + subract(user1, user2));
    console.log(`The multiplicaiton of ${user1} and ${user2} = ` +  multiply(user1, user2));
    console.log(`The division of ${user1} and ${user2} = ` + divide(user1, user2));
}
 



















