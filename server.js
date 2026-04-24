const express = require('express');
const cors = require('cors');

const app = express();
require("./models");

const PORT = 5000;

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use("/spark", require("./routes/form"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});