import React from 'react';
import './scss/global-imports.scss';

import {Features, Footer, GlobalNetwork, Testimonials, Header, Info, Navbar, Plans, Subscribe} from './components';

const App = () => {
  return (
    <div>
      <div className='container'>
        <Navbar />
        <Header />
        <Info />
        <Features />
        <Plans />
        <GlobalNetwork />  
      </div>
      <Testimonials />

      <div className='container'>
        < Subscribe />
      </div>

      <div style={{backgroundColor: "var(--gray)"}}>
        <div className='container'>
          < Footer />
        </div>
      </div>
     

      
    </div>
  )
}

export default App