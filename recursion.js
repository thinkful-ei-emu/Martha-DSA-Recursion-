/**
 * 
    What is the input to the program?
    What is the output of the program?
    What is the input to each recursive call?
    What is the output of each recursive call?

 */

const countingSheep = function(sheep) {
  if(sheep === 0){
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(sheep, 'Another sheep jump over the fence');
  countingSheep(sheep-1);
};

//countingSheep(3);

//output Another sheep jump over the fence, Another sheep jump over the fence, Another sheep jump over the fence, All sheep jumped over the fence
//input is a interger (representing number of sheep)
//output is string Another sheep jumps over the fence
//input of recursive call is ingeter decrementing (sheep - 1)
//output of recerusive call console.logging the string Another sheep jumps over the fence, but the base case will return out during upward phase



const powerCalculator = function (base, exp) {
  if(exp < 0) {
    return 'exponent should be >=0';
  }
  if(exp === 0){
    return 1;
  }
  return base * powerCalculator(10, exp - 1);
};

//console.log(powerCalculator(10, 2));
//output 100 

//input is two interger (base and exponents)
//output is either a string or the integer equal to the base rasied to the exponent
//input of recursive call is base remaining constant and exponent decreasing by 1
//output of recerusive call is the base strung together with multiplication 


const reverseString = function (string) {
  if(string === ''){
    return '';
  }
  let char = string[0];
  return reverseString(string.slice(1)) + char;
};

//console.log(reverseString('hello'));
//output 'olleh'

//grab last letter, remove last letter...again and again


const triangularNumber = function(n) {
  if(n === 0){
    return 0; 
  }
  return n + triangularNumber(n-1);
};

//console.log(triangularNumber(7));
//output 28


const stringSplitter = function(str){
  if(str.length === 0){
    return '';
  }
  if(str[0] !== '/'){
    return str[0] + stringSplitter(str.slice(1));
  }
  return stringSplitter(str.slice(1));
};

//console.log(stringSplitter('02/20/2020'));
//output 02202020

/**
 * why does this not work??
 * 
 * const stringSplitter = function(str, sep){
  if(str.length === 0){
    return '';
  }
  if(str[0] !== sep){
    return str[0] + stringSplitter(str.slice(1));
  }
  return stringSplitter(str.slice(1));
};
console.log(stringSplitter('02/20/2020', '/'));
 */


const fibonacci = function(num) {
  if(num === 1 || num === 2){
    return 1;
  }
  return(fibonacci(num-2) + fibonacci(num - 1));
};

//console.log(fibonacci(4));
//output 1, 1, 2, 3, 5, 8, 13

//stop when array length is num?? when the sequence length is the same as the number passed in

//input   1   2   3     4            5              6                 7                    8
//output  1   1   2     3            5              8                 13                   21

//math    1   1  1+1    1+2          2+3            3+5               5+8                  8+13
//               1+1   1+1+1        1+1+1+2         1+1+1+2+3         1+1+1+2+3+5          1+1+1+2+3+5+8


const factorial = function(num){
  if(num === 0) {
    return 1;
  }
  return num * factorial(num-1);
};

console.log(factorial(5));
//output 120



const mazeFinder = function (maze) {

};

console.log(mazeFinder(mySmallMaze));
//possible output RRRDD

//right : staying in the same array but moving over one 
  //mySmallMaze[arr1[n+1]]

//left
  //mySmallMaze[arr1[n-1]]

//up
  //mySmallMaze[arr n-1[n]]

//down
  //mySmallMaze[arr n+1[n]]

//starting point mySmallMaze[0][0]

// move right....if * move down.... 

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//possible output RRDDLLDDRRRRRR

const mazeAllFinder = function (maze) {

};

console.log(mazeAllFinder(mySmallMaze));





const anagrams = function(word){

};
console.log(anagrams('east'));





const organizationChart = function(obj){

};
console.log(organizationChart(givenObj));
let givenObj;

const binaryRepresentation = function (int) {
  if(int === 0){
    return '';
  }
  const bin = int%2; 
  return binaryRepresentation(Math.floor(int/2)) + bin;
};

//console.log(binaryRepresentation(37));
//output 11
//25 => 11001
//0 => 0

//5%2 = 1 5/2 = 2 (floor)
//2%2 = 0 2/2 = 1
//1%2 = 1 1/2 = 0

//stop at 0