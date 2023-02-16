// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let smallest = array[0]
let biggest = array[0]

for (x = 1; x < array.length; x++) {
  
  if (array[x] < smallest) {
    smallest = array[x]
  } else if (array[x] > biggest) {
    biggest = array[x]
  }
}

console.log(smallest)
console.log(biggest)

