// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');  // Import the 'path' module
const app = express();
const PORT = 5000; // Choose a port number for your server
// const path = require('path');


app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

const staticPath = path.join(__dirname, 'server');

app.use(express.static(staticPath));

// Endpoint to handle saving data to CSV
app.post('/save-to-csv', (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  const csvData = `${latitude},${longitude}\n`;

  // Specify the file path where you want to save the CSV file
  const filePath = 'file.csv'
  // Append data to CSV file
  fs.appendFile(filePath, csvData, (err) => {
    if (err) {
      console.error('Error saving CSV:', err);
      return res.status(500).json({ error: 'Failed to save data to CSV file' });
    }
    // Send a response with CORS headers
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header('Access-Control-Allow-Methods', 'POST'); // Allow only POST requests
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allow specified headers
  res.status(200).json({ message: 'Data saved to CSV file' });
  });
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/file-csv',(req,res)=>{
  // res.sendFile('file.csv');
  const filePath = path.join(__dirname, 'file.csv');
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




