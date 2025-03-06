import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 h-24 bg-neutral-800 text-white">
      <Link to="/" className="font-bold text-3xl text-yellow-400">
        Expense Trackkerr.
      </Link>

      <div className="flex gap-8">
        <Link
          to="/"
          className="px-4 py-2 border border-amber-300 text-xl rounded-xl hover:text-amber-400 hover:bg-neutral-900 transition-colors duration-300"
        >
          DashBorad
        </Link>
        <Link
          to="/add-expense"
          className="px-4 py-2 border border-amber-300 text-xl rounded-xl hover:text-amber-400 hover:bg-neutral-900 transition-colors duration-300"
        >
          Add Expense
        </Link>
        <Link
          to="/add-income"
          className="px-4 py-2 border border-amber-300 text-xl rounded-xl hover:text-amber-400 hover:bg-neutral-900 transition-colors  duration-300"
        >
          Add Income
        </Link>
      </div>
    </div>
  );
};

export default Header;
