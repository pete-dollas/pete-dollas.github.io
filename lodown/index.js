'use strict';

const { extendWith } = require("lodash");

// YOU KNOW WHAT TO DO //
//every function created in underpants needs to have documentation made for it
//below is  an example of documentation for a function called each

//STEP BY STEP DIRECTIONS
//1- copy the completed function from underpants

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}

_.identity = function(value) {
    return value;
}

//2. turn it into a declaration and delete all the rest
function identity(value){
    return value;
}

//3. use /** to start a code block, and then give a sentence or two to explain what this function does

 * identity: Designed to take in a value and return it unchanged
 *
//4. copy params and populate them based on the parameters

//5. the module export statement is module.exports.functionname = functionname
*/

//FINISHED EXAMPLE
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array|Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
*/
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


//1 SOLVED
/**
 * identity: Designed to take any value as an argument and return that value unchanged. 
 * 
 * @param {value} value: any value to be returned
 * @return {Any}: Function returns the input value unchanged, acting as an identity function.
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

//2 SOLVED
/**
 * typeof: Designed to determine and return the specific type of any given value, including arrays and null. It uses various conditional checks to identify the type of the input value and returns a corresponding string representing the detected data type.
 *
 *  @param {value} value: any value to be returned
 * @return {String}: Function returns a string indicating the data type of the input value.
 */
 function typeOf (value) {
    if (typeof value  === "string") {return "string"}
    else if (typeof value === "object" && value instanceof Array === true) {return "array"}
    else if (value === null) {return "null"}
    else if (typeof value  === "object") {return "object"}
    else if (typeof value  === "undefined") {return "undefined"}
    else if (typeof value  === "number") {return "number"}
    else if (typeof value  === "boolean") {return "boolean"}
    else if (typeof value  === "function") {return "function"}
 }
 module.exports.typeOf = typeOf;

 //3 SOLVED
 /**
  * first: Designed to return the first n items in an array, else just the first element or empty array if invalid arguments are passed.
  * 
  * @param {Array} array: an array to be passed; if no array is passed it will return []
  * @param {number} number: a positive number to be passed
  * 
ChatGPT
@return {Array}: Function returns an array containing the first num elements from the input array. 
If array is negative or not an array, it returns an empty array. 
If num is greater than the length of the array, it returns the entire array. 
If num is not provided or not a number, it returns the first element of the array.
  * 
  */
 function first (array, num) {
    let output = [];
        if (typeof array === "object" && array instanceof Array === true) {
            let number = num; 
            if (num < 0) {return []}
            if (num > array.length) {number = array.length}
            else if (num === "" || typeof num !== "number") {return array[0]}
            for (let i = 0; i < number; i++) {
                output.push(array[i])}
            return output;} 
        else {return []}
    }
    module.exports.first = first;

//4 SOLVED
/**
 * last: Designed to return the last n items in an array, else just the last element or empty array if invalid arguments are passed.
 * 
 * @param {Array} array: an array to be passed; if no array is passed it will return []
 * @param {Number} number: a positive number to be passed
 * @return {Array}: Function returns an array containing the last number elements from the input array. 
 * If array is negative or is not an array, it returns an empty array. 
 * If number is greater than the length of the array, it returns the entire array. 
 * If number is not provided or not a number, it returns the last element of the array.
 */
function last(array, number) {
    if (typeof array === "object" && array instanceof Array !== true) {
        return []
    }
    if (number === "" || typeof number !== "number") {
        return array[array.length - 1]
    }
    if (number < 0) {return []}
    if (number > array.length) {return array}
    let output = [];
    let counter = number
    while (counter > 0)  {
    for (let i = [array.length - 1]; i > 0; i--) {
        output.unshift(array[i]);
        counter --;
    }}
    return output;
}
module.exports.last = last;

//5 SOLVED
/**
 * indexOf: Designed to return the index of <array> that is the first occurrance of <value>, else -1 if not found
 * 
 * @param {Array} array: an array to be passed
 * @param {Value} value: any value to be passed
 * @return {Number}: Function returns the index of the first occurrence of the value in the input array. 
 * If the value is not found in the array, it returns -1.
 */
