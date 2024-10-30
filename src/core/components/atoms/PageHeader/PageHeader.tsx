import React from 'react';

function PageHeader() {
  return (
    <div className='w-full rounded-[50px] bgheader h-[412px] z-100 flex flex-col items-center justify-center pt-44'>
        {/* <div className='bgheader absolute z-40'> </div> */}
      <h1 className='text-3xl font-bold'>NOM PAGE</h1>
      <p className='text-lg'>description de page</p>
    </div>
  );
}

export default PageHeader;
