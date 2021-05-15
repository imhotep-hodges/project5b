import React from 'react';






function Navbar() {
    
    return (
        <div className="wrapper">
          <div className="navbar">
            <div className="nav-container">
            
                <h1 className="navBrand">
                Larry's ToDo App! 
                </h1>
                
                <ul className='nav-menu'>
                    <li className="nav-item">
                       
                       Home
                       
                    </li>
                    <li className="nav-item">
                       
                       Category 1
                      
                    </li>
                    <li className="nav-item">
                       
                       Category 2
                   
                    </li>               
                </ul>

            </div>
         </div> 
        </div>
    );
};

export default Navbar;