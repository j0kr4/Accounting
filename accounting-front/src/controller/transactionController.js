import * as transactionService from "../services/transactionService.js";

export const getAllTransactions = async (req, res, next) => {
  try {
    const {
      transaction: { id: transactionId },
    } = req;

    const transactions = await transactionService.findAll(req.query);
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

export const createTransaction = async (req, res, next) => {
  const { amount, description } = req.body;

  const datas = {
    amount,
    description,
  };
  try {
    const transaction = await transactionService.createone(datas);
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

export const getTransaction = async (req, res, next) => {
  const {
    params: { id: transactionId },
  } = req;

  try {
    const transaction = await transactionService.findOneById(transactionId);

    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};
export const updateTransaction = async (req, res, next) => {
  const {
    params: { id: transactionId },
    body: { amount, description },
  } = req;

  const datas = {
    amount,
    description,
  };

  try {
    const transaction = await transactionService.updateOnewithPatch(
      transactionId,
      datas
    );

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteTransaction = async (req, res, next) => {
  const {
    params: { id: transactionId },
  } = req;

  try {
    await transactionService.deleteOne(transactionId);
    res.status(200).send({
      status: "success",
      statusCode: 200,
      message: "User deleted",
    });
  } catch (error) {
    next(error);
  }
};
