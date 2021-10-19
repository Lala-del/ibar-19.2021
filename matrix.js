let nestedArray = [
[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15],
[16,17,18,19,20],
[21,22,23,24,25]
];


function writeItems(arr){
  const n = arr.length;
  const m = arr[0].length;
  //const direction = 1;

  for (let i = 0; i < n * m; i++) {
    const row = Math.floor(i / m);
    const col =((row + 1) % 2) * (i % m) + ((row + 2) % 2) * (m - 1 - (i % m));
    console.log(arr[row][col]);
  }
}

writeItems(nestedArray);