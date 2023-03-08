import React from 'react'
import './css/MainContent.css';
import PIC from './images/plantup.png'
import plantdown from './images/plantdown.png'
import triup from './images/triup.png'
import tridown from './images/tridown.png'
import footer from './images/footer.png'

function MainContent() {
    return (
        <div className='wrapper'>
            {/* Leaf background image */}
            <img src={PIC} alt={"leaf"} className='leaf'/>
            {/* Navbar */}

            <div className='text-container'>
                <h1 className='title'>Katelyn Copage</h1>
                {/* leaf 2 background img */}
                <img src={plantdown} alt={"leaf"} className='leaf2'/>
                <h2 className="about1">About</h2>
                <p className="text1">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
                <img src={triup} alt={"triangle"} className='triup'/>
                <img src={tridown} alt={"triangle"} className='tridown'/>
                <h2 className="projects1">Projects</h2>
                <p className="text2">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p className="text3">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p className="text4">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                {/* <!-- Insert JS Project Images  -->
                <!-- Insert JS Gallery Images  --> */}
                <h2 className="gallery1">Gallery</h2>
                <p className="text5">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <img src={footer} alt={"footer"} className='footer'/>

        </div>
    )
  }

  export default MainContent

