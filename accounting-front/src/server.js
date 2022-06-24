import knex from "knex";
import { Model } from "objection";
import config from "./config/config.js";
import app from "./app.js";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const db = knex(config.db);
Model.knex(db);

db.raw("select 1+1 as result")
  .then(() => {
    console.log("👌 Database connected");
  })
  .catch(() => {
    console.log("❌ Database connection failed");
    process.exit(1);
  });

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Environment: ${config.environment}`);
  console.log(`🎉 Listening on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!!  shutting down ...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

export default app;
