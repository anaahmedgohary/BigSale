import React, { useEffect } from 'react';
import './nopage.css';

export default function NoPage()
{
  useEffect(() => { document.title = "404 Not Found!" }, []);
  return (
      <div className='not-found'>
          <a href="/" className='font-bold'>
            Go Back Home!
          </a>
    </div>
  )
}


