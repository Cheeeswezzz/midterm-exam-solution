const express = require('express'); 
const app = express(); 
const port = 3000;


app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Marcelo G. Cagara J.r' });
});


app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
