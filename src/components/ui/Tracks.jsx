import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PlayCircle, Clock, ChevronLeft } from 'lucide-react';

const Tracks = () => {
  const { genre } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);

  // Données avec images fonctionnelles
  const mockTracks = [
    {
      id: '1',
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      album: 'Led Zeppelin IV',
      duration: '8:02',
      image: 'https://i.imgur.com/Qg7sDZz.jpg',
      plays: '1,234,567',
    },
    {
      id: '2',
      title: "Sweet Child O' Mine",
      artist: 'Guns N\' Roses',
      album: 'Appetite for Destruction',
      duration: '5:56',
      image: 'https://i.imgur.com/OWlBRF8.jpg',
      plays: '986,432',
    },
    {
      id: '3',
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'A Night at the Opera',
      duration: '5:55',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png',
      plays: '2,345,678',
    },
    {
      id: '4',
      title: 'Nothing Else Matters',
      artist: 'Metallica',
      album: 'Metallica',
      duration: '6:28',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Metallica_-_Metallica_cover.jpg',
      plays: '876,543',
    },
    {
      id: '5',
      title: 'Hotel California',
      artist: 'Eagles',
      album: 'Hotel California',
      duration: '6:30',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg',
      plays: '1,567,890',
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setTracks(mockTracks);
      setIsLoading(false);
    }, 1000);
  }, [genre]);

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#121212] to-[#1e1e1e] text-white w-full select-none ">
      <div className="relative h-72  bg-gradient-to-b from-fuchsia-700 to-indigo-red-200">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="absolute bottom-8 left-8">
          <h1
            className="text-6xl font-semibold capitalize mb-4  bg-white bg-clip-text text-transparent animate-gradient cursor-pointer "
          >
            {genre}
          </h1>
          <p className="text-sm text-gray-300">{tracks.length} titres</p>
        </div>
      </div>

      {/* Liste des tracks */}
      <div
  className="p-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-customGrayfont scrollbar-track-transparent transition-all duration-2000 ease-in-out "
>
        <div className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-800">
          <div>#</div>
          <div>TITRE</div>
          <div>ALBUM</div>
          <div>LECTURES</div>
          <div className="flex justify-end">
            <Clock size={16} />
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="mt-4 flex flex-grow-1 flex-col">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className="group grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-3 rounded-md hover:bg-white/10 transition-colors items-center cursor-pointer"
              >
                <div className="text-gray-400 group-hover:hidden">{index + 1}</div>
                <PlayCircle className="hidden group-hover:block text-green-600" size={20} />

                <div className="flex items-center gap-4">
                  <img src={track.image} alt={track.title} className="w-10 h-10 rounded" />
                  <div>
                    <div className="text-white font-medium hover:underline">{track.title}</div>
                    <div className="text-sm text-gray-400">{track.artist}</div>
                  </div>
                </div>

                <div className="text-gray-400">{track.album}</div>
                <div className="text-gray-400">{track.plays}</div>
                <div className="text-gray-400 text-right">{track.duration}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracks;
