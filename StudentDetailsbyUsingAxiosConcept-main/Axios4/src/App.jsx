import React from 'react'

import Body from './Body'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const App = () => {
  return (
    <>
    <center>

    <div className='text-primary'>
      < Navbar />
    </div>

  <div className='bg-light'>
      <Body />
    </div>


    </center>
      
    </>
    
  )
}

export default App
