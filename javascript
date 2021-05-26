// This function takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

function powersOfTwo(n){
  var array = []
  for (var i = 0; i <= n; i++) {
    array[i] = Math.pow(2,i);
    }
    return array;
}

//This function to finds the count of the most frequent item of an array.

function mostFrequentItemCount(collection) {
var count = 0;
var max = 0;
 for (var i = 0; i < collection.length; i++) {
   for (var j = 0; j < collection.length; j++) {
     if (collection[i] === collection[j]) {
       count++
     }
     if (count >= max) {
     max = count;
     }
    }
  count = 0;
  }
return max;
}

//This function accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  return "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]
}

//This function, given an array of integers, finds the one that appears an odd number of times.

function findOdd(A) {
  var currentCount = 0;
  
  for (var i = 0; i < A.length; i++) {
    var targetChar = A[i];
    
    for (var x = 0; x < A.length; x++) {
    
      if (targetChar === A[x]) {
        currentCount++;
      }
    }
    
    if (currentCount % 2 !== 0) {
      return targetChar;
      }
  }
};

//This function takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  var result = [];
  var currentChar;
  
  for (var i = 0; i < iterable.length; i++) {
  
    if (iterable[i] !== currentChar) {
      result.push(currentChar = iterable[i]);
    }
   }
  return result;
};

//Given the following three inputs, this function creates an an array of time alloted to work, broken up with time alloted with breaks:

//Input 1: Hours - Number of hours available to you to get your work done!
//Input 2: Tasks - How many tasks you have to do througout the day
//Input 3: Duration (minutes)- How long each of your tasks will take to complete

function dayPlan (hours, tasks, duration) {
  var totalMinutes = hours * 60;
  var workMinutes = tasks * duration;
  var freeTime = totalMinutes - workMinutes;
  var breakNum = tasks - 1;
  var breakLength = Math.round(freeTime/breakNum);
  var totalTask = (tasks * 2) - 1;
  var schedule = [];
  
  if (workMinutes > totalMinutes) {
  
    return "You're not sleeping tonight!";
    
    } else {
  
      for (var i = 1; i <= totalTask; i++) {
    
        if (i % 2 !== 0) {
          schedule.push(duration);
        } else if (i % 2 === 0) {
          schedule.push(breakLength);
        }
   }
  }
  return schedule;
};
