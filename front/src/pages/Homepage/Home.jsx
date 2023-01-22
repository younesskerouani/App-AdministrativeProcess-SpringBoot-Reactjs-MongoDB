import React, {useState, useEffect } from 'react'
import Services from '../../components/ProcessusAdministartive/Services'
import Slider from '../../components/Slider'
import Topbar from '../../components/Topbar/Topbar'
import Login from '../Login/Login';
import axios from "axios"
import { useLocation } from "react-router-dom"

const Home = () => {
  const [posts,setPosts] = useState([]);
  
  useEffect(()=>{
    const fetchPosts = async() =>{
      const res = await axios.get("http://localhost:9099/post");
      setPosts(res.data);
    }

    fetchPosts();
  },[])


  return (
    <div>
      <Slider/>
      <Services posts={posts}/>
    </div>
  )
}

export default Home
