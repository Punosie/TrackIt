import Form from "../Form/Form";
import { useGlobalContext } from "../../Context/GlobalContext";
import { useEffect } from "react";
import IncomeItem from "../IncomeItem/IncomeItem";

const formatDate = (date) => {
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
};

const Incomes = () => {
  const { getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="bg-transparent min-h-full w-full py-8">
      <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="flex items-center justify-between text-3xl font-semibold bg-transparent text-white">
          <span>Incomes</span>
          <h2 className="text-2xl font-bold text-green-500">
            Total Income: {totalIncome()} Rs.
          </h2>
        </h1>

        <div className="income-content h-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Income Section */}
          <div className="Form-container h-full bg-transparent p-6 rounded-lg shadow-lg col-span-1">
            <h2 className="text-xl font-semibold bg-transparent text-white mb-4">
              Add Income
            </h2>
            <Form />
          </div>

          {/* Income Overview Section */}
          <div className="incomes bg-transparent h-full p-6 rounded-lg shadow-lg col-span-2 overflow-y-auto">
            <h2 className="text-xl font-semibold bg-transparent text-white mb-4">
              Income Overview
            </h2>
            <div className="space-y-4 p-4">
              {incomes.length ? (
                incomes.map((income) => {
                  const { _id, title, amount, date, category, description } = income;

                  // Format the date before passing it to IncomeItem
                  const formattedDate = formatDate(date);

                  return (
                    <IncomeItem
                      key={_id}
                      id={_id}
                      title={title}
                      amount={amount}
                      date={formattedDate}
                      category={category}
                      description={description}
                      deleteItem={deleteIncome}
                    />
                  );
                })
              ) : (
                <p className="text-gray-300">No incomes added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incomes;
