import React from 'react'
import './Counter.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'

function Counter() {
    const [CounterOn, setCounterOn] = useState(false);
  return (
    <div className="counter-section">
 
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>

            <div className='counter-container'>
            <div className='counter-One'>
            <h1 className='counter-number'> 
           {CounterOn && <CountUp start={0} end ={4} duration={1} delay={0}/> }+ 
             </h1>
            <p className='counter-text'> Happy Clients</p>            
            </div>
            <div className='counter-Two'>
            <h1 className='counter-numberPro'> 
            {CounterOn && <CountUp start={0} end ={5} duration={1} delay={0}/> }+ 
             </h1>
            <p className='counter-text'>Projects Completed</p>            
            </div>
            <div className='counter-Three'>
            <h1 className='counter-numberSkill'> 
            {CounterOn && <CountUp start={0} end ={15} duration={1} delay={0}/> }+ 
            </h1>
            <p className='counter-text'> Skills Acquired</p> 
            </div>
        </div>
           
   </ScrollTrigger>   </div>
  )
}

export default Counter