let currentGoal = "";

module.exports = {

    

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
          "A beautiful, smart, and loving person will be coming into your life.",
          "Your life will be filled with love and happiness.",
          "Opportunities are coming your way. Be ready to seize them!",
          "A dream you have will come true soon.",
          "You will find great success in your future endeavors."
        ];
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    setGoal: (req, res) => {
        const { goal } = req.body;
        currentGoal = goal;
        res.status(200).send({goal});
    },
    updateProgress: (req, res) => {
        const { milestone } = req.body;
        res.status(200).send(`Milestone ${milestone} achieved!`);
    },
    getCurrentGoal: (req, res) => {
        res.status(200).send(currentGoal);
    },
    

};


   
    
  







     