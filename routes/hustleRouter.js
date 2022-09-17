const express = require('express')
const hustleRouter = express.Router()
const Hustle = require('../models/hustle.js')
// const { v4: uuid } = require('uuid');


hustleRouter.get("/", (req, res, next) => {
    Hustle.find((err, hustles) => {
        console.log(err)
        if(err){
            res.status(500)
            return next(err)
        }
        console.log(hustles)
        return res.status(200).send(hustles)
    })
})

hustleRouter.get("/:hustleId", (req, res) => {
    const hustleId = req.params.hustleId
    const foundHustle = hustles.find(hustle => hustle._id === hustleId)
    res.send(foundHustle)
})

hustleRouter.get("/search/market", (req, res) => {
    const market = req.query.market
    const filteredHustles = hustles.filter(hustle => hustle.market === market)
    res.send(filteredHustles)
})

hustleRouter.post("/", (req, res) => {
    const newHustle = req.body
    newHustle._id = uuid()
    hustles.push(newHustle)
    res.send(`Successfully added ${newHustle.name} to the database!`)
})

hustleRouter.delete("/:hustleId", (req, res) => {
    const hustleId = req.params.hustleId
    const hustleIndex = hustles.findIndex(hustle => hustle._id === hustleId)
    hustles.splice(hustleIndex, 1)
    res.send("Successfully deleted hustle")
})

hustleRouter.put("/:hustleId", (req, res) => {
    const hustleId = req.params.hustleId
    const hustleIndex = hustles.findIndex(hustle => hustle._id === hustleId)
    const updatedHustle = Object.assign(hustles[hustleIndex], req.body)
    res.send(updatedHustle)
})



module.exports = hustleRouter