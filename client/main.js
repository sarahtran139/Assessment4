//1st and 2nd feature
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
      .then(res => {
        const data = res.data;
        alert(data);
      });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);



//3rd and 4th feature
const setGoalButton = document.getElementById("setGoalButton");
const goalInput = document.getElementById("goalInput");
const currentGoal = document.getElementById("currentGoal");
const milestoneButton = document.getElementById("milestoneButton");
const progressList = document.getElementById("progressList");

let currentProgress = 0;

const setGoal = () => {
    const goal = goalInput.value;
    axios.post("http://localhost:4000/api/goal", { goal })
        .then(res => {
            currentGoal.textContent = `Current Goal: ${goal}`;
            goalInput.value = "";
        })
        .catch(err => {
            console.error("Error setting goal:", err);
        });
};


const updateProgress = () => {
    currentProgress++;
    const newProgressItem = document.createElement("li");
    newProgressItem.textContent = `Milestone ${currentProgress} achieved!`;
    progressList.appendChild(newProgressItem);

    // Send progress update to the server
    axios.post("http://localhost:4000/api/progress", { milestone: currentProgress })
        .then(res => {
            console.log("Progress updated:", res.data);
        })
        .catch(err => {
            console.error("Error updating progress:", err);
        });
};

setGoalButton.addEventListener('click', setGoal);
milestoneButton.addEventListener('click', updateProgress);








