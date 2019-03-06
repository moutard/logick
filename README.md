# logick
logick in js

brew instal postgres
initdb /usr/local/var/postgres -E utf8
pg_ctl -D /usr/local/var/postgres -l logfile start
psql --dbname postgres
CREATE DATABASE logick_development;
CREATE ROLE root LOGIN;
