-- DEV ONLY - Brute Force DROP DB (for local dev and unit test)
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE
 usename = 'ctask_user' OR datname = 'ctask_db';
DROP DATABASE IF EXISTS ctask_db;
DROP USER IF EXISTS ctask_user;

-- DEV ONLY - Dev only password (for local dev and unit test).
CREATE USER ctask_user PASSWORD 'dev_only_pwd';
CREATE DATABASE ctask_db owner ctask_user ENCODING = 'UTF-8';