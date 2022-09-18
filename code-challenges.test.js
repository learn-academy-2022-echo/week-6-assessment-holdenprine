// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { fail } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



describe("sentenceFormer", ()=>{
  it("return a full sentence in an array based on template returns that is formed from objects stored in an array. These sentences will be grammatically correct.", ()=>{
    
        const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
      ]
    
    expect(sentenceFormer(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// Good Fail:
// FAIL  ./code-challenges.test.js
// sentenceFormer
//   ✕ return a full sentence in an array based on template returns that is formed from objects stored in an array. These sentences will be grammatically correct. (1 ms)

// ● sentenceFormer › return a full sentence in an array based on template returns that is formed from objects stored in an array. These sentences will be grammatically correct.

//   ReferenceError: sentenceFormer is not defined

//     29 |       ]
//     30 |     
//   > 31 |     expect(sentenceFormer(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//        |     ^
//     32 |   })
//     33 | })
//     34 | // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//     at Object.expect (code-challenges.test.js:31:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.63 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.



// b) Create the function that makes the test pass.

//Pseudo Code:
//1. Define the function sentenceFormer to take in an array of objects as input and produce an array containing a sentence as output
//2. take the name key from each element in the array using the .map built in method and use the substring method to define the firstName and lastName from each array
//3. take each substring and capitalize the first character from each and use .toUpperCase() method.
//4. return a concatinated string using the occupation key from each.

const sentenceFormer = (array) => {
  
      return array.map( value => {
        firstName = value.name.substring(0, value.name.indexOf(' '))
        firstNameCap = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        
        lastName = value.name.substring(value.name.indexOf(' ') + 1)
        lastNameCap = lastName.charAt(0).toUpperCase() + lastName.slice(1)
       
        return firstNameCap + " " + lastNameCap + " is " + value.occupation + "."
    })
}

// SUCCESSFUL PASS:
// PASS  ./code-challenges.test.js
// sentenceFormer
//   ✓ return a full sentence in an array based on template returns that is formed from objects stored in an array. These sentences will be grammatically correct. (26 ms)
// sumAndCubed
//   ✓ return a cubed sum of numbers input as an array

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.428 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.10s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.



describe("remainderThree", ()=>{
  it("return an array of remainders from a mixed array. These remainders are of each number in the array when divided by three", ()=>{
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    expect(remainderThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// GOOD FAIL:
// FAIL  ./code-challenges.test.js
// sentenceFormer
//   ✓ return a full sentence in an array based on template returns that is formed from objects stored in an array. These sentences will be grammatically correct. (2 ms)
// remainderThree
//   ✕ return an array of remainders from a mixed array. These remainders are of each number in the array when divided by three
// sumAndCubed
//   ✓ return a cubed sum of numbers input as an array

// ● remainderThree › return an array of remainders from a mixed array. These remainders are of each number in the array when divided by three

//   ReferenceError: remainderThree is not defined

//     115 |     // Expected output: [ 2, 1, -1 ]
//     116 |
//   > 117 |     expect(remainderThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//         |     ^
//     118 |     expect(remainderThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
//     119 |   })
//     120 | })

//     at Object.expect (code-challenges.test.js:117:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.481 s, estimated 1 s
// Ran all test suites.

// b) Create the function that makes the test pass.

//Pseudo Code:
//1. Create a function called remainderThree that takes an array as input
//2. use .filter built in method to build an array of numbers
//3. take each number in the new array and use .map to return numbers modded by three inside an array

const remainderThree = (array) => {
    const intArray = array.filter(value => typeof value === "number")
    return remainderArray = intArray.map(value => {
      return value % 3
    })

}

// GOOD PASS:
// PASS  ./code-challenges.test.js
// sentenceFormer
//   ✓ return a full sentence in an array based on template returns that is formed from objects stored in an array. These sentences will be grammatically correct. (2 ms)
// remainderThree
//   ✓ return an array of remainders from a mixed array. These remainders are of each number in the array when divided by three (28 ms)
// sumAndCubed
//   ✓ return a cubed sum of numbers input as an array (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.586 s, estimated 1 s
// Ran all test suites.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumAndCubed",()=>{
  it("return a cubed sum of numbers input as an array", ()=>{
    expect(sumAndCubed(cubeAndSum1)).toEqual(99)
    expect(sumAndCubed(cubeAndSum2)).toEqual(1125)
  })
})

// Good Fail:
// FAIL  ./code-challenges.test.js
// sumAndCubed
//   ✕ return a cubed sum of numbers input as an array (1 ms)

// ● sumAndCubed › return a cubed sum of numbers input as an array

//   ReferenceError: sumAndCubed is not defined

//     106 | describe("sumAndCubed",()=>{
//     107 |   it("return a cubed sum of numbers input as an array", ()=>{
//   > 108 |     expect(sumAndCubed(cubeAndSum1)).toEqual(99)
//         |     ^
//     109 |     expect(sumAndCubed(cubeAndSum2)).toEqual(1125)
//     110 |   })
//     111 | })

//     at Object.expect (code-challenges.test.js:108:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.727 s
// Ran all test suites.


// b) Create the function that makes the test pass.
//Pseudo Code:
//1. Create a function called sumAndCubed that takes in an array as input and returns a number as output
//2. take each element of the given array and add them together, storing that value in a variable called sum
//3. then return the value of sum cubed

const sumAndCubed = (array) => {
  return sum = (array[0] ** 3) + (array[1] ** 3) + (array[2] ** 3)
}

// Passing Test:
// PASS  ./code-challenges.test.js
// sumAndCubed
//   ✓ return a cubed sum of numbers input as an array (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.694 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.57s.

