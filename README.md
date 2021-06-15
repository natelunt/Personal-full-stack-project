# personal-full-stack-project
On-The-Rocks full stack project


## MVP
- Users should be able to register an account, log in and out
- Users should be able to find trails and campgrounds
- Users should be able to rate trails and campgrounds
- Users should be able to search for trails and campgrounds by location and difficulty and rating
- Users should be able to delete an account

## ICEBOX
- Clean error handling via utility snack bars
- Ability to log in with social media or 3rd party accounts
- Ability to participate in discussion boards
- leave feedback for articles
- share/recommend trails/campgrounds with another user
- admin UI
- SMS and Email features
- Users should be able to review/rate articles/posts
- add/remove trails and campgrounds to a plan/todo list
- view trails based on ranked difficulty
- rate difficulty of trails


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


## Database

trails
```SQL
   CREATE TABLE trails (
    trail_id          SERIAL PRIMARY KEY NOT NULL,
    trail_rank        VARCHAR(50) NOT NULL,
    trail_location    VARCHAR(100) NOT NULL,
    trail_description VARCHAR(1000) NOT NULL,
    trail_name        VARCHAR(100) NOT NULL
   ); 
```

campgrounds
```SQL
   CREATE TABLE campgrounds (
    campground_id  SERIAL PRIMARY KEY NOT NULL,
    cg_location    VARCHAR(100) NOT NULL,
    cg_description VARCHAR(1000) NOT NULL,
    cg_name        VARCHAR(100) NOT NULL
   ); 
```

trail_images
```SQL
   CREATE TABLE trail_images (
    trail_image_id  SERIAL PRIMARY KEY NOT NULL,
    trail_id      REFERENCES trails (trail_id),
    url             TEXT NOT NULL
   );
```

campground_images
```SQL
   CREATE TABLE campground_images (
    cg_image_id        SERIAL PRIMARY KEY NOT NULL,
    campground_id      REFERENCES campgrounds (campground_id),
    url                TEXT NOT NULL
   );
```

trail_favorites
```SQL
   CREATE TABLE trail_favorites (
    favorite_trail_id    SERIAL PRIMARY KEY NOT NULL,
    user_id              REFERENCES users (user_id),
    trail_id             REFERENCES trails (trail_id)
   );
```

camp_favorites
```SQL
   CREATE TABLE camp_favorites (
    favorite_cg_id    SERIAL PRIMARY KEY NOT NULL,
    user_id           REFERENCES users (user_id),
    campground_id     REFERENCES campgrounds (campground_id)
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

posts
```SQL
   CREATE TABLE posts (
    post_id       SERIAL PRIMARY KEY NOT NULL,
    author_id     REFERENCES users (user_id),
    title         VARCHAR(50) NOT NULL,
    post_content  TEXT,
    url           TEXT,
    date_created  TIMESTAMP
   );
```


## Server

### Endpoints

#### Trails/Campgrounds
- get all trails & campgrounds(locations) => GET '/api/locations'
- get specific trails/campgrounds => POST '/api/trails' OR '/api/campgrounds'
- get specific trail/campground => GET '/api/trail/:id' OR '/api/campground/:id'


#### Users
- register user => POST '/api/register'
- login a user => POST '/api/login'
- logout a user => DELETE '/api/logout'
- delete user => DELETE '/api/delete'


### Controllers
- usersController
- trailsController
- campgroundsController


## Front-end

Wireframes and Component Tree:


### Routes

- path="/" => Landing
- path="/explore" => Explore
- path="/location/:location_id" => Location Display
- path="/favorites" => Favorites
   - path="/favorite/:category" => Category Favorite
- path="/settings" => Settings
