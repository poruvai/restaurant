import React, { useState } from 'react'

import   './Navbar.css'

import food from "../pic/t10.jpg";
import food11 from "../pic/t11.jpg";
import food12 from "../pic/t12.jpg";
import food14 from "../pic/t15.jpg";
import food10 from "../pic/t3.jpg";
import food16 from "../pic/t16.jpg";
import food9 from "../pic/t9.jpg";
import food7 from "../pic/t8.jpg";
function Usereducer() {



const data =[
    {
     id:1,
     url:  'https://www.istockphoto.com/photo/palak-paneer-gm646332150-117360751',
     title: 'Rotti'
    },
    {
        id:2,
        url:  'https://www.istockphoto.com/photo/palak-paneer-gm646332150-117360751',
        title: 'Rotti'
       },

       {
        id:3,
        url:  'https://www.istockphoto.com/photo/palak-paneer-gm646332150-117360751',
        title: 'Rotti'
       },
       {
        id:4,
        url:  'https://www.istockphoto.com/photo/palak-paneer-gm646332150-117360751',
        title: 'Rotti'
       },
       {
        id:5,
        url:  'https://www.istockphoto.com/photo/palak-paneer-gm646332150-117360751',
        title: 'Rotti'
       }
   ]

  return (
    <div>
    <h1 className='title'>Special Dishes</h1>
    <div className='image-grid1'>
 
<div className='image-card1'> 
<img src={food}  />

    
    <div className='image-detail'>
   
<h4>Rotti paneer Butter masala.</h4>
<button> Order Now</button>
    </div>
</div>

<div className='image-card1'> 
<img src={food11}  />
   
    <div className='image-detail'>
   
<h4>Chenna fried masala</h4>
<button> Order Now</button>
    </div>
</div>



<div className='image-card1'> 
<img src={food12}  />
    <div className='image-detail'>
<h4>Aloo Porotta.</h4>
<button> Order Now</button>
    </div>
</div>

<div className='image-card1'> 
<img src={food10}  />
    <div className='image-detail'>
<h4>Biriyani.</h4>
<button> Order Now</button>
    </div>
</div>

<div className='image-card1'> 
<img src={food14}  />
    <div className='image-detail'>
<h4>Rotti subji Rice.</h4>
<button> Order Now</button>
    </div>
</div>
<div className='image-card1'> 
<img src={food9}  />
    <div className='image-detail'>
<h4>Mega Thali .</h4>
<button className='button'>  Order Now</button>
    </div>
</div>

<div className='image-card1'> 
<img src={food16}  />
    <div className='image-detail'>
<h4>Aloo gopi.</h4>
<button> Order Now</button>
    </div>
</div>
<div className='image-card1'> 
<img src={food7}  />
    <div className='image-detail'>
<h4>Chappathi puthina paneer.</h4>
<button> Order Now</button>
    </div>
</div>


    </div>

   </div>
  )
}

export default Usereducer