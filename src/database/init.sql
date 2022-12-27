BEGIN;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email text NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  password text NOT NULL
);
INSERT INTO users (email, firstname, lastname,password) VALUES
('rand@gmail.com', 'rand', 'massalha','1234');

COMMIT;