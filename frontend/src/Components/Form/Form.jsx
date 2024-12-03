import { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../Context/GlobalContext";
import Button from "../Button/Button";
import { plus } from "../../Utils/icons";

const Form = () => {
  const { addIncome, getIncomes } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Add state for success message

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({
      ...inputState,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setSuccessMessage("Income added successfully!"); // Set success message after adding income
    // Optionally, clear the form after submission
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
    // Optionally, hide success message after a few seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
    getIncomes();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full mx-auto h-full p-6 ps-0 bg-transparent rounded-lg shadow-md space-y-8 text-black dark:text-white"
    >
      <div className="input-control">
        <input
          type="text"
          name={"title"}
          value={title}
          placeholder="Title"
          onChange={handleInput("title")}
          className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="input-control">
        <input
          type="text"
          name={"amount"}
          value={amount}
          placeholder="Amount"
          onChange={handleInput("amount")}
          className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="input-control w-4/6">
        <Datepicker
          id="date"
          placeholderText="Date"
          selected={date}
          dateFormat={"dd/MM/yyyy"}
          onChange={(date) => setInputState({ ...inputState, date: date })}
          className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="input-control w">
        <select
          required
          value={category}
          id="category"
          onChange={handleInput("category")}
          className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        >
          <option value="" disabled>
            Select Income Category
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">YouTube</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
          className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div className="submit-btn flex justify-center">
        <Button
          name="Add Income"
          icon={plus}
          color="bg-purple-700 hover:bg-purple-600 focus:ring-purple-500"
        />
      </div>

      {successMessage && (
        <div className="mt-4 text-center text-green-500 dark:text-green-400">
          {successMessage}
        </div>
      )}
    </form>
  );
};

export default Form;
