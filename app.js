const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define GET /privacy route
app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

// Start server on port 3000
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
