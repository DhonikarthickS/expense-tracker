const express = require("express");
const FinancialRecord = require("../schema/financial-record");

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req, res) => {
  const records = await FinancialRecord.find({
    userId: req.params.userId,
  });
  res.json(records);
});

router.post("/", async (req, res) => {
  const record = new FinancialRecord(req.body);
  const saved = await record.save();
  res.json(saved);
});

router.put("/:id", async (req, res) => {
  const updated = await FinancialRecord.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  const deleted = await FinancialRecord.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

module.exports = router;
