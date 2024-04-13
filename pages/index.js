import Head from 'next/head';
import ListenerCard from "./components/ListenerCard";
import ListenerCardHorizontal from "./components/ListenerCardHorizontal";



export default function Home() {
    return (
        <>
            <Head>
                <title>Spotify Proximity</title>
                <style>@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')</style>
                <link rel="icon" href="https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png" />
            </Head>

            <div className="flex justify-center grid" style={{ fontFamily: 'Poppins, sans-serif' }}>

                <div className="max-w-6xl sm:max-w-3xl mt-10">
                    <h1 className="text-black text-center text-6xl px-6">
                        <span className="text-green-600/90 font-semibold">Spotify</span>Proximity
                    </h1>
                </div>

                <div className="py-10 px-6">
                    <h1 className="text-center mb-5 text-black text-4xl font-semibold">
                        Listeners around you...
                    </h1>
                </div>

                <div className="w-fill">
                    <ListenerCard />
                    <ListenerCard />


                </div>
                
                    <ListenerCardHorizontal />








            </div>
        </>
    );

}