import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from './nav-components/Navbar';
import ContactTbl from './tbl-components/ContactTbl';

const Contact = () => {
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
          <ContactTbl/>
        </main>
      </div>
    </div>
  )
}     

export default Contact;