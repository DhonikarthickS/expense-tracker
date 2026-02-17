require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./db");

const financialRoutes = require("./routes/financial-records");

const app = express();

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ error: "Database connection error" });
  }
});

app.use("/api/financial-records", financialRoutes);
app.use("/financial-records", financialRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = 3001;
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`),
  );
}

module.exports = app;
