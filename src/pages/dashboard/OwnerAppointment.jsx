import Layout from "../../components/dashboard/Layout";
import React, { useEffect } from "react";
import { useGlobal } from "../../context/GlobalContext";

function OwnerAppointment() {
  const { ownerAppointments, getOwnerAppointments, deleteAppointment } = useGlobal()
    console.log(ownerAppointments);
    
  useEffect( () => {
    getOwnerAppointments()
  }, [])

  const handleDelete = async(id) => {
    try{
        const confirm = window.confirm("Are you sure you want to delete?")
        if(confirm){
            const response =await deleteAppointment(id)
            alert("Appointment deleted.")
        }

    }catch(err){
        console.log(err);
    }finally{
        getOwnerAppointments()
    }
  }
  return (
        <Layout>
          <div className="pets-page container py-4">
            <div className="pets-header">
              <h3 className="pets-title">Owner Appointment</h3>
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
                  {ownerAppointments.map((ownerAppointment, index) => (
                    <tr key={ownerAppointment.id} className="fade-in">
                      <td>{index + 1}</td>
                      <td>{ownerAppointment.pet.name}</td>
                      <td>{ownerAppointment.owner.name}</td>
                      <td>{ownerAppointment.vet.name} years</td>
                      <td>{ownerAppointment.vet.specialization}</td>
                      <td>
                        <span className={`status-badge ${ownerAppointment.status.toLowerCase()}`}>
                          {ownerAppointment.status}
                        </span>
                      </td>

                      <td>{new Date(ownerAppointment.date).toLocaleDateString()}</td>
                      <td>
                        <button onClick={() => handleDelete(ownerAppointment._id)} className="btn btn-outline-danger">Delete</button>
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
  )
}

export default OwnerAppointment