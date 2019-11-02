const routes = require('express').Router()
const cityControler = require('./cityControler')

Router.get("/mLab/cities",cityControler.getCities)
Router.get("/mLab/cities/id",cityControler.getCity)

module.exports={routes}