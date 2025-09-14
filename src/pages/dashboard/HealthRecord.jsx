// import React from "react";
// import "./HealthRecord.css";
// import Sidebar from "../../components/dashboard/Sidebar";
// import Header from "../../components/dashboard/Header";

// export default function HealthRecord({ isOpen, toggleSidebar }) {
//   return (
//     <div className="dashboard-layout">
//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <Header toggleSidebar={toggleSidebar} />

//         {/* Page Content */}
//         <div className="healthrecord-page">
//           <h2>🏥 Pet Health Records</h2>
//           <p>Track your pets' medical history and vaccination records.</p>

//           <table className="health-table">
//             <thead>
//               <tr>
//                 <th>Pet Name</th>
//                 <th>Last Checkup</th>
//                 <th>Next Vaccine</th>
//                 <th>Doctor</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Browny 🐕</td>
//                 <td>12-Aug-2025</td>
//                 <td>15-Sep-2025</td>
//                 <td>Dr. Ahmad</td>
//               </tr>
//               <tr>
//                 <td>Kitty 🐈</td>
//                 <td>05-Jul-2025</td>
//                 <td>20-Sep-2025</td>
//                 <td>Dr. Sara</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState } from "react";
import "./HealthRecord.css";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function HealthRecord({ isOpen, toggleSidebar }) {
  const [records, setRecords] = useState([
    {
      pet: "Browny 🐕",
      lastCheckup: "12-Aug-2025",
      nextVaccine: "15-Sep-2025",
      doctor: "Dr. Ahmad",
    },
    {
      pet: "Kitty 🐈",
      lastCheckup: "05-Jul-2025",
      nextVaccine: "20-Sep-2025",
      doctor: "Dr. Sara",
    },
  ]);

  const handleAdd = () => {
    alert("👉 Add new record form khulega!");
  };

  const handleEdit = (index) => {
    alert(`✏️ Edit karna hai: ${records[index].pet}`);
  };

  const handleDelete = (index) => {
    if (window.confirm("❌ Kya aap is record ko delete karna chahte ho?")) {
      setRecords(records.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <div className="healthrecord-page">
          <div className="page-header">
            <h2>🏥 Pet Health Records</h2>
            <button className="add-btn" onClick={handleAdd}>
              <FaPlus /> Add Record
            </button>
          </div>

          <p>Track your pets' medical history and vaccination records.</p>

          <table className="health-table">
            <thead>
              <tr>
                <th>Pet Name</th>
                <th>Last Checkup</th>
                <th>Next Vaccine</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td data-label="Pet Name">{record.pet}</td>
                  <td data-label="Last Checkup">{record.lastCheckup}</td>
                  <td data-label="Next Vaccine">{record.nextVaccine}</td>
                  <td data-label="Doctor">{record.doctor}</td>
                  <td className="actions-col" data-label="Actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
