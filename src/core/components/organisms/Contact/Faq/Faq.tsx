'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ContactData } from '@/core/data/contact.data';

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='h-fit p-8 flex flex-col md:flex-row mt-[180px]'>
      {/* Titre de la FAQ */}
      <div className='flex justify-center mb-8 md:w-[40%]'>
        <h1 className='text-[52px] '>
          Foire{' '}
          <span className='inline md:block'>Aux Questions</span>
        
        </h1>
      </div>

      {/* Section FAQ */}
      <div className='space-y-4 w-full md:w-[60%]'>
        {ContactData.faq.map((item, index) => (
          <div key={index} className='border-b border-[rgba(255,255,255,0.1)]'>
            <div
              className='flex items-center justify-between cursor-pointer py-4'
              onClick={() => toggleAnswer(index)}
            >
              <span className='text-[18px] font-semibold'>{item.question}</span>
              <FontAwesomeIcon
                icon={openIndex === index ? faMinus : faPlus}
                className='ml-auto'
              />
            </div>
            
            <div
              className={`transition-[max-height] ease-in-out duration-700 overflow-hidden ${
                openIndex === index ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <div
                className={`transition-opacity duration-500 ease-in-out ${
                  openIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className='py-2'>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
