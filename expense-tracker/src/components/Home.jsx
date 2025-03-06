import React from "react";
import { Link } from "react-router-dom";

const Home = ({ incomeList, expenseList }) => {
  return (
    <div className="text-3xl font-bold px-20 py-4">
      <h1>You will see all your expense here</h1>

      {incomeList.map((income) => {
        return (
          <li key={income.id}>
            {income.incomeTitle} {income.incomeAmount}
          </li>
        );
      })}

      <br />
      <br />
      <br />

      {expenseList.map((expese) => {
        return (
          <li key={expese.id}>
            {expese.expenseTitle} {expese.expenseAmount}
          </li>
        );
      })}
    </div>
  );
};

export default Home;
