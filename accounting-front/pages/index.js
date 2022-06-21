import Layout from "../src/components/Layout";
import { TransactionList } from "../src/components/TransactionList";
import { AddTransaction } from "../src/components/AddTransaction";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <TransactionList></TransactionList>
        <hr></hr>
        <AddTransaction></AddTransaction>
      </div>
    </Layout>
  );
}
