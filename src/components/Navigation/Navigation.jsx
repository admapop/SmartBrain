import React from 'react';

function Navigation ({ onRouteChange }) {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            {/* arrow function needed to run the route change when we click not when we render */}
        </nav>
    );
}

export default Navigation