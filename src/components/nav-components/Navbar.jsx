import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faChartLine, faCogs, faUser, faFolder, faPieChart, faMailBulk , faGift, faTasks, faPoll, faBell, faInbox, faUserCircle } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [issidebarOpen , isSetOpenSidebar] = useState(true);
  const toggleSidbar = () =>
    {
      isSetOpenSidebar(!issidebarOpen);
    }

  return (
    <div>
         {/*Sidebar*/}
      <div className={`bg-blue-900 text-white ${issidebarOpen ? 'w-60' : 'w-18'} transition-all durations-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-xl font-bold ${!issidebarOpen && 'hidden'}`}>Dashboard</h1>
          <button onClick={toggleSidbar}> 
              <FontAwesomeIcon icon={faBars} className='text-white'/>
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-blue-700">
              <Link to="/lead" className="flex items-center">
                <FontAwesomeIcon icon={faHome}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Lead</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <Link to="/contact" className="flex items-center">
                <FontAwesomeIcon icon={faFolder} />
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Contact</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#account" className="flex items-center">
                <FontAwesomeIcon icon={faPieChart}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Account</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#role" className="flex items-center">
                <FontAwesomeIcon icon={faUserCircle}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Roles</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#deal" className="flex items-center">
                <FontAwesomeIcon icon={faGift}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Deals</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#task" className="flex items-center">
                <FontAwesomeIcon icon={faTasks}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Task</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#activity" className="flex items-center">
                <FontAwesomeIcon icon={faUser} />
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Activities</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#campaign" className="flex items-center">
                <FontAwesomeIcon icon={faPoll}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Campaign</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#email" className="flex items-center">
                <FontAwesomeIcon icon={faMailBulk}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Email</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#quote" className="flex itmes-center">
                <FontAwesomeIcon icon={faBell}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Get a Quote</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#invoice" className="flex items-center">
                <FontAwesomeIcon icon={faInbox}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Invoice</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#analytics" className="flex items-center">
                <FontAwesomeIcon icon={faChartLine}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Analytics</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-700">
              <a href="#setting" className="flex items-center">
                <FontAwesomeIcon icon={faCogs}/>
                <span className={`ml-4 ${!issidebarOpen && 'hidden'}`}>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar