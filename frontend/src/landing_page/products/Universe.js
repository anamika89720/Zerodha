import React, { PureComponent } from 'react';

function Universe() {
    return ( 
<div className='container mt-5'>
    <div className='text-center'>
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
    </div>

    <div className='row text-center'>
        <div className='col-4 p-3 mt-5'>
            <img src="media/images/zerodhaFundhouse.png" className="h-20 object-contain mx-auto" />
            <p className='text-muted text-small'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-5'>
            <img src="media/images/sensibullLogo.svg" />
            <p className='text-muted text-small'></p>
        </div>
        <div className='col-4 p-3 mt-5'>
            <img src="media/images/streakLogo.png" />
            <p className='text-muted text-small'></p>
        </div>
    </div>

    <div className='row text-center'>
        <div className='col-4 p-3 mt-5'>
            <img src="media/images/smallcaseLogo.png" />
            <p className='text-muted text-small'>Thematic investment platform</p>
        </div>
        <div className='col-4 p-3 mt-5'>
            <img src="media/images/dittoLogo.png" />
            <p className='text-muted text-small'></p>
        </div>
        <div className='col-4 p-3 mt-5'>
            <img src="media/images/goldenpiLogo.png" />
            <p className='text-muted text-small'></p>
        </div>
    </div>

    <div className='text-center'>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%"}}>Signup Now</button>
    </div>
</div>
    );
}

export default Universe;
