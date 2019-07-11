import React from 'react'

function FaceRecognition({ imageUrl }) {
    return (
        <div className='center'>
            <img src={imageUrl} alt="result"/>
        </div>
    )
}

export default FaceRecognition
