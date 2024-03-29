////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//THE SUM OF A RANGE PART 1 P.180

//SOLVED
//“Write a range function that takes two arguments, start and end, and 
//returns an array containing all the numbers from start up to (and including) end.
//modify your range function to take an optional third argument that indicates the “step” value 
//used when building the array. 
//If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
//The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
//Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].”

function range (start, end, step){
  let newArr = [];
  if (start === end) {return []}
  else if (!step) {
    for (let i = start; i <= end; i++){ 
    newArr.push(i)
  }}
  else if (step > 0) {
    for (let i = start; i <= end; i+= step){
    newArr.push(i)}
  }
  else if (step < 0) {
    for (let i = start; i >= end; i+= step){
    newArr.push(i)}
  }
  return newArr;
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//THE SUM OF A RANGE PART 2 P.180 (SEE ABOVE) 


//SOLVED
// “Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
//Run the example program and see whether it does indeed return 55.”

function sum(arr){
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    total +=arr[i];
  }
  return total;
}
let array1 = [1, 2, 3, 6, 9];
console.log(sum(array1))


//SOLVED
////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//REVERSING AN ARRAY PARTS 1 & 2 P181


//“For this exercise, write two functions, reverseArray and reverseArrayInPlace.
//The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
//Neither may use the standard reverse method.”


//SOLVED
//May NOT use the standard reverse method.”
function reverseArray(array) {//takes an array as argument  --//NEW ARRAY
let newArr = [];
for (let i = 0; i < array.length; i++){
  newArr.unshift(array[i])
}
  return newArr; //produces a new array that has the same elements in the inverse order.
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//SOLVED
//May NOT use the standard reverse method.”
function reverseArrayInPlace(array) {//RETURN THE ORIGINAL ARRAY - SO MAKE NEW ARR, THEN SET ORIGINAL TO NEW, THEN RETURN
  let newArr = [];
  for (let i = 0; i < array.length; i++){
    newArr.unshift(array[i])
  }
  for (let j = 0; j < newArr.length; j++){
    array.shift();
    array.push(newArr[j]);
  }
    return array; //produces a new array that has the same elements in the inverse order.
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//“Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
//EXAMPLE
/*
let list = {
    value: 1,
    rest: {
      value: 2, 
      rest: { 
        value: 3, 
        rest: null 
      } 
    }
  };
*/

//list is just an object that is a series of nodes
//rest property is a nest

//series of nested objectes that end in a null property


//After the initial attempt failed I was speculating that my
//new attempt would involve loops using arguments property, or destructuring, or both

//Alex ended up giving us this solution:
function arrayToList(array){
let rest = null;
for (let i = array.length - 1; i >= 0; i--){
rest = {value: array[i], rest: rest}
}
  return rest;
  }
console.log(arraytoList([1, 2, 3]))

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Also write a listToArray function that produces an array from a list. 

//obsolete starter function// function listToArray(list) {}
//take in the object and make an array
//this may help me with greenlight problem
//alex says recursion is the only practical way to do this one; a for loop would be too cumbersom
function listToArray(list, output = []) {
//base
  if (list.rest === null){
    output.push(list.value);
    return output
}
//recursion
output.push(list.value)

return listToArray(list.rest, output)
}

//alex says spend 20 minutes looking at this for a preview but he will demo it for us; he will check in with us on Monday for these
////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//“ takes an element and an object list and creates a new object list that 
//adds the element to the front of the input list”
//list is an object;
//rest is null at the end of the object's nesting

function prepend(value, list) {
  return {value, rest: list};
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//nth, which takes a list and a number and returns the element at the given position
// in the list (with zero referring to the first element) or undefined when there is no such element.
//If you haven’t already, also write a recursive version of nth.”
//alex says spend 20 minutes looking at this for a preview but he will demo it for us
function nth(list, index) {//remember it is all nested objects, so index is really not a valid way to think of it
if (index < 0) {return undefined}
  else if (index === 0){
  return list.value
}
return nth(list.rest, index - 1)
}
  //EXAMPLE OUTPUT
  //valie 10 //0
 // rest {
   // value 20//1
    //rest{
     // value 30//2
     // rest null
    //}
  //}nth(list, 2)==>30



////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//“Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with 
//the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
//To find out whether values should be compared directly (use the === operator for that) or have their properties compared, 
//you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. 
//But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
//The Object.keys function will be useful when you need to go over the properties of objects to compare them.”

function deepEqual(val1, val2) {
if (JSON.stringify(val1) === JSON.stringify(val2)) {return true}
 
  else {return false}

}//close functiob

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
