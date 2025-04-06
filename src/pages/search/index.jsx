import { Routes, Route, Router } from 'react-router-dom'; // Importer Routes et Route
import Slidebar from '@/components/ui/Slidebar';
import Library from '@/components/ui/Library';
import Blocs from '@/components/ui/Blocs';
import Tracks from '@/components/ui/Tracks';
import Infos from '@/components/ui/Infos';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useLocation } from 'react-router-dom';

function Index() {
    const accessToken = '';
    const location = useLocation();
    const { userData } = location.state || {};
    const email = userData ? userData.email : '';

    return (

        <div className="w-screen bg-black flex flex-col h-screen px-2 gap-1 ">
            <Slidebar Email={email} />
            <ResizablePanelGroup
                direction="horizontal"
                className="flex flex-row items-stretch w-screen overflow-hidden basis-[90%]"
                style={{
                    transition: 'width 0.5s ease, flex-basis 0.5s ease',
                }}
            >
                <ResizablePanel
                    defaultSize={30}
                    className="flex sm:max-w-[500px] sm:min-w-[300px]"
                    style={{
                        transition: 'flex-basis 0.5s ease',
                    }}
                >
                    <Library />
                </ResizablePanel>

                <ResizableHandle
                    className=" bg-gray-800 hover:bg-gray-400 cursor-grap"
                    style={{
                        transition: 'all 0.5s ease',
                    }}
                />

                <ResizablePanel
                    defaultSize={70}
                    className="flex"
                    style={{
                        transition: 'flex-basis 0.5s ease',
                    }}
                >
                    <Routes>
                        <Route index element={<Blocs />} />
                        <Route path="test" element={<Infos />} />
                        <Route path="genre/:genre" element={<Tracks />} />
                    </Routes>
                </ResizablePanel>
            </ResizablePanelGroup>


            <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-500 to-pink-500 px-1 py-1 basis-[12%] flex-grow cursor-pointer">
                <div className="h-full flex flex-col justify-center">
                    <p className="text-white font-bold text-sm mt-2  sm:text-base">
                        Extrait sur Spotify
                    </p>
                    <p className="text-white text-base font-base sm:text-base">
                        Inscrivez-vous pour écouter titres et podcasts en illimité, avec quelques coupures pubs. Pas besoin de carte de crédit.
                    </p>
                </div>
                <button className="text-black bg-white rounded-full px-2 py-3 font-bold text-sm sm:text-sm max-h-[90%] text-center hover:scale-105 transition duration-200 whitespace-nowrap">
                    <a className="outline-none" href="/auth">s'inscrire gratuitement</a>
                </button>
            </div>
        </div>


    );
}

export default Index;
