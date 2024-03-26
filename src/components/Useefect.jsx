import React from 'react'
import   './Navbar.css'
import food21 from "../pic/t21.jpeg";
import food22 from "../pic/t22.jpeg";
function Useefect() {



  return (

    <div>
    <h1 className='title'>Our Delivery Service Provider</h1>
    <div className='image-grid1'>
 
<div className='image-card1'> 
<img src={food21}  />
    <div className='image-detail'>
   
<h4>Zomato.</h4>

    </div>
</div>


<div className='image-card1'> 
<img src={food22}  />
    <div className='image-detail'>
   
<h4>Swiggy.</h4>

    </div>
</div>

</div>
</div>

  )
}

export default Useefect