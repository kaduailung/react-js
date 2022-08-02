import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
    return(
        <div className="nav-container">
            
            <ul className="nav-inner-container">
                <div className="left">
                    <Link to="/"><li>Riamei</li></Link>
                </div>
                <div className="right">
                    <Link to="/"><li>Home</li></Link>
                    {/* <Link to="/about"><li>About</li></Link> */}
                    <Link to="/project"><li>Project</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </div>
               
                
            </ul>
        </div>
    )
}

export default Navbar;