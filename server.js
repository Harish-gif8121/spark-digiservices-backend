const express = require('express');
 
const app = express();

const PORT = 3000;
 
app.get('/', (req, res) => {

  res.send('Server is running');

});

app.use(express.json());

// Import routes
const testRoutes = require("./routes/test");
app.use("/test", testRoutes);
 
app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${PORT}`);

});