import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>

<div className='navbar-brand'>KAPLPATHI BRAHMANA BHAVAN</div>
<ul className='navbar-nav'>
<li className='nav-item'>
<Link to ='/Usestate' className='nav-link'> Home</Link>
</li>
<li className='nav-item'>
  <Link to ='/Useefect' className='nav-link'> Services</Link>

</li>
<li className='nav-item'>
  <Link to='/Usereducer' className='nav-link'> Special Dishes</Link>
 </li>
 <li className='nav-item'>
  <Link to='/Usecontext' className='nav-link'> About Us</Link>
 </li>
 <li className='nav-item'>
  <Link to='/Useref' className='nav-link'>Contact Us</Link>
 </li>


</ul>
    </nav>
   
  )
}

export default Navbar