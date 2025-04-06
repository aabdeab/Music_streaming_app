import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom';


function index() {
  const[Password,setPassword]=useState("")
  const[Email,setEmail]=useState("");
  const[JWTToken,setJwt]=useState("");
  const navigate = useNavigate();
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    const data={email:Email,password:Password}
    
    fetch("http://localhost:8080/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.jwtToken){
        setJwt(res.jwtToken);
        localStorage.setItem("jwt",res.jwtToken);
      
        navigate("/search",{state:{email:Email,password:Password}})
      }
    })
    .catch(err=>console.log(err+Password));
  }

  return (
    <div className='  w-screen bg-gradient-to-t from-black to-customElementsgray min-h-screen  border border-white overflow-x-hidden '>
      <div className='w-full  flex items-center justify-center md:p-8 box-border overflow-x-hidden'>
        <div className='min-h-screen bg-black  max-w-[800px] w-full flex justify-center overflow-x-hidden '>
          <div className='w-full  md:w-fit'>
            <div className='p-8 w-full border-box flex flex-col justify-start items-center gap-5'>
              <button className="w-fit h-fit text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                </svg>
              </button>
              <div className='text-3xl text-white font-bold text-center text-wrap '>
                J'ai un compte Spotify
              </div>
              <div className='w-full h-fit flex flex-col gap-4 border-b border-b-customGrayfont py-10 md:w-fit '>
                <Button variant="ghost" className='rounded-full text-white box-border w-full text-xl bg-transparent border border-white md:w-80 text-wrap h-fit  '><img className='w-9 h-auto ' src="/google.svg" alt="Example SVG" />Continuer avec Google</Button>
                <Button variant="ghost" className='rounded-full text-white box-border w-full text-xl bg-transparent border border-white md:w-80 text-wrap h-fit'><img className='w-9 h-auto' src="/facebook.svg" alt="Example SVG" />Continuer avec Facebook</Button>
                <Button variant="ghost" className='rounded-full text-white box-border w-full text-xl bg-transparent border border-white md:w-80 text-wrap h-fit'><img className='w-9 h-auto' src="/apple.svg" alt="Example SVG" />Continuer avec Apple</Button>
                <Button variant="ghost" className='rounded-full text-white box-border w-full text-xl bg-transparent border border-white md:w-80 text-wrap h-fit'>Continuer avec un numéro de télephone </Button>
              </div>

              <form onSubmit={handleSubmit} className='w-full h-fit md:w-fit flex flex-col gap-3 '>
                <label className='text-white text-base font-semibold md:w-80 w-full py-3 '> Email</label>
                <input value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' className='bg-transparent text-white rounded-md border border-customGrayfont hover:border-white py-4 px-8 box-border w-full md:w-80'></input>
                <label className='text-white text-base font-semibold md:w-80 w-full py-3 '> Password</label>
                <input value={Password} onChange={(e) =>setPassword(e.target.value)} type="password" placeholder='Enter Your Password' className='bg-transparent rounded-md border text-white border-customGrayfont hover:border-white py-4 px-8 box-border w-full md:w-80'></input>
                <Button  variant='destructive'>S'inscrire</Button>
              </form>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}
export default index;