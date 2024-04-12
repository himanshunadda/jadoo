import React from 'react';
import '../NewsLetter.css';

function NewsLetter() {
  return (
    <div className='news__letter'>
      <div className="container">
        <h2 className='heading'>Subscribe to get information, latest   news and other interesting offers about Cobham</h2>
        <div className="submit">
            <input type="text" name="" id="input" />
            <button className='sub__btn'>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default NewsLetter
