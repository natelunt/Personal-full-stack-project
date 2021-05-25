DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS trails;
DROP TABLE IF EXISTS trail_images;
DROP TABLE IF EXISTS campgrounds;
DROP TABLE IF EXISTS campground_images;

CREATE TABLE users (
    user_id    SERIAL PRIMARY KEY NOT NULL,
    email      VARCHAR(100) NOT NULL,
    hash       VARCHAR(1000) NOT NULL
); 


CREATE TABLE trails (
    trail_id          SERIAL PRIMARY KEY NOT NULL,
    trail_rank        VARCHAR(50) NOT NULL,
    trail_location    VARCHAR(100) NOT NULL,
    trail_description VARCHAR(1000) NOT NULL,
    trail_name        VARCHAR(100) NOT NULL
); 

CREATE TABLE trail_images (
    trail_image_id  SERIAL PRIMARY KEY NOT NULL,
    trail_id        INTEGER REFERENCES trails(trail_id),
    url             TEXT NOT NULL
);


CREATE TABLE campgrounds (
    campground_id  SERIAL PRIMARY KEY NOT NULL,
    cg_location    VARCHAR(100) NOT NULL,
    cg_description VARCHAR(1000) NOT NULL,
    cg_name        VARCHAR(100) NOT NULL
);

CREATE TABLE campground_images (
    cg_image_id        SERIAL PRIMARY KEY NOT NULL,
    campground_id      INTEGER REFERENCES campgrounds(campground_id),
    url                TEXT NOT NULL
);