function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value) {return i}
    }
    return -1
}
module.exports.indexOf = indexOf;

//6 SOLVED
/**
 * contains: Designed to return true if <array> contains <value>
 * 
 * @param {Array} array: an array to be passed
 * @param {Value} value: any value to be passed
 * @return {Boolean}: Function returns true if the input array contains the value, otherwise, it returns false.
 */
function contains(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value) return true }
    
    return false;
}
module.exports.contains = contains;

//7 SOLVED
/**
 * each: Designed to call a function once for each element if using an array, or property if using an object.
 * 
 * @param {Array|Object} collection: a collection to be passed; can be an array or an object
 * @param {Function} func: a function to be passed and called on each element of an array
 * 
 */
function each(collection, func){
    if (collection instanceof Array === true) {
        for (let i = 0; i < collection.length; i++) {
            funct(collection[i], i, collection)
        }
    }
    else if (typeof collection === "object") {
        for (let entry in collection) {
            funct(collection[entry], entry, collection)
        }
    }
}
module.exports.each = each

//8 SOLVED
/**
 * unique: Designed to return a new array of all elements from input array with duplicates removed
 * * @param {Array} array: an array to be passed
 * @return {Array}: Function returns a new array containing only unique elements from the input array. 
 */
function each(array){
    let output = [];
    for (let i = 0; i < array.length; i++){
        if (_.indexOf(output, array[i]) === -1) {
            output.push(array[i])
        }
    }
    return output;
}
module.exports.unique = unique;

//9 SOLVED
/**
 * filter: Designed to apply a function to an array and return all true values as an array
 * @param {Array} array: an array to be passed
 * @param {Function} func: a function to be passed and called on each element of an array
 * @return {Array}: Function returns a new array containing elements from the input array for which the func function returns true.
 */
function filter(array, func){
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            output.push(array[i])
        }
    }
    return output;
    }
module.exports.filter = filter

//10 SOLVED
/**
 * reject: Designed to apply a function to an array and return all false values
 * @param {Array} array: an array to be passed
 * @param {Function} func: a function to be passed and called on each element of an array
 * @return {Array}: Function returns a new array containing elements from the input array for which the func function returns false.
 */
function reject(array, func){
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            output.push(array[i])
        }
    }
    return output;
}
module.exports.reject = reject

//11 SOLVED
/**
 * partition: It returns an array of nested arrays. One nested array is all of the values from the input array that return true when passed into the callback; the other array is all of the values from the input array that return false when passed into the callback.
 * @param {Array} array: an array to be passed
 * @param {Function} func: a function to be passed and called on each element of an array
 * @return {Array}: Function returns a new array containing two sub-arrays: the first sub-array contains elements from the input array for which the func function returns true, and the second sub-array contains elements for which the func function returns false.
 * 
 */
function partition(array, func){
    let output = [[], []];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) == true) {
            output[0].push(array[i])
        }
        if (func(array[i], i, array) == false) {
            output[1].push(array[i])
        }
    }
    return output;
}
module.exports.partition = partition

//12 SOLVED
/**
 * map: Designed to call a function on each element in an array or object and return the values
 * @param {Array|Object} collection: a collection to be passed; can be an array or an object
 * @param {Function} func: a function to be passed and called on each element in the object
 * @return {Array}: Function returns an array containing the results of applying the func function to each element in the input collection. 
 */
function map(collection, func){
    let output = [];
    if (collection instanceof Array === true) {
        for (let i = 0; i  < collection.length; i++){
            output.push(func(collection[i], i, collection))
        }
    }
    if (typeof collection === "object" && collection instanceof Array === false) {
        for (let key in collection){
            output.push(func(collection[key], key, collection))
        }
    }
    return output;
}
module.exports.map = map

//13 SOLVED
/**
 * pluck: Designed to parse an <array> of nested objects and return an array of all values associated with a key of <property>
 * @param {Array} array: an array of nested objects to be passed
 * @param {Value} property: a key value be passed in as a string
 * @return {Array}: Function returns an array containing the values of the specified property from each object in the input array. 
 */
