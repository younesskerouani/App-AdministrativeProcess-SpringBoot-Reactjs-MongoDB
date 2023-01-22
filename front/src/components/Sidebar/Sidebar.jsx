import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://seeklogo.com/images/R/royaume-du-maroc-kingdom-of-morocco-logo-CE824856A6-seeklogo.com.png"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            
              administration
           
          </li>
          <li className="sidebarListItem">
           
              sante
           
          </li>
          <li className="sidebarListItem">
            
              services
           
          </li>
          <li className="sidebarListItem">
           
              Vehicule
            
          </li>
          <li className="sidebarListItem">
            
              Public
           
          </li>
          <li className="sidebarListItem">
           
              vision
            
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}