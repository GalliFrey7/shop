import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, amet elige
            ndi distinctio nam totam voluptatem doloribus numquam sunt optio esse voluptatibus delectus eius maxime,
             at quidem nemo incidunt ipsum aliquid. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem commodi
              aliquam esse ut veritatis dignissimos ad reprehenderit illum maiores dicta! Odio quidem sit, tempora cupiditate
               quibusdam nobis sunt repudiandae aliquam.
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit eligendi, voluptatibus 
            modi dolore possimus? Quasi at saepe, expedita nemo quae cum debitis, aliquam corporis delectus placeat fugit vitae labore.</p>

            </p>
        </div>
    </div>
  )
}

export default ProductDescription