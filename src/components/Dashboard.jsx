import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Navbar from './nav-components/Navbar';

// Register components for chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend,);
const Dashboard = () => {
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Income',
      data: [5000, 6000, 8000, 7000, 6500, 7200],
      backgroundColor: '#4ade80', // Tailwind's green-400
    },
    {
      label: 'Expenses',
      data: [4000, 4500, 5500, 5000, 4800, 5300],
      backgroundColor: '#f87171', // Tailwind's red-400
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Income vs Expenses',
    },
  },
};

const piecharts = {
  labels: ['New', 'Connected', 'Qualified', 'Disqualified', 'Proposal Sent', 'Converted'],
  datasets: [
    {
      label: 'Leads',
      data: [20, 35, 25, 10, 15, 5], // Example data
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="flex bg-gray-100">
     <Navbar/>
      {/*Main Content Area*/}
      <div className="flex flex-1 flex-col">
        {/*Top Header Sections*/}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAdd} className='text-xl'/>
              <FontAwesomeIcon icon={faBell} className='text-xl'/>
              <FontAwesomeIcon icon={faUserCircle} className='text-xl'/>
            </div>
        </header>
        {/*Dashboard Content*/}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/*Statics Cards*/}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">1,234</p>
              <p className="mt-2 text-sm text-gray-500">Updated just now</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800">Sales</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">$12,345</p>
              <p className="mt-2 text-sm text-gray-500">Last 24 hours</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800">Performance</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">87%</p>
              <p className="mt-2 text-sm text-gray-500">Compared to last week</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">5</p>
              <p className="mt-2 text-sm text-gray-500">Pending alerts</p>
            </div>
          </div>
          {/*Income Expences and sales statics*/}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
           
            <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-center mb-4">Income vs Expenses Chart</h2>
            <Bar data={data} options={options} />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-center text-xl font-semibold mb-4">Leads Distribution</h2>
            <Pie data={piecharts} />
            </div>
          </div>
         {/*Others Statics*/}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center justify-between">
                  <span>User logged in</span>
                  <span className="text-gray-500">2 hours ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>New sale</span>
                  <span className="text-gray-500">5 hours ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>System update</span>
                  <span className="text-gray-500">1 day ago</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">System Health</h3>
              <p className="mt-4 text-lg text-gray-600">All systems operational.</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Uptime: <span className="font-bold text-green-600">99.98%</span></p>
                <p className="text-sm text-gray-500">Response Time: <span className="font-bold text-blue-600">250ms</span></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}     

export default Dashboard