import React from 'react'
import Button from './ahmed/button'
import ButtonGradient from '../assets/svg/ButtonGradient'
import news1 from '../assets/news/news1.png'
function News() {
  return (
    <div className='min-w-svw min-h-svh text-white'>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] '>
        <Button className='mt-20 px-0.5 '> 
          <img src={news1} alt='' className='h-9 relative inset-0' style={{top:'-65px',left:'3px'}}/>
        </Button>
      </div>
      <ButtonGradient/>
    </div>
  )
}

export default News