import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, ChevronLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

function Infos() {
     const navigate = useNavigate();
    return (
        <div className="flex flex-col bg-black min-h-screen w-full overflow-y-scroll  scrollbar-thin scrollbar-thumb-customGrayfont scrollbar-track-transparent group-hover:scrollbar-thumb-customGrayfont">
            {/* Header */}
            <div className="h-72 bg-gradient-to-b from-emerald-900 to-black w-full relative p-8 ">
                <h1 className="text-7xl font-bold text-white mt-16 select-none">Musique</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>

            <div className="p-8 space-y-12 select-none">
                {/* Artists */}
                <section >
                    <h2 className="text-2xl font-bold text-white mb-6">Popular Artists</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: "Taylor Swift", img: "https://images.unsplash.com/photo-1698711864764-c9150adc9f36?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "The Weeknd", img: "https://images.unsplash.com/photo-1603239699774-885100e49753?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Bad Bunny", img: "https://images.unsplash.com/photo-1533584592871-abb80e6e4ea2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Drake", img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Billie Eilish", img: "https://images.unsplash.com/photo-1623238778426-1ff810ff576b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Ed Sheeran", img: "https://images.unsplash.com/photo-1534564533601-4d3e3d9fd229?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
                        ].map((artist) => (
                            <div key={artist.name} className="group cursor-pointer">
                                <div className="relative aspect-square rounded-full overflow-hidden mb-3 bg-zinc-800 ">
                                    <img
                                        src={artist.img}
                                        alt={artist.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 "
                                    />

                                </div>
                                <p className="text-gray-200 font-medium text-sm text-center">{artist.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Playlists */}
                <section >
                    <h2 className="text-2xl font-bold text-white mb-6">Top Playlists</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Chill Beats", desc: "Perfect for relaxing & studying", img: "https://images.unsplash.com/photo-1603569613911-606cb59f28e9?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Workout Energy", desc: "High-tempo motivation", img: "https://images.unsplash.com/photo-1544319529-60cbb616b391?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Indie Discoveries", desc: "Fresh indie finds", img: "https://images.unsplash.com/photo-1572716895662-9b3e331c2f0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Today's Hits", desc: "Latest chart-toppers", img: "https://images.unsplash.com/photo-1667669325817-b387fd46700c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Jazz Essentials", desc: "Timeless jazz classics", img: "https://images.unsplash.com/photo-1622793982988-02f826a73f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8M1IzeV91T2dWTWN8fGVufDB8fHx8fA%3D%3D" }
                        ].map((playlist) => (
                            <Link to={`/search/genre/${playlist.name}`} >
                                <div key={playlist.name} className="bg-zinc-900/40 p-4 rounded-lg hover:bg-zinc-800/40 transition-colors duration-300 cursor-pointer group">
                                    <div className="relative mb-4">
                                        <img src={playlist.img} alt={playlist.name} className="w-full aspect-square object-cover rounded-md shadow-lg" />
                                        <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:scale-105">
                                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h3 className="text-white font-bold mb-1">{playlist.name}</h3>
                                    <p className="text-gray-400 text-sm">{playlist.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Podcasts */}
                <section >
                    <h2 className="text-2xl font-bold text-white mb-6">Popular Podcasts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Tech Today", host: "Sarah Chen", duration: "45 min", img: "https://images.unsplash.com/photo-1574770118700-4ed7dae3310e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "True Stories", host: "Mike Johnson", duration: "60 min", img: "https://images.unsplash.com/photo-1525125007-e633b0ebe4e3?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Daily Mindfulness", host: "Dr. Emma White", duration: "30 min", img: "https://images.unsplash.com/photo-1690668058668-096dcaf72f50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
                        ].map((podcast) => (
                            <div key={podcast.name} className="flex items-center bg-zinc-900/40 p-4 rounded-lg hover:bg-zinc-800/40 transition-colors duration-300 cursor-pointer group">
                                <img src={podcast.img} alt={podcast.name} className="w-20 h-20 rounded-md mr-4" />
                                <div className="flex-grow">
                                    <h3 className="text-white font-bold mb-1">{podcast.name}</h3>
                                    <p className="text-gray-400 text-sm">{podcast.host}</p>
                                    <p className="text-gray-500 text-sm">{podcast.duration}</p>
                                </div>
                                <button className="w-10 h-10 bg-green-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:scale-105">
                                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* New Elegant Footer */}
            <footer className="mt-auto border-t border-zinc-800/40 backdrop-blur-sm mb-60 ">
                <div className="max-w-7xl mx-auto px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-white font-bold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Jobs</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">For the Record</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Communities</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">For Artists</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Developers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Advertising</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Useful Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Support</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Web Player</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Mobile App</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white font-bold mb-4">Social</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 016.012 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <p className="text-sm text-gray-500">&copy; 2025 Musique. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Infos;