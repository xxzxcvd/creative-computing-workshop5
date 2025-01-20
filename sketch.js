let data = [];

function preload() {
  // Load CSV file
  data = loadStrings('data.csv');
  console.log(data);
}

function setup() {
  createCanvas(800, 600);
  background(220);
  //Analyze CSV data
  parseCSV(data);
  drawVisualization();
}

function parseCSV(csvData) {
  console.log(csvData);
  let headers = csvData[0].split(',');
  for (let i = 1; i < csvData.length/2; i++) {
    console.log(i);
    let row = csvData[i].split(',');
    let entry = {};
    for (let j = 0; j < headers.length; j++) {
      entry[headers[j]] = row[j];
    }
    data.push(entry);
  }
}

function drawVisualization() {
  // Draw a circle
  for (let i = 0; i < data.length; i++) {
    let value = parseInt(data[i].value);
    let x = map(i, 0, data.length, 50, width - 50);
    let y = height / 2;
    let size = map(value, 0, 100, 10, 100);
    fill(random(255), random(255), random(255));
    ellipse(x, y, size, size);
  }
}