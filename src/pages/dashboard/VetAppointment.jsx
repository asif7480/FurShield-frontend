import Layout from "../../components/dashboard/Layout";
import React from "react";

function VetAppointment() {
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
                    <th>Name</th>
                    <th>Species</th>
                    <th>Breed</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
    
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
  )
}

export default VetAppointment