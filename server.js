const express = require("express");
const sequelize = require("./config/db.config");
const test = require("./models/testdb");

const app = express();
require("./models"); 
const PORT = 3000;
 
app.get('/', (req, res) => {

  res.send('Server is running');

});

const PORT = 5173;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const testRoutes = require("./routes/test");
app.use("/test", testRoutes);
 
const formRoutes = require("./routes/form");
app.use("/spark",formRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
