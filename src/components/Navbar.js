import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    
    return (
        <div className="wrapper">
          <div className="navbar">
            <div className="nav-container">
            
                <h1 className="navBrand">
                Project #5 
                </h1>
                
                <ul className="btn-group-vertical" role="group" aria-label="Basic example">

                    <li className="nav-item">
                    <Link to="#" className="nav-links"> 
                      <button type="button" class="btn btn-danger btn-lg">Question #1</button>
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to="#" className="nav-links">  
                    <button type="button" class="btn btn-danger btn-lg">Question #2</button>
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link to="#" className="nav-links">   
                    <button type="button" class="btn btn-danger btn-lg">Question #3</button>
                    </Link>
                    </li>               
                </ul>

            </div>
         </div> 
        </div>
    );
};

export default Navbar;