/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {}; //1. Create a variable named animal and assign it to an empty object.
animal.species = "dog"; //2. Using dot notation give animal a property named species with a value of any animal species.
animal["name"] = "Sage"; //3. Using bracket notation give animal a property called name with a value of your animal`s name.
animal.noises = []; //4. Using either notation, give animal a property called noises with a value of empty array.
console.log(animal); //5. Print your animal Object to the console


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
let noises = []; //1. Create a variable named noises and assign it to an empty array


noises = ["growl"];//2. Using bracket notation give noises it's first element. A string representing a sound your animal might make.


noises.push("bark");//3. Using an array function add another noise to the end of noises.
 //4. Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 //5. Look through the functions until you find the one that will place an element at the begining of the array.


noises.unshift("yip");//6. Add an element to noises using this function.
noises.push("snore");//7. Using bracket syntax again, add another element to the end of noises. Make sure that the way you do this step would work no matter how many elements noises had. 
//In other words, don't hard code the position of the new element.
console.log(noises.length);//8. console.log the length of noises


console.log(noises[noises.length - 1]);//9. console.log the last element in noises again without hard coding the index.
console.log(noises); //10. console.log the whole array.



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises//1. Using bracket syntax, assign the noises property on animal to our new noises array.
animal.noises.push("howl"); //2. Using any syntax add another noise to the noises property on animal.
console.log(animal); //3. console.log animal.


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    Dot notation and bracket notation allow you to access properties on objects.

 * 2. What are the different ways of accessing elements on arrays?
 *  There are multiple ways to access elements in an array- some 
    of these methods include push, pop, slice, splice, shift, unshift. You can use
    length and index to identify the element positions you want to access.

 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

let animals = []; //1. Create a variable named animals and assign it to an empty array.
animals.push(animal); //2. push our animal that we created to animals. You should now see your first animal appear on your index.html page!
console.log(animals); //3. console.log animals
//3. What does it look like? //Animals is now an array containing an object animal in index position 0.

var duck = { //4. Create a variable called duck object with following pre-assigned key/values
   species: 'duck', 
   name: 'Jerome', 
   noises: ['quack', 'honk', 'sneeze', 'woosh'] 
   };

animals.push(duck); //5. push duck to animals
console.log(animals); //6. console.log animals. What does it look like?
var rattlesnake = {//7. Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
   species: "snake",
   name: "Ssssam",
   noises: ["hiss", "rattle"]
};
var parrot = {
   species: "bird",
   name: "Polly",
   noises: ["Polly", "Pretty bird!"]
};

animals.push(parrot);
animals.push(rattlesnake);//7. Add each one of them to `animals.

console.log(animals);
console.log(animals.length);//8. console.log animals, and, console.log the length of animals. Is everything looking right?


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//1. If each name from friends were to become fully fleshed out objects, I'd make friends itself be an array of each respective object. 
//2. If it will never be more than just names, an array of strings would be fine. 
var friends = []; //3. Create a variable called `friends` and assign it to the data structure that you chose.

//4. Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandom(array){//5. Write a function called `getRandom` that takes our `animals` array
   let num = array.length
   return Math.floor(Math.random() * num) //returns  a random `index` of the input array, using `Math.random`
   }   
   console.log(animals[getRandom(animals)].name);
   friends.push(animals[getRandom(animals)]["name"]) //6. Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
   console.log(friends); //7. `console.log` `friends`.
   animals[1]["friends"] = friends;//8. Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
   console.log(animals[1]["friends"]);//9. `console.log` your work.
   
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}