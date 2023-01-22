
import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./SinglePost.css";
import { Context  } from "../../Context/Context";
import { useState , useEffect} from 'react';
import axios from "axios";

export default function SinglePost() {

  let navigate = useNavigate();

  const PublicFolder= "http://localhost:9099/document/"

  const {user} = useContext(Context)
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const[post,setPost] = useState({})
  console.log(path);

  useEffect(() => {
    const getPost =async() => {
      const res = await axios.get("http://localhost:9099/post/" +path);
      setPost(res.data);
      console.log(res);
    };

    getPost();
  },[path])

 console.log(post.documents);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
       
        <Link to={`/Demande/${post.postId}`} >
        <span className="settingsTitleUpdate">DEPOSER LA DEMANDE</span>
        </Link>
      
        {post.photo ? 
       <img
          className="singlePostImg"
          src={PublicFolder+post.photo}
          alt=""
        /> 
        :
        <img
          className="singlePostImg"
          src="https://www.puratos.fr/content/dam/france/visuel-indisponible.jpg/jcr:content/renditions/cq5dam.web.800.800.jpeg"
          alt=""
        />
          
       }
        <h1 className="singlePostTitle">
          {post.title}
          {/* <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div> */}
        </h1>
      
        <p className="singlePostDesc">
          {post.desc}
        </p>
        
          <div className='singlePostDocs'>
            <h2>Documents demandés : </h2>
              {post.documents?.map((item,index) => 
                    <p>{item}</p>
              ) } 
           </div>

      </div>
    </div>
  );
  
}