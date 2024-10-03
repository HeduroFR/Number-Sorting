const ctx = document.getElementById("sortingNumbers").getContext("2d");

// Let's define the arrays
let randomArray = [];
let sortedArrayMinToMax = [];
let sortedArrayMaxToMin = [];

// Let's generate 10 random numbers
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 100));
}

// THE SORTING ALGORITHM
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

// THE REVERSE SORTING ALGORITHM
sortedArrayMinToMax.forEach((number) => {
  sortedArrayMaxToMin.unshift(number);
});

// Let's print the arrays in a beautiful way
// Add color to the chart

new Chart(ctx, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "",
        data: sortedArrayMaxToMin,
        borderWidth: 1,
        backgroundColor: "#e755ba",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
  },
});
