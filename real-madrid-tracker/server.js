const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.FOOTBALL_API_KEY;
const TEAM_ID = 86;

app.get("/next-match", async (req, res) => {
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${TEAM_ID}/matches?status=SCHEDULED&limit=1`,
    { headers: { "X-Auth-Token": API_KEY } }
  );
  const data = await response.json();
  res.json(data.matches[0]);
});

app.get("/last-result", async (req, res) => {
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${TEAM_ID}/matches?status=FINISHED&limit=1`,
    { headers: { "X-Auth-Token": API_KEY } }
  );
  const data = await response.json();
  const matches = data.matches;
  res.json(matches[matches.length - 1]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});