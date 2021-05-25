CREATE TABLE products (
    trail_id          SERIAL PRIMARY KEY NOT NULL,
    trail_rank        INT(10) NOT NULL,
    trail_location    VARCHAR(100) NOT NULL,
    trail_description VARCHAR(1000) NOT NULL,
    trail_name        VARCHAR(100) NOT NULL
);