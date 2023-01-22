import { useState } from "react";
import "./Write.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Write() {
  const [file, setFile] = useState(null);
  const [title, setTitle]= useState("");
  const [desc, setDesc] = useState("");
  const [documents, setDocuments] = useState(['']);

  let navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const newPost = {
      title,
      desc,
      documents
    };

    if(file){
      const data =new FormData();
      const filename =file.name;
       data.append("name",filename);
       data.append("document",file);
       newPost.photo = filename;
        try{
          await axios.post("http://localhost:9099/document",data); 
            }catch(err){
                 }
    }
   
      try{
       const res = await axios.post("http://localhost:9099/post",newPost);
        //window.location.replace("http://localhost:8080/post/"+res.data._id); 
        navigate("/");
      }catch(err){
       }
    
  };



    const handleChange = (value, index) => {
      const newdocuments = documents.map((documentsItem, documentsIndex) => {
        return documentsIndex === index ? value : documentsItem
      })
      setDocuments(newdocuments);

    }

  console.log(documents);

  return (
    <div className="write">
      {file ?
      (<img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />) : 
        <img
        className="writeImg"
        src="https://www.maprabat.ma/map/uploads/2020/03/new_img_5922.jpg"
        alt=""
      />
      }
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup2">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          
          <input id="fileInput" 
          type="file" 
          style={{ display: "none" }} 
          onChange={(e)=>setFile(e.target.files[0])} />
         
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>

        

          <div className="writeFormGroup1">
              <div>
                <button onClick={(e) => {
                  e.preventDefault();
                  setDocuments([...documents, ''])
                 }}
                 className="AddButton"
             >
                       Add Documents
              </button>

              {
                  documents.map((item, index) => {
                    return <div style={{ display: 'flex' }}>
                      <input value={item} onChange={(e) => { 
                        e.preventDefault();
                        handleChange(e.target.value, index)}} 
                         className="inputDocs"
                        />
                      <button
                        onClick={() => {
                          const newarr = documents.filter((i, j) => {
                            return index !== j
                          })
                          console.log(newarr)
                          setDocuments(newarr)
                        }}
                        className="deleteButton"
                      >
                        DELETE
                      </button>
                    </div>
                  })
              }
              </div>
           

          </div>

        <div className="writeFormGroup2">
          <textarea
            className="writeInput writeText"
            placeholder="Enter service description..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            autoFocus={true}
          />
        </div>

        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}