import Chart from "../Chart/Chart";

const Dashboard = () => {
  return (
    <div className="bg-transparent min-h-full w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-white mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Section */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Income and Expense Overview</h2>
            <Chart />
          </div>

          {/* Total Stats Section (Optional) */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
            <div className="space-y-4">
              {/* You can display other total stats like total income/expense here */}
              <p className="text-lg text-gray-300">Total Income: ₹10000</p>
              <p className="text-lg text-gray-300">Total Expense: ₹5000</p>
              {/* More stats as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
