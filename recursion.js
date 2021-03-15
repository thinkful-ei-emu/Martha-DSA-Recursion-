const countingSheep = function(sheep) {
  if(sheep === 0){
    return 'All sheep jumped over the fence';
  }
  return sheep + 'Another sheep jump over the fence' + countingSheep(sheep-1);
};

//console.log(countingSheep(3));


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

const reverseString = function (string) {
  if(string === ''){
    return '';
  }
  let char = string[0];
  return reverseString(string.slice(1)) + char;
};

//console.log(reverseString('hello'));
//output 'olleh'

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


const fibonacci = function(num) {
  if(num === 1 || num === 2){
    return 1;
  }
  return(fibonacci(num-2) + fibonacci(num - 1));
};

//console.log(fibonacci(4));
//output 3

const factorial = function(num){
  if(num === 0) {
    return 1;
  }
  return num * factorial(num-1);
};

//console.log(factorial(5));
//output 120



const mazeFinder = function (maze) {

};

//console.log(mazeFinder(mySmallMaze));
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

//console.log(mazeAllFinder(mySmallMaze));


const anagrams = function(word){
  if(word.length === 0){
    return '';
  }
  let prefix = word[0];
  let permutations = 
    prefix + word[1] + word[2] + word[3];
  return permutations + ' ' + anagrams(word.slice(1));
};
//console.log(anagrams('east'));

/**
 * east 
 * 
 * e -  ast   ats   sat    sta    tas    tsa 
 * a -  est   ets   set    ste    tes    tse
 * 
 * word[0]  1, 2, 3 
 * word[1] 
 * word[2]
 * word[3]
 * 
 * slice letters to be prefix ---> do permutations 
 * 
 * do permutations???
 * 
 * done when length is 0 
 */



const organizationChart = function(obj){

};
//console.log(organizationChart(givenObj));
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
//25 => 11001 16+8+1
//0 => 0

//5%2 = 1 5/2 = 2 (floor)
//2%2 = 0 2/2 = 1
//1%2 = 1 1/2 = 0

// 2^2 2^1 2^0
//  4   2   1
//stop at 0