//5. it doesn't have internal db controller. copy from activity 8 apiRoutes.js. setup according to google api documentation and endpoints

const axios = require("axios");
//const router = require("express").Router();

module.exports = {
    findAll: function (req, res) {

        axios        //from "/google" api do this then go back up to the client// client -> src -> utils -> API.js
            .get("https://www.googleapis.com/books/v1/volumes/", { params: req.query })
            .then(results => results.data.items) // result string
            .then(results => res.json(results))   // json translation of the string  
            .catch(err => res.status(422).json(err));
    }

}


