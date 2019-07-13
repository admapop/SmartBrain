import React from 'react'

function FaceRecognition({ imageUrl }) {
    return (
        <div className='center'>
            <div className='absolute mt2'>
            <img id='inputimage' src={imageUrl} alt="result" width='500px' height='auto' />
            </div>
        </div>
    )
}

export default FaceRecognition
