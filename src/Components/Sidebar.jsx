import { FaTimes } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar, onMenuClick, activeMenu }) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-60 z-40"
                    onClick={toggleSidebar} 
                />
            )}

            <aside
                className={`fixed top-0 left-0 h-full bg-indigo-300 shadow-lg z-50 transition-transform duration-300 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
                style={{ width: '220px' }}
            >
                <div className="p-4 relative">
                    <button
                        className="text-gray-600 absolute top-4 right-4 hover:text-gray-900 focus:outline-none transition-colors duration-300"
                        onClick={toggleSidebar} 
                    >
                        <FaTimes className="h-5 w-5" />
                    </button>

                    <ul className="mt-16 space-y-2">
                        <li>
                            <button
                                onClick={() => onMenuClick('busBooking')}
                                className={`block w-full text-left px-4 py-2 rounded-md font-semibold transition-colors duration-300 
                                    ${activeMenu === 'busBooking' ? 
                                    'bg-indigo-500 text-white border-l-4 border-indigo-600' : 
                                    'bg-gray-100 text-gray-800 hover:bg-indigo-100 border-l-4 border-transparent'}
                                    ${activeMenu === 'busBooking' ? 
                                    'bg-indigo-600' : ''}
                                    ${activeMenu !== 'busBooking' ? 
                                    'hover:bg-indigo-200' : ''}
                                    ${activeMenu !== 'busBooking' ? 
                                    'active:bg-indigo-300' : ''}`}
                            >
                                Bus Booking
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => onMenuClick('hostelComplaints')} 
                                className={`block w-full text-left px-4 py-2 rounded-md font-semibold transition-colors duration-300 
                                    ${activeMenu === 'hostelComplaints' ? 
                                    'bg-indigo-500 text-white border-l-4 border-indigo-600' : 
                                    'bg-gray-100 text-gray-800 hover:bg-indigo-100 border-l-4 border-transparent'}
                                    ${activeMenu === 'hostelComplaints' ? 
                                    'bg-indigo-600' : ''}
                                    ${activeMenu !== 'hostelComplaints' ? 
                                    'hover:bg-indigo-200' : ''}
                                    ${activeMenu !== 'hostelComplaints' ? 
                                    'active:bg-indigo-300' : ''}`}
                            >
                                Hostel Complaints
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
