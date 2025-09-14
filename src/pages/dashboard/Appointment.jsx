// src/pages/dashboard/Pet.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Pet.css";
import { useGlobal } from "../../context/GlobalContext";

export default function Appointment() {
  const { appointments, getAllAppointments } = useGlobal()

  useEffect( () => {
    getAllAppointments()
  }, [])

  return (
    <Layout>
             <div className="pets-page container py-4">
               <div className="pets-header">
                 <h3 className="pets-title">Appointments</h3>
               </div>
       
               <p className="pets-subtitle">
                 All <span>appointments</span> are listed here.
               </p>
       
               <div className=" table-responsive">
                 <table className="pets-table table table-hover align-middle mb-0">
                   <thead className="table-dark">
                     <tr>
                       <th>#</th>
                       <th>PetName</th>
                       <th>OwnerName</th>
                       <th>VetName</th>
                       <th>Specialization</th>
                       <th>Status</th>
                       <th>Date</th>
                       <th>Actions</th>
                     </tr>
                   </thead>
    <tbody>
                     {appointments.map((appointment, index) => (
                       <tr key={appointment.id} className="fade-in">
                         <td>{index + 1}</td>
                         <td>{appointment.pet.name}</td>
                         <td>{appointment.owner.name}</td>
                         <td>{appointment.vet.name} years</td>
                         <td>{appointment.vet.specialization}</td>
                         <td>
                           <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                             {appointment.status}
                           </span>
                         </td>
   
                         <td>{new Date(appointment.date).toLocaleDateString()}</td>
                         <td>
                           <button onClick={() => handleDelete(appointment._id)} className="btn btn-outline-danger">Delete</button>
                         </td>
                         {/* <td className="text-center">
                           <button className="btn-action delete">🗑️</button>
                         </td> */}
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
       
               {/* <div className=" table-responsive">
                 <table className="pets-table table table-hover align-middle mb-0">
                   <thead className="table-dark">
                     <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Species</th>
                       <th>Breed</th>
                       <th>Age</th>
                       <th>Gender</th>
                       <th className="text-center">Actions</th>
                     </tr>
                   </thead>
                   <tbody>
                     {pets.map((pet, index) => (
                       <tr key={pet.id} className="fade-in">
                         <td>{index + 1}</td>
                         <td>{pet.name}</td>
                         <td>{pet.type}</td>
                         <td>{pet.age} years</td>
                         <td>{pet.owner}</td>
                         <td>
                           <span className={`status-badge ${pet.status.toLowerCase()}`}>
                             {pet.status}
                           </span>
                         </td>
                         <td className="text-center">
                           <Link
                             to={`/dashboard/updatepet/${pet.id}`}
                             className="btn-action edit"
                           >
                             ✏️
                           </Link>
                           <button className="btn-action delete">🗑️</button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div> */}
             </div>
           </Layout>
  );
}
