import React, { PureComponent } from 'react';

function Hero() {
    return ( 
      <section className='container-fluid' id='supportHero'>
        <div className='p-5' id='supportwrapper'>
            <h4>Support Portal</h4>
            <a href='' >Track Tickets</a>
        </div>
         <div className='row p-5 m-3' >
            <div className='col-6 p-5'>
            <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='Eg. how do i activate F&O'/><br/>
            <a href=''>Track account opening</a>
            <a href=''className='mx-3'>Track segment activation</a>
            <a href='' className='mx-3'>Intraday</a>
            <a href='' className='mx-3'>margins</a>
            <a href=''>Kite user manual</a>
            </div>
            <div className='col-6 p-5'>
            <h1 className='fs-3'>Featured</h1>
            <ol>
                <li><a href='' style={{lineHeight:"2"}}>Current Takeovers and Delisting - January 2024</a></li>
                <li><a href='' style={{lineHeight:"2"}}>Latest Intraday leverages-MIS & CO</a></li>
            </ol>
            </div>
        </div>
      </section> 
     );
}

export default Hero;