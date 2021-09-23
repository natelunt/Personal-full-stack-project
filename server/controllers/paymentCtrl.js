const axios = require('axios');

module.exports = {
    getAllTrails: async (req, res) => {
        const db = await req.app.get('db')
        db.trails.read_all_trails()
        .then(trails => {
          trails.length > 0 ? res.status(200).send(trails): res.sendStatus(200)
        }).catch(err => {
          console.log(err)
          res.sendStatus(500)
        })
    },

    getSpecificTrails: async (req, res) => {
      const db = req.app.get('db');
      const { id } = req.session.user;
      const { difficulty, location, description, name } = req.body;
      const [trail] = await db.trails.create_trail(difficulty, location, description, name)
      return res.status(200).send(trail)
    }
}