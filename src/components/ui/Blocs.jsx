import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Blocs = () => {
  const { genre } = useParams;

  const genres = [
    {
      name: "FOR YOU"

    },

    {
      name: "pop"
    },
    {
      name: "musique"

    },
    {
      name: "rock"
    },
    {
      name: "Jazz"
    },
    {
      name: "pop"
    },
    {
      name: "pop"
    }, {
      name: "pop"
    }, {
      name: "pop"
    }, {
      name: "pop"
    }, {
      name: "pop"
    }, {
      name: "pop"
    }

  ]
  const access_token = ""
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/albums?ids=2up3OPMp9Tb4dAKM2erWXQ,2noRn2Aes5aoNVsU6iWThc', {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        });
        setAlbums(response.data.albums);
        console.log(response.data.albums);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (

    <div className=" flex flex-col bg-customGray   w-full scroll-m-0 ">
      <div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-customGrayfont scrollbar-track-transparent group-hover:scrollbar-thumb-customGrayfont p-3 '>
        <div className="text-white  font-sans text-4xl mb-10 ml-2 mt-7 cursor-pointer font-bold ">
          Parcourir tout
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 h-full gap-y-2  ">
          <div className="group bg-customgray  w-full rounded-md shadow-md px-4 py-3 bg-[url('@/assets/backgrounds/musicCalm.jpg')] bg-center bg-cover h-40 min-h-10 relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0  bg-[url('@/assets/backgrounds/musicCalm.jpg')] bg-center bg-cover transform scale-100 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
            <p className="relative text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl font-poppins tracking-tight z-10">
              For you
            </p>
          </div>
          <div className="group bg-customgray w-full rounded-md shadow-md px-4 py-3 bg-[url('@/assets/backgrounds/pop.jpg')] bg-center bg-cover  h-40  min-h-10 relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('@/assets/backgrounds/pop.jpg')] bg-center bg-cover transform scale-100 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
            <p className="relative text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl font-poppins tracking-tight z-10">
              Dance
            </p>
          </div>
          <div className="group bg-customgray w-full rounded-md shadow-md px-4 py-3 bg-[url('@/assets/backgrounds/Beautiful.jpg')] bg-center bg-cover h-40 min-h-10 relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('@/assets/backgrounds/Beautiful.jpg')] bg-center bg-cover transform scale-100 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
            <p className="relative text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl font-poppins tracking-tight z-10">
              Musique
            </p>
          </div>
          <div className="group bg-customgray w-full rounded-md shadow-md px-4 py-3 bg-[url('@/assets/backgrounds/Sky.jpg')] bg-center bg-cover h-40 min-h-10 relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('@/assets/backgrounds/Sky.jpg')] bg-center bg-cover transform scale-100 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
            <p className="relative text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl font-poppins tracking-tight z-10">
              Calm
            </p>
          </div>
          <div className="group bg-customgray w-full rounded-md shadow-md px-4 py-3 bg-[url('@/assets/backgrounds/lonely.jpg')] bg-center bg-cover h-40 min-h-10 relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('@/assets/backgrounds/lonely.jpg')] bg-center bg-cover transform scale-100 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-500"></div>
            <p className="relative text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl font-poppins tracking-tight z-10">

              Piano
            </p>
          </div>
          <Link to={`/search/test`}>
            <div className=" group bg-customgray w-full rounded-md shadow-md px-4 py-3 bg-[url('@/assets/backgrounds/rock.jpg')] bg-center bg-cover h-40 min-h-10 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[url('@/assets/backgrounds/rock.jpg')] bg-center bg-cover transform scale-100 transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-500"></div>
              <div className="group relative bg-customgray w-full rounded-md shadow-md px-4 py-3 bg-[url('@/assets/backgrounds/rock.jpg')] bg-center bg-cover hover: cursor-pointer h-40 min-h-10 overflow-hidden">
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 text-white font-semibold text-center text-xl md:text-2xl lg:text-3xl font-poppins tracking-tight transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Rock
                </p>
              </div>
            </div>
          </Link>


          {genres.map((genre) => (
            <div key={genre.name} className="bg-customgray w-full rounded-md shadow-md px-4 py-3 bg-[url('@/assets/backgrounds/custom.jpg')] bg-center bg-cover  hover:scale-105 cursor-pointer h-40 min-h-10">
              <p className="text-white font-semibold text-center text-2xl ">{genre.name}</p>
            </div>
          ))}
        </div>
      </div>

      {albums.map((album) => (
        <div key={album.id} className="bg-customgray w-full rounded-md shadow-md px-4 py-3  ">
          <img src={album.images[0].url} alt={album.name} className="w-full h-auto rounded-md" />
          <p className="text-customwhitefont font-semibold">{album.name}</p>
          <p className="text-customwhitefont">{album.album_type}</p>
        </div>
      ))}
    </div>



  );
};

export default Blocs;
