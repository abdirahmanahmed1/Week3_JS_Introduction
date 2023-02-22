// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
    id: 0,
    name: "Example",
    email: "examples@you.edu",
    gender: "F",
  }
  
  // Write your intern objects here:
  const Mitzi ={
    id : 1 ,
    name : "mitzii" ,
    email : "mitzi@gmail.com",
    gender : "Female",

  }
  const kennan ={
    id : 2 ,
    name : "kennan",
    email : " kdiben1@tinypic.com",
    gender : "Male",
    spk:function(){
      return 'Hello My Name is kennan';
    }
  } 
  const Keven ={
    id : 3 ,
    name : " Keven",
    email : "kmummery2@wikimedia.org",
    gender : "Male",
  } 
  const Gannie ={
    id : 4 ,
    name : "Gannie",
    email : "gmartinson3@illinois.edu",
    gender : "Male",
  } 
  const Antonietta ={
    id : 5 ,
    name : "Antonietta",
    email : "adaine5@samsung.com",
    gender : "Female",
    multiplynumbers:function(num1,num2){
      return num1 * num2;
    }
  } 
 
  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  console.log('mitzis name is ' + Mitzi.name);
  // Kennan's ID
  console.log("kennan's name is " + kennan.id);
  // Keven's email
  console.log("keven's email is " + Keven.email);
  // Gannie's name
  console.log("Gannie's name is " + Gannie.name);
  // Antonietta's Gender
  console.log("Antonietta's gender is " + Antonietta.gender);
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
  console.log(kennan.spk())
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));
  console.log(Antonietta.multiplynumbers(5,6));
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  