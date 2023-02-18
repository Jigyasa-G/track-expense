import './App.css';
import { Header } from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpense} from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
      </div>
      <>
        <IncomeExpense/>
      </>
      <>
        <TransactionList/>
        <AddTransaction/>
      </>
    </GlobalProvider>
  );
}

export default App;
