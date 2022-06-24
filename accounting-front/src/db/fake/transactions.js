import faker from "faker";

const CreateInitialTransactions = () => {
  const initialTransactions = [
    {
      amount: 20,
      description: "transactionDescription",
    },
  ];

  return transactions;
};

const fakeTransaction = () => {
  return {
    amount: faker.finance.amount(1, 1000, 0),
    description: faker.finance.transactionDescription(),
  };
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("transactions").del();
  const fakeTransactions = [];
  const transactionNumber = 10;
  for (let i = 0; i < transactionNumber; i++) {
    fakeTransactions.push(fakeTransaction());
  }

  const transactions = [...CreateInitialTransactions(), ...fakeTransactions];

  await knex("transactions").insert(transactions);
}
