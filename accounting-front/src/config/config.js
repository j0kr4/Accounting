import "dotenv/config";
import * as yup from "yup";

import databaseConfig from "./database.config.js";

const schema = yup.object().shape({
  environment: yup
    .string()
    .oneOf(["production", "development", "test"])
    .required(),
  port: yup.number().integer().positive().min(80).max(65535).required(),
  db: yup.object().shape({
    client: yup.string().oneOf(["mysql", "mysql2", "pg"]).required(),
    connection: yup.object().shape({
      host: yup.string().required(),
      port: yup.number().integer().positive().min(80).max(65535).required(),
      user: yup.string().required(),
      password: yup.string().required(),
      database: yup.string().required(),
    }),
    migrations: yup.object().shape({
      directory: yup.string().required(),
    }),
    seeds: yup.object().shape({
      directory: yup.string(),
    }),
  }),
});

const env = process.env;

const data = {
  environment: env.NODE_ENV,
  port: env.APP_PORT,
  db: databaseConfig,
};

const config = schema.validateSync(data);
export default config;
