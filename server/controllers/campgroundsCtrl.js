require('dotenv').config()
const axios = require('axios');
const { BEARER_TOKEN } = process.env

module.exports = {
    getAllCampgrounds: async (req, res) => {
        const config = {
            method: 'get',
            url: `https://developer.nps.gov/api/v1/campgrounds?API_KEY=${BEARER_TOKEN}`,
            headers: { }
          };

        axios(config).then(campgrounds => {
            res.status(200).send(campgrounds.data)
        })

    }
}