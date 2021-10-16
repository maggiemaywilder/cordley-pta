import React from 'react';
import '../App.css';
import BasicCard from './BasicCard';

function Body() {
    return (
        <div className='main' >
            <div className="container-md pt-2 pb-3 px-5">
                <BasicCard />  
            </div>
            
        </div>
    )
}

export default Body;