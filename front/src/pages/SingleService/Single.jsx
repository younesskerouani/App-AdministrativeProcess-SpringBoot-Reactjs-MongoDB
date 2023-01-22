import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/SinglePost/SinglePost'
import './Single.css'

const Single = () => {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default Single
