// backend/server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());

// Serve JSON when requested
app.get("/api/retailers", (req, res) => {
  const filePath = path.join(__dirname, "data/retailer.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading file");
    res.json(JSON.parse(data));
  });
});

// Optional route to update votes (we can add this later)
app.use(express.json());
app.post("/api/vote", (req, res) => {
  const indices = req.body.votes;
  const filePath = path.join(__dirname, "data/retailer.json");

  fs.readFile(filePath, "utf-8", (err, raw) => {
    if (err) return res.status(500).send("Error reading file");

    const retailers = JSON.parse(raw);
    indices.forEach(index => {
      if (retailers[index]) {
        retailers[index].numberOfVotes += 1;
      }
    });
    fs.writeFile(filePath, JSON.stringify(retailers, null, 2), err => {
      if (err) return res.status(500).send("Error writing file");
      res.json({ success: true, message: "Votes updated", retailers });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

