INSERT INTO users(name, email, hasg)
VALUES (${name}, ${email}, ${hash})
RETURNING name, user_id, email;