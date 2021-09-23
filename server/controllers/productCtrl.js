const axios = require('axios');

module.exports = {
    getAllCampgrounds: async (req, res) => {
        const db = await req.app.get('db')
        db.trails.read_all_camps()
        .then(campgrounds => {
          campgrounds.length > 0 ? res.status(200).send(campgrounds): res.sendStatus(200)
        }).catch(err => {
          console.log(err)
          res.sendStatus(500)
        })
    },

    getSpecificCampgrounds: async (req, res) => {
      const db = req.app.get('db');
      const { id } = req.session.user;
      const { location, description, name } = req.body;
      const [camp] = await db.campgrounds.create_camp(location, description, name)
      return res.status(200).send(camp)
    }
}


/////// Code below is to pull all campground data from National Park API ////////

// require('dotenv').config()
// const axios = require('axios');
// const { BEARER_TOKEN } = process.env

// module.exports = {
//     getAllCampgrounds: async (req, res) => {
//         const config = {
//             method: 'get',
//             url: `https://developer.nps.gov/api/v1/campgrounds?API_KEY=${BEARER_TOKEN}`,
//             headers: { }
//           };

//         axios(config).then(campgrounds => {
//             res.status(200).send(campgrounds.data)
//         })

//     }
// }

/////// Code above is to pull all campground data from National Park API ////////