import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./Topbar.css";
import { useContext } from "react";

export default function Topbar() {
  const {dispatch,user} = useContext(Context);


  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }


  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
           <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
         
          {user ? user.isAdmin &&
            <Link className="link" to="/AllDemande">
              DEMANDES
            </Link>
            :
            "ABOUT"
            }

          </li>
        
          {user ? user.isAdmin && <Link className="link" to="/ArchiveDemande">
            <li className="topListItem">ARCHIVE</li>
            </Link> 
            :
             "CONTACT"
            }
            
        
          <li className="topListItem">
        
        {user ? user.isAdmin && <Link className="link" to="/write">
               WRITE
            </Link>
            : 
            ""
            }
           
          </li>
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
        
            <img
              className="topImg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
         
        ) : (
          <ul className="topList">
            <li className="topListItem">
                  <Link className="link" to="/login">
                      LOGIN
                    </Link>
            </li>
            <li className="topListItem">
                 <Link className="link" to="/register">
                      REGISTER
                  </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}