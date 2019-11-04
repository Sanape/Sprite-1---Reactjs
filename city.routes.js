const routes = require('express').Router()
const cityControler = require('./cityControler')

routes.get("/maLab/cities",cityControler.getCities)
routes.get("/mLab/cities/id",cityControler.getCity)

module.exports={routes}