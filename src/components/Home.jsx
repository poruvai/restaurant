import React from 'react'

import meta from '../pic/t1.jpg'

import'./Home.css'

function Home() {
const handleClick =()=>{
window.open('https://youtu.be/Ofc4YbAoqdY','_blank')

}

const handleClickw =()=>{
    window.open('https://youtu.be/Ofc4YbAoqdY','_blank')
    
    }


  return (


  <section>
<div className='container'>
<div className="home-container">

<div className="home-content">
<h3 className='section_title'>Order now and let flavor knock at your door!"</h3>
<p>one delicious dish at a time</p>
<div className='home-btns'>
<button className='register-btn' onClick={handleClick}> 
    Get Started
</button>

<button className='register-btn' onClick={handleClickw}> 
    Watch now
</button>

</div>

</div>

<div className="home-img">
    <div className="home-img-wrapper">
<div className="box-01">

    <div className="box-img">
<img src={meta} alt=""/>

    </div>
</div>
<div className="whatsapp-container"> </div>
<h5 className='whatsapp-container1'> 500 + members

</h5>

    
    </div>


</div>
</div>
</div>


  </section>
 

  
  )
}

export default Home
