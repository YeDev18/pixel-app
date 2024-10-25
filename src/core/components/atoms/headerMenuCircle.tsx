import React from 'react';
import grid from '../../../app/img/grid.svg';

function HeaderMenuCircle() {
  return (
    <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
      <img src={grid} alt="Grid Icon" className="w-8 h-8" />
    </div>
  );
}

export default HeaderMenuCircle;
