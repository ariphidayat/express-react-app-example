CREATE DATABASE pern_todo_application;

CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);