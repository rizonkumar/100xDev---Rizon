const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidney = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidney += numberOfHealthyKidney;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({ 
        msg: "Done!"
    })
})

app.put("/", (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete("/", (req, res) => {
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done"})
})

app.listen(3000)