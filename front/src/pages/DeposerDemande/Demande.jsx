import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Demande.css';
import { Context  } from "../../Context/Context";
import { useState , useEffect} from 'react';
import axios from "axios";

export default function Demande () {

  const {user} = useContext(Context);
  const {cin} = user;

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  let navigate = useNavigate();

  const[post,setPost] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([])
 const [documents,setDocuments] = useState([]);
  

    useEffect(() => {
      const getPost =async() => {
        const res = await axios.get("http://localhost:9099/post/" +path);
        setPost(res.data);
        console.log(res);
      };

      getPost();
    },[path]);

    const {title} = post;

    const handleUploadFiles = files => {
      const uploaded = [...uploadedFiles];
      const Docname = [...documents];
      files.some((file) => {
          if (uploaded.findIndex((f) => f.name === file.name) === -1) {
              uploaded.push(file);
              Docname.push(file.name);
          }
      })
      setUploadedFiles(uploaded)
      setDocuments(Docname);
    }
   
    const handleFileEvent = (e) => {
      const chosenFiles = Array.prototype.slice.call(e.target.files)
      handleUploadFiles(chosenFiles);
     }
     
     console.log(documents);



   const handleSubmit = async(e) =>{
      e.preventDefault();
        const newDemande = {
          title,
          cin,
          documents
        };

        if(uploadedFiles){
          const res = uploadedFiles.map(async(file)=>
             {
              const data =new FormData();
               const fiLname =file.name;
               data.append("name",fiLname);
               data.append("document",file);
              await axios.post("http://localhost:9099/document",data)
            }
          );
        }

        try{
          const res = await axios.post("http://localhost:9099/demande",newDemande);
           //window.location.replace("http://localhost:8080/post/"+res.data._id); 
           navigate("/");
         }catch(err){
          }

     }


  return (
    <div className="settings">
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">Saisir Vos informations</span>
      </div>
      <form className="settingsForm" onSubmit={handleSubmit}>
        

          {
            post.documents?.map((d,index)=>
            <>
            <label>Deposer {d}</label>
              <div className="settingsPP">
                  <input
                    id="fileInput"
                    type="file"
                    name={d}
                    onChange={handleFileEvent}
                    className="settingsPPInput"
                  />
              </div>
            </>
            )
          }
       
        <button className="settingsSubmitButton" type="submit">
          DEPOSER
        </button>
      </form>
    </div>
        <Sidebar/>
    </div> 
  )
}

