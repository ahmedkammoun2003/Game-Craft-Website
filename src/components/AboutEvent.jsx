import React from 'react'
import { benefits } from "../constants/index.js";


function AboutEvent() {
  return (
    
    <div className='bg-purple-950 h-[32rem]'>
  <div className='text-white text-2xl font-stalinist mx-4 pt-2'>About Event</div>
  
  <div className="flex flex-wrap gap-10 mb-10">
    
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:50%_50%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <img
                    src={item.image}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  
                  
                  
                </div>
              </div>

              

        

            </div>
          ))}
        </div>
  </div>  
  )
}

export default AboutEvent
