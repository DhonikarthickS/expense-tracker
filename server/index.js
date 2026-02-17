require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const financialRoutes = require("./routes/financial-records");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo error:", err));

app.use("/api/financial-records", financialRoutes);
app.use("/financial-records", financialRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = 3001;
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`),
  );
}

module.exports = app;
