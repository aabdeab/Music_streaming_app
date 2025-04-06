import React from 'react'
import MenuIcon from '@/assets/bar.png'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import menu from '@/assets/menu.svg'


const Slidebar = ({Email}) => {
  const FirstTwoLetters=Email ? Email.slice(0,2).toUpperCase():" ";

  return (
    <div className="w-full bg-black basis-2/8 flex justify-between items-center flex-grow py-3">
      <div className='text-white flex-1 h-full  flex justify-center items-center ml-1 ' >
        <button className="w-[100%] h-[100%]">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
          </svg>
        </button>
      </div>
      <div className="flex justify-between  h-[90%] items-center gap-[1rem] flex-1 min-w-[75%] sm:min-w-[50%] ">
        <button className="text-slate-300 rounded-full border  w-12 h-12 sm:flex justify-center items-center  bg-customGray border-none  hidden hover:scale-105  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
          </svg>
        </button>

        <div className="flex justify-between text-slate-300 border-2 border-transparent w-fit  h-full items-center rounded-xl bg-customGray gap-5 px-4 focus-within:border-white hover:ring-1 hover:ring-white  hover:scale-102  min-w-35 flex-grow ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            className="h-full w-[80%]  text-white placeholder-gray-400 font-sans bg-customGray focus:outline-none border-r cursor-pointer focus:cursor-text"
            placeholder="Que souhaitez-vous écouter aujourd'hui"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="3vh" height="3vh" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
          </svg>
        </div>
      </div>
      <div className="gap-3  flex-1 flex mr-1 justify-end flex-grow h-full items-center p-2">
        <button className="rounded-full text-center" >{FirstTwoLetters}</button>

        <button className="bg-black text-white  text-sm rounded-md font-circular hover:scale-105 hidden sm:inline-block text-center" >
          S'inscrire
        </button>
        <button className="bg-white text-black rounded-2xl font-circular font-bold  h-fit px-4 py-4 text-sm  max-h-[100%] hover:scale-105 hover:bg-gray-200 transition duration-200 hidden sm:inline-block  whitespace-nowrap">
          Se connecter
        </button>

        <Sheet >
          <SheetTrigger><button className='text-white sm:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white ">
            <SheetHeader>
              <SheetTitle className="text-white">
                <div className='flex justify-between mt-4'>
                <button className="bg-black text-white  text-lg rounded-md font-circular hover:scale-105  text-center" >
                  S'inscrire
                </button>
                <button className="bg-white text-black rounded-2xl font-circular font-bold  h-fit px-4 py-4 text-lg  hover:scale-105 hover:bg-gray-200 transition duration-200   whitespace-nowrap">
                  Se connecter
                </button>
                </div>
              </SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>


      </div>


    </div>
  )
}
export default Slidebar;