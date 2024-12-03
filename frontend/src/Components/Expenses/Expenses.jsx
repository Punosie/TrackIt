import ExpenseForm from "../Form/ExpenseForm";
import { useGlobalContext } from "../../Context/GlobalContext";
import { useEffect } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const formatDate = (date) => {
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
};

const Expenses = () => {
  const { getExpenses, expenses, deleteExpense, totalExpense } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="bg-transparent min-h-full w-full py-8">
      <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="flex items-center justify-between text-3xl font-semibold bg-transparent text-white">
          <span>Expenses</span>
          <h2 className="text-2xl font-bold text-red-500">
            Total Expense: {totalExpense()} Rs.
          </h2>
        </h1>

        <div className="expense-content h-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Expense Section */}
          <div className="Form-container h-full bg-transparent p-6 rounded-lg shadow-lg col-span-1">
            <h2 className="text-xl font-semibold bg-transparent text-white mb-4">
              Add Expense
            </h2>
            <ExpenseForm />
          </div>

          {/* Expense Overview Section */}
          <div className="expenses bg-transparent h-full p-6 rounded-lg shadow-lg col-span-2 overflow-y-auto">
            <h2 className="text-xl font-semibold bg-transparent text-white mb-4">
              Expense Overview
            </h2>
            <div className="space-y-4 p-4">
              {expenses.length ? (
                expenses.map((expense) => {
                  const { _id, title, amount, date, category, description } = expense;

                  // Format the date before passing it to ExpenseItem
                  const formattedDate = formatDate(date);

                  return (
                    <ExpenseItem
                      key={_id}
                      id={_id}
                      title={title}
                      amount={amount}
                      date={formattedDate}
                      category={category}
                      description={description}
                      deleteItem={deleteExpense}
                    />
                  );
                })
              ) : (
                <p className="text-gray-300">No expenses added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
