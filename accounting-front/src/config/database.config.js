import "dotenv/config";

const env = process.env;

let dbConfig = {};

if (!["production", "development"].includes(env.NODE_ENV)) {
  throw new Error("Invalid NODE_ENV");
}

if (env.NODE_ENV === "production") {
  dbConfig = {
    client: env.DB_CLIENT,
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    },
  };
}

if (env.NODE_ENV === "development") {
  dbConfig = {
    client: env.DB_CLIENT_DEV,
    connection: {
      host: env.DB_HOST_DEV,
      port: env.DB_PORT_DEV,
      user: env.DB_USER_DEV,
      password: env.DB_PASSWORD_DEV,
      database: env.DB_NAME_DEV,
    },
  };
}

export default {
  client: dbConfig.client,
  connection: dbConfig.connection,
  migrations: {
    directory: "./src/db/migrations/",
  },
  fake: {
    directory: "./src/db/fake/",
  },
};
