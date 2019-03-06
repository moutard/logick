import Sequelize from 'sequelize';

export const postgres = new Sequelize('logick', 'logickdbadmin', '', {
  host: 'aase9pd96mbuiz.cq0tl38zmsjq.eu-west-1.rds.amazonaws.com',
  dialect: 'postgres',
  operatorsAliases: false,
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export const sqlite = new Sequelize('logick', 'logickdbadmin', 'password', {
  dialect: 'sqlite',
  storage: 'dist/database.sqlite'
});
