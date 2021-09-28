require("dotenv").config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const authCtrl = require('./controllers/authController');
const productCtrl = require('./controllers/productCtrl');
const { submitPayment } = require('./controllers/paymentCtrl');
const { sendEmail } = require('./controllers/nodeMailerCtrl');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express();

/* CORS stands for Cross Origin Resource Sharing. 
*  Basically one domain like "facebook" vs 
*  another origin like "google" talking to each other.
*  Don't use '*' on a production environment
*/
app.use(cors('*'));
app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
        secret: SESSION_SECRET
    })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( dbInstance => {
    console.log("Database connected");
    app.set('db', dbInstance);

    app.listen(SERVER_PORT, () => console.log(`Server is listening on ${SERVER_PORT}`));
});


// Auth Endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.delete('/api/logout', authCtrl.logout);
app.delete('/api/delete', authCtrl.delete);
app.put('/api/update/:id', authCtrl.updateUser)


// Product Endpoints
app.get('/api/products', productCtrl.getAllProducts);
app.get('/api/products/categories', productCtrl.getProductCategories);
app.get('/api/products', productCtrl.getProduct);
app.post('/api/products', productCtrl.createProduct);


// Payment Endpoints
app.post('/api/payment', paymentCtrl.submitPayment);


// Nodemailer Endpoints
app.post('/api/send', nodeMailerCtrl.sendEmail);
app.use(express.static(path.join(__dirname, '../build'))) //will need assistance
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')))


/* HTTP REQUEST: 
axios is a special function that makes these requests for us
    {
        line: {
            URI: devmountain.com
            method: GET,
            ...
        }
        headers: {
            cookies: {...},
            ...
        }
        body (optional [req.body stuff in JSON]): {
            ...
        }
    }
*/