import { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../assets/NavLogo.png'

function Admin() {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        axios.get('https://mcet-backend.onrender.com/admin/complaints')
            .then(response => {
                setComplaints(response.data.complaints);
            })
            .catch(error => {
                console.error("There was an error fetching complaints!", error);
            });
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-indigo-500  shadow-lg">
                <div className="max-sm:w-full flex items-center justify-center mx-auto h-[60px] ">
                    <div className="flex items-center justify-center h-16">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10"
                                src={Logo} 
                                alt="MCET Logo"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Admin Panel Content */}
            <div className="p-8 max-w-7xl mx-auto">
                <h1 className="text-2xl font-semibold text-center mb-8 text-gray-800">Admin Panel</h1>
                <h2 className="text-2xl mb-6 font-semibold text-indigo-600">Complaints</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-lg rounded-lg">
                        <thead className="bg-indigo-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Complaint</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Attachment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.length > 0 ? (
                                complaints.map((complaint) => (
                                    <tr key={complaint.id} className="bg-white hover:bg-indigo-50 transition duration-300">
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">{complaint.id}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">{complaint.complaint}</td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm">
                                            {complaint.attachment ? (
                                                <a
                                                    href={`https://mcet-backend.onrender.com/${complaint.attachment}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-500 hover:underline"
                                                >
                                                    View Attachment
                                                </a>
                                            ) : (
                                                "No Attachment"
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="px-6 py-4 text-center text-sm text-gray-500" colSpan="3">No complaints found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin;
