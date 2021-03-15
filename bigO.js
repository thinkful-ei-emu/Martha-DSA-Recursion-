function sum(array) {
  let sum = 0, ticks=1;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    ticks++;
  }
  return {result: sum, ticks};
}

// console.log(sum([1,2,3]));
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));

//CONSTANT
function getRandomItem(array) {
  let sum = 0, ticks = 0;
  // Get a random number and access that element in the array
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;
  return {
    result: item,
    ticks: ticks
  };
}

// console.log(getRandomItem([1,2,3]));
// console.log(getRandomItem ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));

//LOGARITHMIC
function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0,
     because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
    ticks++;
    return 0;
  }

  let lowIndex = 0, highIndex = arr.length;
  ticks++;

  while (highIndex > lowIndex) {
    // Find midpoint
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    ticks++;
    /* If `midIndex` element is greater than `n`, that means all elements
         to the right of `midIndex` are also greater than `n`, so
         we only need to focus on elements to the left of `midIndex`.
         We set `highIndex` to the current value of `midIndex` so next time
         through the loop, we'll only look at the left half */
    if (arr[midIndex] >= n) {
      highIndex = midIndex;
      ticks++;
    }

    /* If the element to the right of `midIndex` is less than `n`, then we
         know that we need to check the items to the right of `midIndex`, so
         we set `lowIndex` to the current value of `midIndex`, so that next
         time through the loop we only look at the right side */
    else if (arr[midIndex + 1] < n) {
      lowIndex = midIndex;
      ticks++;
    }

    /* Otherwise, if the element to the right of `midIndex` is greater
         than or equal to `n`, we know that the item at `midIndex` is the last
         item that's less than `n`, so we return `midIndex +  1` to get the total
         number of items that are less than `n` */
    else {
      ticks++;
      return {
        result: midIndex + 1,
        ticks: ticks
      };
    }
  }
}

// console.log(howManyLessThanNitems([1,2,3], 2));
// console.log(howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 ));


//LINEAR
function findMin(array){
  let min = array[0], ticks = 1;
  for (let i = 1; i < array.length; i++) {
    ticks++;
    if (array[i] < min) {
      ticks++;
      min = numArray[i];
    }
  }
  return {
    result: min,
    ticks: ticks
  };
}

// console.log(findMin([1,2,3]));
// console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));


//POLYNOMIAL
function hasDuplicates(array) {
  let ticks = 0, result = false;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    for (let j = 0; j < array.length; j++) {
      ticks++;
      if (array[i] == array[j] && i != j) {
        ticks++;
        result = true;
      }
    }
  }
  return {
    result: result,
    ticks: ticks
  };
}

// console.log(hasDuplicates([1, 2, 2]));
// console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
// console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99]));


//EXPONENTIAL
function countTriangle(layers) {
  let ticks = 1;
  let count = 0; // the number of dots we've counted so far
  let layer = 0; // the current layer we're on
  let lastLayer = 1; // the number of dots we counted in the previous layer
  while (layer < layers) {
    ticks++;
    let newLayer = 0; // the number of dots we've counted so far in the current layer
    for (let i = 0; i < lastLayer; i++) {
      ticks++;
      newLayer += 2;
    }
    lastLayer = newLayer;
    count += lastLayer;
    layer++;
  }
  return {
    result: count,
    ticks: ticks
  };
}

// console.log(countTriangle(2));
// console.log(countTriangle(4));
// console.log(countTriangle(16));
