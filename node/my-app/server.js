const express = require('express');
const app = express();
const path = require('path');

// Define the static website directory
const staticWebsitePath = path.join(__dirname, 'public');

// Serve the static files
app.use(express.static(staticWebsitePath));

// Start the server
const port =  8800;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});

/*
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/