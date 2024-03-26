
import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Reoutes, Routes } from 'react-router-dom'
import Usestate from './components/Usestate'
import Useefect from './components/Useefect'
import Usereducer from './components/Usereducer'
import Usecontext from './components/Usecontext'
import Useref from './components/Useref'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <div>
   <Router>
<Navbar/>

<Routes>
<Route path='/Usestate' element={<Usestate/>}/>
<Route path='/Useefect' element={<Useefect/>}/>
<Route path='/Usereducer' element={<Usereducer/>}/>
<Route path='/Usecontext' element={<Usecontext/>}/>
<Route path='/Useref' element={<Useref/>}/>
<Route path='/Home' element={<Home/>}/>
<Route index element={<Home />} />
<Route path='/Footer' element={<Footer/>}/>
</Routes>


   </Router>

   <Footer/>
    </div>

  );
}

export default App;
