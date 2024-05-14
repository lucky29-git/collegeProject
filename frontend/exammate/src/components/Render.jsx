import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Render.css'
export default function RenderPaper({title, files}){
    
    function HandleDownload(){
        const link = document.createElement('a')
        link.href = files;
        link.download = title + '.pdf';
        link.target = '_blank';
        link.click();
    }

    return <div className='custom flex mt-10 justify-between mx-10 relative' >
        <div className='flex items-center'>
        <FontAwesomeIcon icon={faFilePdf} className='text-3xl'/>
        {/* <div className='pl-10'>{title}</div> */}
        <div className='pl-10'>{title}</div>
        </div>

        <div className='flex gap-10 items-center'>
        <Link to={'/www.google.com'} >Preview </Link>
        {/* <button  >Preview</button> */}
        <button onClick={HandleDownload} >Download</button>
        </div>
    </div>
    
}