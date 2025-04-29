CREATE DATABASE IF NOT EXISTS etl_demo;
USE etl_demo;

CREATE TABLE IF NOT EXISTS user_details(
   id VARCHAR(50) PRIMARY KEY,
   name VARCHAR(100),
   email VARCHAR(100),
   submitted_at DATETIME
);

CREATE TABLE IF NOT EXISTS user_responses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id VARCHAR(50),
    question VARCHAR(100),
    answer TEXT,
    FOREIGN KEY (submission_id) REFERENCES user_details(id)
);