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
        return res.status(200).send(hustles)
    })
})

hustleRouter.get("/:hustleId", (req, res, next) => {
    const hustleId = req.params.hustleId
    const foundHustle = hustles.find(hustle => hustle._id === hustleId)
    if(!foundHustle){
        const error = new Error(`The item with id ${hustleId} was not found`)
        res.status(500)
        return next(error)
    }
    res.send(foundHustle)
})

hustleRouter.get("/search/market", (req, res, next) => {
    const market = req.query.market
    if(!market){
        const error = new Error("You must provide a market")
        res.status(500)
        return next(error)
    }
    const filteredHustles = hustles.filter(hustle => hustle.market === market)
    res.status(200).send(filteredHustles)
})

hustleRouter.post("/", (req, res, next) => {
    const newHustle = new Hustle(req.body)
    newHustle.save((err, savedHustle) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedHustle)
    })
})

hustleRouter.delete("/:hustleId", (req, res, next) => {
    Hustle.findOneAndDelete({ _id: req.params.hustleId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully delted item ${deletedItem.name} from the database`)
    })
})

hustleRouter.put("/:hustleId", (req, res, next) => {
    Hustle.findOneAndUpdate(
        { _id: req.params.hustleId },
        req.body,
        { new: true },
        (err, updatedHustle) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedHustle)
        }
    )
})



module.exports = hustleRouter