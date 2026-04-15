const express = require("express");
const sequelize = require("./config/db.config");
const test = require("./models/testdb");

const app = express();

require("../spark-api/models/testdb.js");

const PORT = 5173;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
// const testRoutes = require("./routes/test");
// app.use("/test", testRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// app.post("/form-create", (req, res) => {
//   console.log(req.body, "sadfjlksdfjds");
//   const payload = {
//     name: "John Doe",
//     email: "srinu@123",
//     phone_number: "1234567890",
//   };

//   res.send("Server is running");
// });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();

(async () => {
  try {
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
