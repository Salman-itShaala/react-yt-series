import React, { useState } from "react";

const AddIncome = ({ incomeList, setIncomeList }) => {
  const [incomeTitle, setIncomeTitle] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  function handleFromSubmit(e) {
    e.preventDefault();

    console.log("Tryng to submit form");

    if (incomeAmount < 0) {
      return alert("Income should be positive");
    }

    const incomeObj = {
      incomeAmount,
      incomeTitle,
      id: Date.now(),
    };

    setIncomeList((prev) => [...prev, incomeObj]);

    setIncomeAmount("");
    setIncomeTitle("");
  }

  return (
    <div className="px-20 py-4">
      <h1 className="font-bold  text-center text-4xl ">Add Income 💵</h1>

      <div className="w-full min-h-[76vh] flex items-center justify-center ">
        <form
          onSubmit={(e) => handleFromSubmit(e)}
          className="flex min-w-md border-2 border-amber-400 flex-col gap-8 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-8 rounded-2xl"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="income-title">Income title</label>
            <input
              className="border-2 border-amber-400 rounded-sm"
              type="text"
              name="income-title"
              id="income-title"
              required
              value={incomeTitle}
              onChange={(e) => setIncomeTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="income-amount">Income Amount</label>
            <input
              className="border-2 border-amber-400 rounded-sm"
              type="number"
              name="income-amount"
              id="income-amount"
              required
              value={incomeAmount}
              onChange={(e) => setIncomeAmount(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="py-1 border border-amber-300 rounded-xl hover:text-amber-400  hover:bg-neutral-900 transition-colors duration-300"
              type="submit"
            >
              Add Income
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncome;
