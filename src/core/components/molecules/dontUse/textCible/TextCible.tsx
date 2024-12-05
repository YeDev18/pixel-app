import Button from '@/core/components/atoms/Button'
import React from 'react'

function TextCible() {
  return (
    <div className='flex px-8 space-x-8 ml-1  justify-between items-center'>
        <div className=' font-400 text-[54px] ml-20'>Prenez Part  A Votre Succès <br />Avec <span className='text-blue-700 font-bold '>Pix Digital <span className='text-[70px] text-[#DC0000]'>.</span> </span></div>
       <div className='ml-auto'>
            <Button className=" w-fit gap-4 text-[#04374b] ">
                Contactez-Nous Maintenant
            </Button>
       </div>
       
    </div>
  )
}

export default TextCible