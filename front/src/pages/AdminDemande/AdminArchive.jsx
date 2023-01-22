import React from 'react'
import DemandeArchive from '../../components/DemandePourAdmin/DemandeArchive'
import DemandeList from '../../components/DemandePourAdmin/DemandeList'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./AdminArchive.css"

const AdminArchive = () => {
  return (
    <div className='AllDemande'>
      <DemandeArchive/>
      <Sidebar/>
    </div>
  )
}

export default AdminArchive
