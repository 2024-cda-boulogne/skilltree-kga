import React from 'react';
import '../Test.css';
import '../Home.css';

function Test() {
  return (
    <div>
      <div className='containerhud'>
      <div>
        <img src="./cédric.png" alt="" id='m-top-50' className='photomg' />
      </div>
        <div className='testcontour' id='rotate0'></div>
        <div className='testcontour' id='rotate90'></div>
        <div className='testcontour' id='rotate180'></div>
        <div className='testcontour' id='rotate270'></div>
      </div>
    </div>
  );
}

export default Test;
