const express = require("express");
const router = express.Router();

// Get all orders
router.get("/", (req, res) => {
  res.json({ message: "Get all orders" });
});

// Get order by ID
router.get("/:id", (req, res) => {
  res.json({ message: `Get order with ID: ${req.params.id}` });
});

// Create new order
router.post("/", (req, res) => {
  res.json({ message: "Create new order" });
});

// Update order status
router.patch("/:id/status", (req, res) => {
  res.json({ message: `Update status for order with ID: ${req.params.id}` });
});

// Cancel order
router.delete("/:id", (req, res) => {
  res.json({ message: `Cancel order with ID: ${req.params.id}` });
});

module.exports = router;
