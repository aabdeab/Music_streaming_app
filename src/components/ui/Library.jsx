import React from 'react'

const Library = () => {
  return (
    <div className="flex flex-col  bg-customGrayBlack gap-[1rem]  items-stretch min-w-[200px]  ">
      <div className="w-full">
      {/* Navbar principale */}
      <div className="w-full  flex justify-between items-center px-1 basis-1/7">
        <div className="flex justify-start items-center text-customGrayfont h-full w-full px-1 gap-1 text-wrap ">
          <span className="font-bold  text-xs sm:text-sm hover:text-white transition duration-100 cursor-pointer ">
            Bibliothèque
          </span>
        </div>
        <section className="text-customGrayfont text-justify text-xl">
          +
        </section>
      </div>

      {/* Contenu principal */}
      <div className="text-white w-full px-2 flex flex-col  overflow-y-scroll scrollbar-none hover:scrollbar-thin scrollbar-thumb-customGrayfont scrollbar-track-transparent group-hover:scrollbar-thumb-customGrayfont gap-5 basis-3/7 max-h-[200px] ">
        <div className="bg-customElementsgray w-full gap-4 py-3 rounded-md flex flex-col pl-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-sm sm:text-xs text-wrap">
              Créez votre première playlist
            </h1>
            <h3>
              C'est simple, nous allons vous aider
            </h3>
          </div>
          <button className="text-black bg-white w-fit h-fit px-4 text-center rounded-2xl font-bold text-xs py-2">
            Créer une playlist
          </button>
        </div>
        <div className="bg-customElementsgray w-full gap-4 py-3 rounded-md flex flex-col px-5 text-xs">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold ">
              Cherchons quelques podcasts auxquels vous abonner
            </h1>
            <h3>
              Nous vous transmettrons les informations sur les nouveaux épisodes
            </h3>
          </div>
          <button className="text-black bg-white w-fit h-fit px-2 text-center rounded-2xl font-bold text-xs py-1 hover:scale-105 transition duration-200">
            Parcourir les podcasts
          </button>
        </div>
      </div>

      {/* Section des liens */}
      <div className="w-full px-[1rem]  flex flex-col py-2 gap-1 basis-3/7">
        <div className="w-full h-fit flex gap-2 flex-wrap gap-y-1">
          <span className="text-customGrayfont text-xs sm:text-sm">
            Légal
          </span>
          <span className="text-customGrayfont text-xs sm:text-sm">
            Centre de sécurité et de confidentialité
          </span>
          <span className="text-customGrayfont text-xs sm:text-sm">
            Protection des données
          </span>
          <span className="text-customGrayfont text-xs sm:text-sm">
            Cookies
          </span>
          <span className="text-customGrayfont text-xs sm:text-sm">
            A propos des pubs
          </span>
          <span className="text-customGrayfont text-xs sm:text-sm">
            Accessibilité
          </span>
        </div>
        <div className="text-white text-xs ">
          Cookies
        </div>
        <section className="w-full flex items-start">
          <button className="bg-black text-white rounded-full border border-white w-fit px-3 text-1 text-center hover:scale-105 transition duration-200">
            Français
          </button>
        </section>
      </div>
      </div>
    </div>
    
  )
}

export default Library
