import React from 'react'
import DemandeList from '../../components/DemandePourAdmin/DemandeList'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./AdminDemande.css"

const AdminDemande = () => {
  return (
    <div className='AllDemande'>
      <DemandeList/>
      <Sidebar/>
    </div>
  )
}

export default AdminDemande
