import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddExpense from "./components/AddExpense";
import AddIncome from "./components/AddIncome";
import Header from "./components/Header";

const App = () => {
  const [incomeList, setIncomeList] = useState([]); // [{incometitle : "freelancing", amount : 100000}]
  const [expenseList, setExpenseList] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home incomeList={incomeList} expenseList={expenseList} />}
          />
          <Route
            path="/add-expense"
            element={
              <AddExpense
                expenseList={expenseList}
                setExpenseList={setExpenseList}
              />
            }
          />
          <Route
            path="/add-income"
            element={
              <AddIncome
                incomeList={incomeList}
                setIncomeList={setIncomeList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
