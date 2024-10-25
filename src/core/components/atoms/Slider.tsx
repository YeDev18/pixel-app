import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Slider() {
  return (
    <div className="flex flex-col items-center mt-auto">
      {/* Chevron Up */}
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
        <FontAwesomeIcon icon={faChevronUp} size="1x" />
      </div>
      {/* Chevron Down */}
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white mt-2">
        <FontAwesomeIcon icon={faChevronDown} size="1x" />
      </div>
    </div>
  );
}

export default Slider;
