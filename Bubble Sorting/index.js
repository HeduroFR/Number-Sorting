// Bubble Sorting
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;

        // Log the current state of the array
        console.log(arr);
      }
    }
  } while (swapped);
  return arr;
}

// Usage
const randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 100));
}
console.log(randomArray);
console.log(bubbleSort(randomArray));