function pluck(array, property){
    let output = [];
    for (let obj of array){
        output.push(obj[property])
    }
    return _.map(output, _.identity);
}

//14 SOLVED
/**
 * every: Designed to parse each element in an array/object and return whether all values are true or false (when a function is passed) or truthy or falsy (when no function parameter is passed)
 * @param {Array|Object} collection: a collection to be passed; can be an array or an object
 * @param {Function} func: a function to be passed and called on each element in the object; 
 * if no function entered, return will refer to truthy or falsy
 * @return {Boolean}: Function returns a boolean value indicating whether all elements in the collection satisfy the condition specified by the func function. 
*/
function every(collection, func) {
    if (typeof collection === "object" && collection instanceof Array === true) {
       for (let i = 0; i < collection.length; i++){
           if (func === "" || !func){
               if (!collection[i]){
                   return false
               }
           }
           else if (func(collection[i], i, collection) === false) {
               return false
           }
       }
    }
    else if (typeof collection === "object" && collection instanceof Array === false) {
       for (let key in collection) {
           if (func === "" || !func){
               if (!collection[key]) {
                   return false
               }
           }
           else if (func(collection[key], key, collection) === false) {
               return false
           }
       }
    }
    return true;
}
module.exports.every = every

//15 SOLVED
/**
 * some: Designed to determine if at least one element in a collection satisfies a given condition.
 * @param {Array|Object} collection: a collection to be passed; can be an array or an object
 * @param {Function} func: a function to be passed and called on each element in the object; if no function entered, return will refer to truthy or falsy
 * @return {Boolean}: Function returns a boolean value indicating whether any element in the collection satisfies the condition specified by the func function. 
*/
function some(collection, func) { 
    if (collection instanceof Array) { // for arrays
      if (func === undefined) {
        for (let h = 0; h < collection.length; h++) {
          if (collection[h] == true) {
            return true;
          }
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          if (func(collection[i], i, collection) === true) {
            return true;
          }
        }
      }
    }
    else if (typeof collection === "object") { // for objects
      if (func === undefined) {
        for (let key in collection) {
          if (collection[key] == true) {
            return true;
          }
        }
      } else {
        for (let key in collection) {
          if (func(collection[key], key, collection) === true) {
            return true;
          }
        }
      }
    }  
    return false;
  };
module.exports.some = some

//16
/**
 * reduce: Designed to reduce an array into a single value by applying a function to each element.
 *
 * @param {Array} array - Array to be passed
 * @param {Function} func - function to be passed on each element in array
 * @param {value} seed - value to be passed
 * @return {Any}: Function returns the result of reducing the input array using the provided function func. The data type of the return value depends on the data types of the elements in the array and the implementation of the func function.
 */
function reduce(array, func, seed){
    let previous = ""

    if (seed === undefined) {
      previous = array[0];
      for (let i = 1; i < array.length; i++) {
        previous = func(previous, array[i], i);
      }
    } else {
      previous = seed;
      for (let i = 0; i < array.length; i++) {
        previous = func(previous, array[i], i);
      }
    }
    return previous;
  };
module.exports.reduce = reduce


//17 SOLVED
/**
 * extend: Designed to parse an object; for any number of other objects passed, any new elements will be copied to the original object
 * @param {Object} obj1: an object to be passed
 * @param {Object} obj2: an additional object to be passed
 * @return {String}: Function returns a string indicating the data type of the input value.
 */
function extend(obj1, obj2){
    //for in on obj2, if it is not in obj1, set X = Y
    for (let i = 1; i < arguments.length; i++){
        for (let key in arguments[i]){
            if (!obj1.hasOwnProperty(key)){
                obj1[key] = arguments[i][key]
            }
            if (!obj1.hasOwnProperty(obj2[key])){
                obj1[key] = arguments[i][key]
            }
        }
    }
    return obj1;
}
module.exports.extend = extend