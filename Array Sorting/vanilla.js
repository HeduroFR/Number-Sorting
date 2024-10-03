let randomArray = [];
let sortedArrayMinToMax = [];
let sortedArrayMaxToMin = [];

for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 1000));
}

randomArray.forEach((number) => {
  if (sortedArrayMinToMax.length === 0) {
    sortedArrayMinToMax.push(number);
  } else {
    let index = 0;
    while (
      index < sortedArrayMinToMax.length &&
      number > sortedArrayMinToMax[index]
    ) {
      index++;
    }
    sortedArrayMinToMax.splice(index, 0, number);
  }
});

// Inverted array
sortedArrayMinToMax.forEach((number) => {
  sortedArrayMaxToMin.unshift(number);
});

console.log(randomArray);
console.log(sortedArrayMinToMax);
console.log(sortedArrayMaxToMin);
