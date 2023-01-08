// run `node index.js` in the terminal

let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
    totalMark: 186,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
    totalMark: 171,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
    totalMark: 191,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
    totalMark: 171,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
    totalMark: 109,
  },
];

testCase1.sort((a, b) => {
  if (a.totalMark < b.totalMark) return 1;
  if (a.totalMark > b.totalMark) return -1;
  return 0;
});

console.log(testCase1);

console.log(`Hello Node.js v${process.versions.node}!`);
