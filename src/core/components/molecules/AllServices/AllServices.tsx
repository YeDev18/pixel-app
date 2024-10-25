import React from 'react';
import servicedata from '../../../data/service.data';
import { Icon } from '@iconify/react';

function AllServices() {
  const firstRow = servicedata.slice(0, 2);
  const secondRow = servicedata.slice(2, 5);
  const thirdRow = servicedata.slice(5, 7);
  const fourthRow = servicedata.slice(7, 9);

  return (
    <div className='flex flex-col space-y-4 items-center justify-center'>

      {/* Première ligne avec 2 services */}
      <div className='flex flex-wrap justify-center gap-2 w-full '>
        {firstRow.map((service) => (
           <div
            key={service.id}
            className='group relative flex items-center justify-center gap-6 p-2 px-6 border border-gray-300 border-opacity-10 rounded-full shadow-lg h-[88px] transition-all ease-in duration-300 delay-150 w-fit hover:bg-[#0a2b38]'
          >
            {/* Icône par défaut */}
            <span className='text-[32px] transition-opacity duration-300 delay-75 group-hover:opacity-0'>
              {service.icon}
            </span>

            {/* Icône de flèche superposée, visible au survol */}
            <span className='absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-'>
                <div className='flex items-center justify-center w-[50px] h-[50px] bg-[rgba(0,0,0,0.3)] rounded-full'>
                    <Icon icon="solar:round-arrow-right-up-bold" style={{ color: '#ffffff', fontSize: '42px' }} />
                </div>
            </span>

            <span className='text-[32px]'>{service.name}</span>
          </div>
        ))}
      </div>

      {/* Deuxième ligne avec 3 services */}
      <div className='flex flex-wrap justify-center gap-2 w-full'>
        {secondRow.map((service) => (
           <div
            key={service.id}
            className='group relative flex items-center justify-center gap-6 p-2 px-6 border border-gray-300 border-opacity-10 rounded-full shadow-lg h-[88px] transition-all ease-in duration-300 delay-150 w-fit hover:bg-[#0a2b38]'
          >
            <span className='text-[32px] transition-opacity duration-300 delay-75 group-hover:opacity-0'>
              {service.icon}
            </span>

<span className='absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75'>
                <div className='flex items-center justify-center w-[50px] h-[50px] bg-[rgba(0,0,0,0.3)] rounded-full'>
                    <Icon icon="solar:round-arrow-right-up-bold" style={{ color: '#ffffff', fontSize: '42px' }} />
                </div>
            </span>

            <span className='text-[32px]'>{service.name}</span>
          </div>
        ))}
      </div>

      {/* Troisième ligne avec 2 services */}
      <div className='flex flex-wrap justify-center gap-2 w-full'>
        {thirdRow.map((service) => (
           <div
            key={service.id}
            className='group relative flex items-center justify-center gap-6 p-2 px-6 border border-gray-300 border-opacity-10 rounded-full shadow-lg h-[88px] transition-all ease-in duration-300 delay-150 w-fit hover:bg-[#0a2b38]'
          >
            <span className='text-[32px] transition-opacity duration-300 delay-75 group-hover:opacity-0'>
              {service.icon}
            </span>

            <span className='absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75'>
                <div className='flex items-center justify-center w-[50px] h-[50px] bg-[rgba(0,0,0,0.3)] rounded-full'>
                    <Icon icon="solar:round-arrow-right-up-bold" style={{ color: '#ffffff', fontSize: '42px' }} />
                </div>
            </span>

            <span className='text-[32px]'>{service.name}</span>
          </div>
        ))}
      </div>

      {/* Quatrième ligne avec 2 services */}
      <div className='flex flex-wrap justify-center gap-2 w-full'>
        {fourthRow.map((service) => (
          <div
            key={service.id}
            className='group relative flex items-center justify-center gap-6 p-2 px-6 border border-gray-300 border-opacity-10 rounded-full shadow-lg h-[88px] transition-all ease-in duration-300 delay-150 w-fit hover:bg-[#0a2b38]'
          >
            <span className='text-[32px] transition-opacity duration-300 delay-75 group-hover:opacity-0'>
              {service.icon}
            </span>

           <span className='absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75'>
                <div className='flex items-center justify-center w-[50px] h-[50px] bg-[rgba(0,0,0,0.3)] rounded-full'>
                    <Icon icon="solar:round-arrow-right-up-bold" style={{ color: '#ffffff', fontSize: '42px' }} />
                </div>
            </span>

            <span className='text-[32px]'>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllServices;
