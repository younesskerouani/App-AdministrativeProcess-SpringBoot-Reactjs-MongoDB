import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import "./Login.css";
import axios from "axios";

const Login = ({signup}) => {
  // using Context Api:
 const {user, dispatch, isFetching} = useContext(Context);
  /////////////////////////////////////////////////////
    const [isSignUp, setisSignUp] = useState(signup);
    const [error, setError] = useState(false);

    let navigate=useNavigate();
    const [user1,setUser]= useState({
          nom: "",
          prenom: "",
          cin: "",
          password: ""
      });

    const{nom,prenom,cin,password} = user1;
    
    const handleChange = (e)=>{
      setUser({...user1, [e.target.name]: e.target.value})
    }

    // on click submit:
  const handleSubmit =async (e) => {
    e.preventDefault();

    
    dispatch({type: "LOGIN_START"});

      try{
      
          if(isSignUp){
            const res = await axios.post("http://localhost:9099/user/register", user1); 
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
          }else{

            const res = await axios.post("http://localhost:9099/user/login", user1);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
          }
        
      }catch (err){
        setError(true);
        dispatch({ type: "LOGIN_FAILURE" });
      }
}


  return (

    <div className="login">
       <span className="loginTitle">{isSignUp ? "Register" : "Login "}</span>
      
      <form className="loginForm" onSubmit={handleSubmit}>
       
        {
          isSignUp && 
          <>
                <label>Nom</label>

                <input className="loginInput" 
                    type="text"
                    placeholder="Entrer votre nom..." 
                    name="nom"
                    value={nom}
                    onChange={handleChange}
                />

               <label>Prenom</label>

                 <input className="loginInput" 
                  type="text"
                  placeholder="Entrer votre prenom..." 
                   name="prenom"
                   value={prenom}
                   onChange={handleChange}
                    />
          </>
        }

          <label>CIN</label>
            <input className="loginInput"
              type="text"
              placeholder="Entrer votre CIN..."
              name="cin"
              value={cin}
              onChange={handleChange}
              />

         <label>Password</label>

        <input className="loginInput" 
            type="password"
            placeholder="Enter your password..." 
            name="password"
           value={password}
           onChange={handleChange}
        />
       
         <span style={{margin: '14px' , fontSize: '12px' , cursor: "pointer"}} 
         onClick = {()=> { setisSignUp((prev)=>!prev); } } >
          {isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign Up"}
          </span>
          

        <button className="loginButton" disabled={isFetching} >{isFetching? "Loading..." :  isSignUp ? "register" : "Login"}</button>
        { error && <span style={{color: "red", marginTop: "10px"}}> Something went wrong !</span> }
      </form>
    </div>
  )
}

export default Login
