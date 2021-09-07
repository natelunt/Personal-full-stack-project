# personal-full-stack-project
On-The-Rocks full stack project


## MVP
- Users should be able to register an account, log in and out
- Users should be able to find products
- Users should have a cart
- Users should be able to checkout and purchase cart items
- Users should have a profile page

## ICEBOX
- Clean error handling via utility snack bars
- Order history
- Wish list/saved for later
- Admin UI
- Users should be able to delete their account
- Users should have the option to sign up for promotional emails
- Users should be able to log in with google


### Dependencies
- axios
- bcryptjs
- dotenv
- express
- express-session
- massive
- redux
- redux-devtools-extension
- redux-promise-middleware
- react-router-dom
- react-redux
- react-toastify
- stripe
- passport
- passport-google-oauth20


## Database

products
```SQL
   CREATE TABLE products (
    product_id                SERIAL PRIMARY KEY NOT NULL,
    category                  VARCHAR(100) NOT NULL,
    price                     VARCHAR(100) NOT NULL,
    product_description       VARCHAR(1000) NOT NULL,
    product_name              VARCHAR(100) NOT NULL,
    count_in_stock            INTEGER NOT NULL
   ); 
```


product_images
```SQL
   CREATE TABLE product_images (
    product_image_id  SERIAL PRIMARY KEY NOT NULL,
    product_id      INTEGER REFERENCES products (product_id),
    url             TEXT NOT NULL
   );
```


carts
```SQL
   CREATE TABLE trail_favorites (
    favorite_trail_id    SERIAL PRIMARY KEY NOT NULL,
    user_id              REFERENCES users (user_id),
    trail_id             REFERENCES trails (trail_id)
   );
```



users
```SQL
   CREATE TABLE users (
    user_id    SERIAL PRIMARY KEY NOT NULL,
    email      VARCHAR(100) NOT NULL,
    password   VARCHAR(1000) NOT NULL
  ); 
```




## Server

### Endpoints

#### Trails/Campgrounds
- get all products => GET '/api/products'
- get specific product => GET '/api/products/:id'
- get product categories => GET '/api/products/categories'
- create products => POST '/api/products/categories'
- query ?category=category


#### Users
- register user => POST '/api/register'
- login a user => POST '/api/login'
- logout a user => DELETE '/api/logout'
- delete user => DELETE '/api/delete'


### Controllers
- usersController
- productsController


## Front-end


### Routes

- path="/" => Landing
- path="/shop" => Shop
- path="/shop/:category" => Category Shop
- path="/cart" => Cart
- path="/product/:product_id" => Product Display
- path="/profile" => Profile View
