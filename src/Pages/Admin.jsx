import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
            <h2 className="text-2xl mb-4">Complaints</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">ID</th>
                            <th className="px-4 py-2 border">Complaint</th>
                            <th className="px-4 py-2 border">Attachment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaints.map((complaint) => (
                            <tr key={complaint.id}>
                                <td className="border px-4 py-2">{complaint.id}</td>
                                <td className="border px-4 py-2">{complaint.complaint}</td>
                                <td className="border px-4 py-2">
                                    {complaint.attachment ? (
                                        <a href={`https://mcet-backend.onrender.com/${complaint.attachment}`} target="_blank" rel="noopener noreferrer">
                                            View Attachment
                                        </a>
                                    ) : (
                                        "No Attachment"
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;
