import { bitcoin, book, calender, card, circle, clothing, comment, rupee, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from "../../Utils/icons";
import Button from "../Button/Button";

const IncomeItem = ({ id, title, amount, type, date, category, description, deleteItem }) => {

    // Category Icon logic
    const categoryIcon = () => {
        switch (category) {
            case "Salary":
                return money;
            case "Freelancing":
                return freelance;
            case "investments":
                return stocks;
            case "stocks":
                return users;
            case "bitcoin":
                return bitcoin;
            case "bank":
                return card;
            case "youtube":
                return yt;
            default:
                return piggy;
        }
    }

    // Expense Category Icon logic
    const expenseCategoryIcon = () => {
        switch (category) {
            case "education":
                return book;
            case "groceries":
                return food;
            case "health":
                return medical;
            case "subscriptions":
                return tv;
            case "takeaway":
                return takeaway;
            case "clothing":
                return clothing;
            case "travelling":
                return freelance;
            case "other":
                return circle;
            default:
                return circle; // Default fallback
        }
    }

    return (
        <div className="flex items-center gap-4 bg-white bg-opacity-5 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">

            {/* Icon Section */}
            <div className="flex-shrink-0 bg-transparent p-3 rounded-full">
                <span className=" flex items-center justify-center text-white text-4xl">
                    {type === 'expense' ? expenseCategoryIcon() : categoryIcon()}
                </span>
            </div>

            {/* Content Section */}
            <div className="flex-grow">
                <h5 className="text-lg font-semibold text-white">{title}</h5>
                <p className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                    <span className="text-xl">{rupee}</span>${amount}
                </p>
                <p className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                    <span className="text-xl">{calender}</span>{date}
                </p>
                <p className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="text-xl">{comment}</span>{description}
                </p>
            </div>

            {/* Button Section */}
            <div className="flex-shrink-0 ml-4">
                <Button
                    icon={trash}
                    color="bg-red-700 hover:bg-red-600 focus:ring-red-500"
                    className="p-2 text-white rounded-full text-sm"
                    onClick={() => deleteItem(id)}
                />
            </div>
        </div>
    );
};

export default IncomeItem;
