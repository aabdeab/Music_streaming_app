import React, { useState } from 'react'
import { Button } from '@/components/ui/button'


function index() {
  const[Password,setPassword]=useState("")
  const[Email,setEmail]=useState("")
  const[ActiveComponent,setActiveComponent]=useState('one')
  return (
    <div className='  w-screen bg-gradient-to-t from-black to-customElementsgray min-h-screen   overflow-x-hidden '>
      <div className='w-full  flex items-center justify-center md:p-8 box-border overflow-x-hidden'>
        <div className="w-96 ">
          <div className='w-full  md:w-fit  '>
            <div className='p-8 w-full border-box flex flex-col justify-start items-center gap-5 '>
              <button className="w-fit h-fit text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                </svg>
              </button>
              <div className='text-5xl text-white font-bold text-center text-wrap '>
              Inscrivez-vous pour commencer à écouter
              </div>
              <div className='w-fit h-fit flex flex-col gap-4 border-b border-b-customGrayfont py-10 md:w-fit '>
                  <label className="text-white w-80 font-bold text-md"> Adresse e-mail</label>
                  <input className='text-white border border-gray-700 hover:border-white w-80 h-fit text-md p-2 border-box bg-transparent' placeholder='Enter your email'></input>
                  <label className="text-white w-80 font-bold text-md"> Password</label>
                  <input className=' type="password "text-white border border-gray-700 hover:border-white w-80 h-fit text-md p-2 border-box bg-transparent' placeholder='Enter your email'></input>
                  <Button onclic="setActiveComponent('two')" variant="ghost" className="bg-green-500 text-center text-black w-80 rounded-full font-bold text-current text-md py-4 border-box h-fit  "> Sign Up</Button>
              </div>
              <hr></hr>
              <div className='w-full h-fit md:w-fit flex flex-col gap-3 '>
                <Button variant="ghost" className='rounded-full text-white box-border w-full text-xl bg-transparent border border-white md:w-80 text-wrap h-fit  '><img className='w-9 h-auto ' src="/google.svg" alt="Example SVG" />Continuer avec Google</Button>
                <Button variant="ghost" className='rounded-full text-white box-border w-full text-xl bg-transparent border border-white md:w-80 text-wrap h-fit'><img className='w-9 h-auto' src="/facebook.svg" alt="Example SVG" />Continuer avec Facebook</Button>
                <Button variant="ghost" className='rounded-full text-white box-border w-full text-xl bg-transparent border border-white md:w-80 text-wrap h-fit'><img className='w-9 h-auto' src="/apple.svg" alt="Example SVG" />Continuer avec Apple</Button>
                <Button variant="ghost" className='rounded-full text-white box-border w-full text-xl bg-transparent border border-white md:w-80 text-wrap h-fit'>Continuer avec un numéro de télephone </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    
  )
}

export default index
