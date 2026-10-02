require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const leadRoutes = require("./routes/leadRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Shree Interiors API is running"
  });
});

app.use("/api/leads", leadRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
