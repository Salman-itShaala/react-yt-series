import React, { useState } from "react";

const AddExpense = ({ expenseList, setExpenseList }) => {
  const [expenseTitle, setexpenseTitle] = useState("");
  const [expenseAmount, setexpenseAmount] = useState("");

  function handleFromSubmit(e) {
    e.preventDefault();

    console.log("Tryng to submit form");

    if (expenseAmount < 0) {
      return alert("expense should be positive");
    }

    const expenseObj = {
      expenseAmount,
      expenseTitle,
      id: Date.now(),
    };

    setExpenseList((prev) => [...prev, expenseObj]);

    setexpenseAmount("");
    setexpenseTitle("");
  }

  return (
    <div className="px-20 py-4">
      <h1 className="text-3xl font-bold">You can add expense here</h1>
      <div className="w-full min-h-[76vh] flex items-center justify-center ">
        <form
          onSubmit={(e) => handleFromSubmit(e)}
          className="flex min-w-md border-2 border-amber-400 flex-col gap-8 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-8 rounded-2xl"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="expense-title">expense title</label>
            <input
              className="border-2 border-amber-400 rounded-sm"
              type="text"
              name="expense-title"
              id="expense-title"
              required
              value={expenseTitle}
              onChange={(e) => setexpenseTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="expense-amount">expense Amount</label>
            <input
              className="border-2 border-amber-400 rounded-sm"
              type="number"
              name="expense-amount"
              id="expense-amount"
              required
              value={expenseAmount}
              onChange={(e) => setexpenseAmount(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="py-1 border border-amber-300 rounded-xl hover:text-amber-400  hover:bg-neutral-900 transition-colors duration-300"
              type="submit"
            >
              Add expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
