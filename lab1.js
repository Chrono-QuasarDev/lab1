const scores = [2, 20, 21, 22, 23, 30, 48, 49, 50, 55, 60, 65, 72, 63, 76, 80, 68, 90, 85, 98];
const len = scores.length;

// Search for the minimum grade
let min = scores[0];

for (let i = 0; i < len; i++) {
  if (scores[i] < min) {
    min = scores[i];
  }
}
console.log(`The minimum grade is ${min}`);

// Search for maximum grade
let max = scores[0];

for (let i = 0; i < len; i++) {
  if (scores[i] > max) {
    max = scores[i];
  }
}
console.log(`The maximum grade is ${max}`);

// Average grade of the class
let sum = 0;

for (let i = 0; i < len; i++) {
  sum += scores[i];
}
const average = sum / len;
console.log(`The average grade is ${average.toFixed(6)}`);


// Finding for the tally
const stats = [0, 0, 0, 0, 0];

function statsIndex(score) {
  if (score <= 20) return 0;
  if (score <= 40) return 1;
  if (score <= 60) return 2;
  if (score <= 80) return 3;
  return 4;
}

for (let i = 0; i < scores.length; i++) {
  stats[statsIndex(scores[i])] += 1;
}

console.log(stats);


// Print Chart 
// Find max height
let maxHeight = stats[0];

for (let i = 0; i < stats.length; i++) {
  if (stats[i] > maxHeight) {
    maxHeight = stats[i];
  }
}

for (let row = maxHeight; row >= 1; row--) {
  let line = `${row} > `;

  for (let bucket = 0; bucket < stats.length; bucket++) {
    if (stats[bucket] >= row) {
      line += "####### ";
    } else {
      line += "        ";
    }
  }

  console.log(line);
}

console.log("+-----------+---------+---------+---------+---------+");
console.log("I 0-20 I 21-40 I 41-60 I 61-80 I 81-100 I");