const express = require('express')
const hustleRouter = express.Router()
const { v4: uuid } = require('uuid');

const hustles = [
    {name: "shrub hub", description: "plant identification", market: "botanists", _id: uuid() },
    {name: "side hustles", description: "side projects", market: "entrepreneurs", _id: uuid() },
    {name: "purpose", description: "finding one's purpose", market: "humans", _id: uuid() },
    {name: "habits", description: "habit tracking", market: "animals", _id: uuid() }
]

hustleRouter.get("/", (req, res) => {
    res.send(hustles)
})

hustleRouter.post("/", (req, res) => {
    const newHustle = req.body
    newHustle._id = uuid()
    hustleRouter.push(newHustle)
    res.send('Successfully added ${newHustle.name} to the database!')
})



module.exports = hustleRouter