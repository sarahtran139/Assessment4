const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, setGoal, updateProgress, getCurrentGoal } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goal", setGoal);
app.post("/api/progress", updateProgress);
app.get("/api/currentGoal", getCurrentGoal);


app.listen(4000, () => console.log("Server running on 4000"));
