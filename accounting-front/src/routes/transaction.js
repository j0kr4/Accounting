import express from "express";
import * as transactionController from "../controllers/transactionController.js";

const route = express.Router();

route.route("/").get(transactionController.getAllTransactions);

route.get("/transaction", transactionController.getTransaction);
route
  .route("/:id")
  .get(transactionController.getTransaction)
  .put(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction);

export default route;
