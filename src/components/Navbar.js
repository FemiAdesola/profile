import React from 'react'
import { NavLink, } from 'react-router-dom'

const Navbar = () => {
     
    return (
        <div className='Navbar'>
           <li><NavLink to='/' className="ok"
                activeClassName="active" exact>Home
                </NavLink></li>
            
            <li><NavLink to='/About' className="ok"
                activeClassName="active">About
                </NavLink></li>
            <li><NavLink to='/Contacts' className="ok"
                activeClassName="active">Contact
                </NavLink></li>
             <li><NavLink to='/Experience' className="ok"
                activeClassName="active"> Work Experience
                </NavLink></li>
            <li><NavLink to='/Skills' className="ok"
                activeClassName="active">Skills
                </NavLink></li>
            <li><NavLink to='/education' className="ok"
                activeClassName="active">
                Education</NavLink></li>
            <li><NavLink to='/project' className="ok"
                activeClassName="active">
                Projects</NavLink></li>
            <li><NavLink to='/Testimonials' className="ok"
                activeClassName="active">Testimonials
                </NavLink></li>
            
            

        </div>
    )
}

export default Navbar