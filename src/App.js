import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'


function App() {

  const{text}=useTypewriter({
    words:['Developer','Front End Developer','UI Developer','Vishwas Singh'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80
  })
  return (
    <h1 style={{margin:'50px'}}>
      I'm  {' '}
      <span style={{fontweight:'bold',color:'green'}}>
        {text}
      </span>
      <span style={{color:'red'}}>
      <Cursor/>
      </span>
     
    </h1>
  );
}

export default App;
