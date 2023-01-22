import Services from "./components/ProcessusAdministartive/Services";
import Slider from "./components/Slider";
import Topbar from "./components/Topbar/Topbar";
import Demande from "./pages/DeposerDemande/Demande";
import Home from "./pages/Homepage/Home";
import Write from "./pages/PosterService/Write";
import Single from "./pages/SingleService/Single";
import {Routes, Route} from 'react-router-dom';
import Login from "./pages/Login/Login";
import { useContext, useState } from "react";
import { Context } from "./Context/Context";
import AdminDemande from "./pages/AdminDemande/AdminDemande";
import AdminArchive from "./pages/AdminDemande/AdminArchive";


function App() {
  const signup = false;
  const {user} = useContext(Context);
  
  return (
    <div className="App">
       <Topbar/>
        
      <Routes>
         <Route  exact path="/" element = { <Home/> }/>
         <Route path="/AllDemande" element = {user ? user.isAdmin && <AdminDemande/> : <Home/>}/>
         <Route path="/ArchiveDemande" element = {user ? user.isAdmin &&<AdminArchive/> : <Home/>} />
         <Route  path="/services" element = { <Home/> }/> 
         <Route  path="/register" element = {user ? <Home/>  : <Login signup={true} /> } />
         <Route  path="/login" element = {user ? <Home/> : <Login signup={signup}/>}/>
         <Route  path="/post/:id" element = { <Single/> } />
         <Route  path="/write" element = {user ? user.isAdmin && <Write /> : <Login signup={signup}/>}/>
         <Route  path="/Demande/:id" element = {user ? <Demande/> : <Login signup={signup}/>}/>
         
      </Routes>

        
    </div>
  );
}

export default App;
