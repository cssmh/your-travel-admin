import { Chart } from "react-google-charts";

const Dashboard = () => {
  // Sample data for Sales Report
  const salesReportData = [
    ["Month", "Total Sales", "Total Visitors", "Total Orders"],
    ["Jan", 100, 200, 300],
    ["Feb", 150, 250, 350],
    ["Mar", 200, 300, 400],
    ["Apr", 250, 350, 450],
    ["May", 300, 400, 500],
    ["Jun", 400, 500, 600],
    ["Jul", 500, 600, 700],
    ["Aug", 600, 700, 800],
    ["Sep", 700, 800, 900],
    ["Oct", 800, 900, 1000],
    ["Nov", 850, 950, 1050],
    ["Dec", 900, 1000, 1100],
  ];

  const salesReportOptions = {
    title: "",
    legend: { position: "top", alignment: "center" },
    hAxis: { title: "Months", textStyle: { color: "#000" } },
    vAxis: {
      title: "Values",
      textStyle: { color: "#000" },
      ticks: [100, 200, 300, 400, 500, 600, 700, 800], // Customize ticks
    },
    colors: ["#000000", "#2ecc71", "#e0b0ff"],
    chartArea: { width: "80%", height: "70%" },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-4 gap-6">
        {/* First 8 smaller cards */}
        {[
          "Draft",
          "Booking",
          "Cancellation",
          "Message",
          "Total Sales",
          "Total Orders",
          "Total Visitors",
          "Total Revenue",
        ].map((title, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{title} 2023-2024</h3>
              <p className="text-3xl font-bold mt-2">36,987</p>
              <Chart
                chartType="LineChart"
                data={[
                  ["Year", "Value"],
                  ["2020", 100],
                  ["2021", 200],
                  ["2022", 300],
                  ["2023", 400],
                ]}
                options={{
                  legend: { position: "none" },
                  hAxis: { textPosition: "none" },
                  vAxis: { textPosition: "none" },
                  colors: ["#6b5b95"],
                  chartArea: { width: "80%", height: "60%" },
                }}
                width="100%"
                height="100px"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-green-500">+20% since last year</p>
              <button className="text-blue-500 hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Report */}
      <div className="mt-6 grid grid-cols-4 gap-6">
        <div className="col-span-3 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Sales Report </h3>

            <select
              className="border border-gray-300 rounded px-3 py-1 text-sm"
              defaultValue="Last 1 Year"
            >
              <option value="Last 1 Year">Last 1 Year</option>
              <option value="Every Month">Every Month</option>
            </select>
          </div>
          {/* <p>
            <span className="inline-flex items-center gap-2 ml-4">
              <span className="h-3 w-3 bg-black rounded-full"></span>
              <span className="text-sm">Total Sales</span>
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              <span className="text-sm">Total Visitors</span>
              <span className="h-3 w-3 bg-[#e0b0ff] rounded-full"></span>
              <span className="text-sm">Total Orders</span>
            </span>
          </p> */}
          <Chart
            chartType="LineChart"
            data={salesReportData}
            options={salesReportOptions}
            width="100%"
            height="300px"
          />
        </div>

        {/* Vertical Charts */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">Top Products</h3>
            <Chart
              chartType="PieChart"
              data={[
                ["Product", "Sales"],
                ["Product A", 500],
                ["Product B", 300],
                ["Product C", 200],
              ]}
              options={{
                legend: { position: "bottom" },
                colors: ["#3498db", "#2ecc71", "#e74c3c"],
              }}
              width="100%"
              height="200px"
            />
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">Customer Growth</h3>
            <Chart
              chartType="BarChart"
              data={[
                ["Month", "Customers"],
                ["Jan", 50],
                ["Feb", 75],
                ["Mar", 100],
              ]}
              options={{
                legend: { position: "none" },
                colors: ["#9b59b6"],
              }}
              width="100%"
              height="200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
