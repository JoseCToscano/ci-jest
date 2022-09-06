set global log_bin_trust_function_creators=1;

CREATE USER 'ci_jest_db_user'@'%' IDENTIFIED WITH mysql_native_password BY 'ci_jest_db_password';
GRANT ALL PRIVILEGES ON `%ci_jest_db%`.* TO 'ci_jest_db_user'@'%';
FLUSH PRIVILEGES;