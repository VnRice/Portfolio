// import Header from './Header'
// import Footer from './Footer'
import React from 'react'
import './css/image.css'
import PIC from './images/plantup.png'
import plantdown from './images/plantdown.png'
import triup from './images/triup.png'
import tridown from './images/tridown.png'
import footer from './images/footer.png'



function Image() {
  return (
    <div className='wrapper' >
        <img src={PIC} alt={"leaf"} className='leaf'/> 
        {/* <img src={PIC} class="img-fluid" alt="Responsive image"></img> */}
        <img src={plantdown} alt={"leaf"} className='leaf2'/>
        <img src={triup} alt={"triangle"} className='triup'/>
        <img src={tridown} alt={"triangle"} className='tridown'/>
        {/* <img src={footer} alt={"footer"} className='footer'/> */}



    </div>
  );
}


export default Image;