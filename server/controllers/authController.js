const bcrypt = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const { name, email, password } = req.body;
        const db = req.app.get('db');

        try {
            const [ existingUser ] = await db.auth.check_for_user({ email });

            if (existingUser) {
                res.status(400).send('User already exists.');
                return;
            }

            const salt = bcrypt.genSaltSync(5);
            const hash = bcrypt.hashSync(password, salt);

            const [ newUser ] = await db.auth.register_user({ name, email, hash });

            if (newUser) {
                delete newUser.hash;
                req.session.user = { ...newUser };
                res.status(201).send(newUser);
                return;
            }
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        res.sendStatus(500);
    },


    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');

        try {
            const [ existingUser ] = await db.auth.find_user_by_email({ email });

            if (!existingUser) {
                res.status(404).send('User does not exist');
                return;
            }

            const authenticated = bcrypt.compareSync(password, existingUser.hash);

            if (authenticated) {
                delete existingUser.hash;
                req.session.user = { ...existingUser };
                res.status(200).send(req.session.user);
                return;
            }

            res.status(400).send('Incorrect email or password');
            return;
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },


    logout: async (req, res) => {
        if(req.session.user) {
            req.session.destroy();
        }
        res.sendStatus(200);
    },


    delete: async (req, res) => {
        const { password } = req.body;
        const db = req.app.get('db');
        if(req.session.user) {
            const { email, user_id } = req.session.user;

            try {
                const [ existingUser ] = await db.auth.find_user_by_email({ email });

                if (!existingUser) {
                    res.status(404).send('Account not found');
                    return;
                }

                const authenticated = bcrypt.compareSync(password, existingUser.hash);

                if (authenticated) {
                    await db.auth.delete_user({ user_id })
                    res.sendStatus(200);
                }

                res.status(400).send('Incorrect password.')
                return;
            } catch(err) {
                console.log(err);
                res.sendStatus(500);
            }
        }

        res.status(400).send('You must be logged in to delete an account. Please log in.')
    },


    // received some assistance on updateUser, will work on rewriting it's code to be consistent with the code above
    updateUser: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const existingUser = await db.user.find_user_by_id({ id });
        const { user_id } = existingUser[0];
        const { email, password } = req.body;

        // email but no password provided
        if (!password && email) {
            if (email !== existingUser[0].email) {
                const hash = existingUser[0].hash;
                const updatedUser = await db.user.update_user({ user_id, email, hash });

                req.session.user = updatedUser[0];
                delete updatedUser[0].hash;
                res.status(202).send(req.session.user);
                return;
            } else {
                res.status(406).send('Email matches current email');
                return;
            }
        }


        // only password provided
        if (password && !email) {
            if (!bcrypt.compareSync(password, existingUser[0].hash)) {
                const email = existingUser[0].email;
                const salt = bcrypt.genSaltSync(5);
                const hash = bcrypt.hashSync(password, salt);
                const updated = await db.user.update_user({ user_id, email, hash });

                req.session.user = updatedUser[0];
                delete updatedUser[0].hash;
                res.status(202).send(req.session.user);
                return;
            } else {
                res.status(406).send('Cannot enter current password');
                return;
            }
        }

        // email and password provided
        if (password && email) {
            if (!bcrypt.compareSync(password, existingUser[0].hash) && email !== existingUser[0].email){
                const salt = bcrypt.genSaltSync(5);
                const hash = bcrypt.hashSync(password, salt);
                const updatedUser = await db.user.update_user({ user_id, email, hash });
                req.session.user = updatedUser[0];
                delete updatedUser[0].hash;
                res.status(202).send(req.session.user);
                return;
            } else {
                res.status(406).send('Submission matches current user email or password');
                return;
            }
        }

        // neither email nor password provided
        if (!password && !email) {
            res.status(406).send('No data provided');
        }
    }

}