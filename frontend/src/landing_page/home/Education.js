import React from 'react';

function Education() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
            <div className='col-6'>
                <img src='media/images/education.svg' style={{width:"70%"}}/>
            </div>
            <div className='col-6'>
                <h1 className='mb-3 fs-2'>Free and open market education</h1>
                <p>Varsity,the largest online stock market education book in the
                <br/>covering everything  from the basics to advance trading.</p>
                <a href='' style={{textDecoration:"none"}}>Versity
                <i className="fa fa-arrow-right"></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in
                <br/>india for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TrandingQ&A
                <i className="fa fa-arrow-right"></i></a>
            </div>
        </div>
        </div>
    );

}

export default Education;