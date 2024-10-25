import React from 'react';
import { Icon } from '@iconify/react';

function Button() {
  return (
    <div className="bg-white flex rounded-full">
      <a
        className="text-black font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <span>En Savoir Plus</span>
        <Icon icon="solar:round-arrow-right-up-bold" style={{ color: '#000', fontSize: '24px' }} />
      </a>
    </div>
  );
}

export default Button;
