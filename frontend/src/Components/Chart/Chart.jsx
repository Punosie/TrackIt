import React, { useEffect } from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../Context/GlobalContext';

// Register necessary chart.js components
ChartJs.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

// Format date function
const formatDate = (date) => {
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
};

const Chart = () => {
  const { getIncomes, getExpenses, incomes, expenses } = useGlobalContext();

  // Fetch incomes and expenses data on component mount
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, [getIncomes, getExpenses]);

  // Log incomes and expenses to verify data
  console.log("Incomes:", incomes);
  console.log("Expenses:", expenses);

  // Make sure incomes and expenses are valid
  if (!incomes || !expenses || incomes.length === 0 || expenses.length === 0) {
    return <div>Loading data or No data available...</div>;
  }

  const data = {
    labels: incomes.map((income) => formatDate(income.date)),
    datasets: [
      {
        label: 'Income',
        data: incomes.map((income) => income.amount),
        fill: false,
        backgroundColor: 'green',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Expense',
        data: expenses.map((expense) => expense.amount),
        fill: false,
        backgroundColor: 'red',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
      <Line data={data} />
    </div>
  );
};

export default Chart;
