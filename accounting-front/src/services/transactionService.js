import Transaction from "../db/models/model_transaction";

export const findAll = async (queryString) => {
  try {
    const all = new Transaction();

    const transactions = await all.query;
    return transactions;
  } catch (error) {
    throw error;
  }
};

export const createOne = async (transaction) => {
  try {
    return Transaction.query().insert(transaction);
  } catch (error) {
    throw error;
  }
};

export const findOneById = async (transactionId) => {
  try {
    const transaction = await Transaction.query().findById(transactionId);
    return transaction;
  } catch (error) {
    throw error;
  }
};

export const updateOnewithPatch = async (transactionId, transaction) => {
  try {
    await findOneById(transactionId);
    const newTransaction = await Transaction.query().patchAndFetchById(
      transactionId,
      transaction
    );
    return newTransaction;
  } catch (error) {
    throw error;
  }
};

export const deleteone = async (transactiondId) => {
  try {
    const transaction = await findOneById(transactionId);
    await transaction.query().delete();
  } catch (error) {
    throw error;
  }
};
