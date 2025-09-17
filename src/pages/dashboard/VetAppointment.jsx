import Layout from "../../components/dashboard/Layout";
import React, { useEffect } from "react";
import { useGlobal } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

function VetAppointment() {
  const { vetAppointments, getVetAppointments } = useGlobal()

  useEffect(() => {
    getVetAppointments()
  }, [])
  return (
    <Layout>
      <div className="pets-page container py-4">
        <div className="pets-header">
          <h3 className="pets-title">Veterianian Appointments</h3>
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
                <th>Owner Name</th>
                <th>Vet Name</th>
                <th>Specialization</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                vetAppointments.map((vetAppointment, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{vetAppointment.pet.name}</td>
                    <td>{vetAppointment.owner.name}</td>
                    <td>{vetAppointment.vet.name}</td>
                    <td>{vetAppointment.vet.specialization}</td>
                    <td>{vetAppointment.status}</td>
                    <td>{new Date(vetAppointment.date).toLocaleDateString()}</td>
                    <td>
                      <Link
                        to={`/dashboard/updateproduct/${vetAppointment._id}`}
                        className="btn-action edit"
                        state={vetAppointment}
                      >
                        ✏️
                      </Link>
                      <button onClick={() => handleDelete(vetAppointment._id)} className="btn-action delete">🗑️</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </Layout >
  )
}

export default VetAppointment