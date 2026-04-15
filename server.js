const express = require('express');
 
const app = express();
require("./models"); 
const PORT = 3000;
 
app.get('/', (req, res) => {

  res.send('Server is running');

});

app.use(express.json());

// Import routes
const testRoutes = require("./routes/test");
app.use("/test", testRoutes);
 
const formRoutes = require("./routes/form");
app.use("/spark",formRoutes);


app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${PORT}`);

});