import React from "react";

const Home = ({ incomeList, expenseList }) => {
  return (
    <div className="px-20 py-4">
      <h1 className="text-3xl font-bold  py-4">
        Track your income and expenses.
      </h1>

      <div className="flex justify-between w-full">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-green-500 py-2">Income </h2>
          <div className="flex gap-4 font-bold py-2">
            <p className="w-1/3">Sr. No.</p>
            <p className="w-1/3">Income Title </p>
            <p className="w-1/3">Income Amount</p>
          </div>
          {incomeList.map((income, index) => {
            return (
              <div key={income.id} className="flex gap-4">
                <p className="w-1/3">{index + 1}.</p>
                <p className="w-1/3"> {income.incomeTitle}</p>
                <p className="w-1/3"> Rs. {income.incomeAmount} </p>
              </div>
            );
          })}
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-red-500 py-2">Expense </h2>

          <div className="flex gap-4 font-bold py-2">
            <p className="w-1/3">Sr. No.</p>
            <p className="w-1/3">Expense Title </p>
            <p className="w-1/3">Expense Amount</p>
          </div>
          {expenseList.map((expese, index) => {
            return (
              <div key={expese.id} className="flex gap-4">
                <p className="w-1/3">{index + 1}.</p>
                <p className="w-1/3"> {expese.expenseTitle}</p>
                <p className="w-1/3"> Rs. {expese.expenseAmount} </p>
              </div>
            );
          })}
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
