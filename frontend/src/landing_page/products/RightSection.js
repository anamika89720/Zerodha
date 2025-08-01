import React, { PureComponent } from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription, 
    learnMore   
}) {
    return(
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                 <h1>{productName}</h1>
                 <p>{productDescription}</p>
                 <div className='mt-3'>
                    <a href={learnMore} style={{ textDecoration:"none"}}>Learn More</a>
                 </div>
            </div>
             <div className='col-6'>
                 <img src={imageURL} />
             </div>
        </div>
    </div>
    );
}
export default RightSection;