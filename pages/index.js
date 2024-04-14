import Head from 'next/head';
import ListenerCard from "./components/ListenerCard";
import ListenerCardHorizontal from "./components/ListenerCardHorizontal";
import { useEffect, useState, Fragment } from 'react';




export default function Home() {

    const [listeners, setListeners] = useState([]);

    
    async function getListeners() {
        const endPoint = 'http://localhost:3003/userList';
        const result = await fetch(endPoint, {
            method: 'GET',
        });
        const data = await result.json();
        setListeners(data);
    }

    async function postListeners() {
        const endPoint = 'http://localhost:3003/user';
        const result = await fetch(endPoint, {
            method: 'POST',
            body: JSON.stringify({
                name: 'Aaftab Jafri',
                age: 19
            }), 
            headers: {
                'Content-Type': 'application/json'
            }

        });
        const data = await result.json();
        getListeners();
    }

    useEffect(() => {
        //getListeners();
    }, []);


    return (
        <>
            <Head>
                <title>Spotify Proximity</title>
                <style>@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')</style>
                <link rel="icon" href="https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png" />
            </Head>

            <div className="flex-auto justify-center " style={{ fontFamily: 'Poppins, sans-serif' }}>

                <div className="max-w-6xl sm:max-w-3xl mt-10">
                    <h1 className="text-black text-center text-6xl px-6">
                        <span className="text-green-600/90 font-semibold">Spotify</span>Proximity
                    </h1>
                </div>

                <div className="pt-10 px-6">
                    <h1 className="text-center mb-5 text-black text-4xl font-semibold">
                        Listeners around you...
                    </h1>
                </div>

                <div className="flex">
                    <button onClick={getListeners} className="bg-green-600/90 text-white px-4 py-2 rounded-lg">Get Listeners</button>
                    
                </div>

                <div className="">
                        {listeners && listeners.users && listeners.users.length > 0 &&
                            listeners.users.map((user, index) => (
                                <div key={index}>
                                    <p>Name: {user.name}</p>
                                    <p>Age: {user.age}</p>
                                </div>
                            ))
                        }
                    </div>


                    <div className="flex">
                    <button onClick={postListeners} className="bg-red-600/90 text-white px-4 py-2 rounded-lg">Post Listeners</button>
                    
                </div>

                <div className="flex justify-center">
                    <div className="">
                        <ListenerCard
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />
                        <ListenerCard
                            imageURL={'https://hips.hearstapps.com/hmg-prod/images/7-64ecb1c909b78.png?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*'}
                            artist={'Taylor Swift'}
                            song={'Blank Space'}
                            bgColor={'bg-gradient-to-r from-pink-500/10 to-pink-500/40'}
                            textColor={'text-neutral-100/40'}
                        />
                    </div>


                </div>

                <ListenerCardHorizontal />

            </div>
        </>
    );

}