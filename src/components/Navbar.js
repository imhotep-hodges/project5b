import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    
    return (
        <div className="wrapper">
          
            <div className="nav-container">
            
                <h1 className="navBrand">
                Project #5 
                </h1>
                
                <ul className="btn-group-vertical" role="group" aria-label="Basic example">
                <li className="nav-item">
                    <Link to="/" className="nav-links"> 
                      <button type="button" class="btn btn-danger btn-lg">Home</button>
                    </Link>
                    </li>
                    <br />
                    <li className="nav-item">
                    <Link to="/GroupA.js" className="nav-links"> 
                      <button type="button" class="btn btn-danger btn-lg">Group A</button>
                    </Link>
                    </li>
                    <br />
                    <li className="nav-item">
                    <Link to="/GroupB.js" className="nav-links">  
                    <button type="button" class="btn btn-danger btn-lg">Group B</button>
                    </Link>
                    </li>
                    <br />
                    <li className="nav-item">
                    <Link to="/GroupC.js" className="nav-links">   
                    <button type="button" class="btn btn-danger btn-lg">Group C</button>
                    </Link>
                    </li>               
                </ul>

            </div>
           
        </div>
    );
};

export default Navbar;