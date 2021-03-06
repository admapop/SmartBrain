import React from 'react'
import './ImageLinkForm.css'

function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <p className='f3'> {'This Magic Brain will detect faces in your pictures. Try it!'}</p>
        
        <div className='center'>
            <div className='center form pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange} />
            <button className='w-30 grow f4 link ph3 pv dib white' 
            style={{background: '#3C3C3C'}}
            onClick={onButtonSubmit}
            >Detect</button>
            </div>
        </div>
        </div>
    )
}

export default ImageLinkForm
