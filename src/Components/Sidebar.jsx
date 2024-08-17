import React from 'react';

function Sidebar({ isOpen, toggleSidebar, onMenuClick }) {
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                    onClick={toggleSidebar} // Close the sidebar when backdrop is clicked
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform duration-500 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
                style={{ width: '250px' }}
            >
                <div className="p-4 relative">
                    {/* Close Button */}
                    <button
                        className="text-gray-500 absolute top-4 right-4 hover:text-gray-700 active:text-red-600"
                        onClick={toggleSidebar} // Close the sidebar
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Sidebar Links */}
                    <ul className="mt-20 space-y-4">
                        <li className="py-2">
                            <button
                                onClick={() => onMenuClick('busBooking')} // Pass the component to be rendered
                                className="text-gray-800 block w-full text-left px-4 py-2 hover:text-indigo-600"
                            >
                                Bus Booking
                            </button>
                        </li>
                        <li className="py-2">
                            <button
                                onClick={() => onMenuClick('hostelComplaints')} // Pass other components similarly
                                className="text-gray-800 block w-full text-left px-4 py-2 hover:text-indigo-600"
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
