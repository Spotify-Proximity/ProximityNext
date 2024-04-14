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
                <title>Login</title>
                <style>@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')</style>
                <link rel="icon" href="https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png" />
            </Head>

            <div className="grid justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>

                <div className="max-w-6xl sm:max-w-3xl mt-10">
                    <h1 className="text-black text-center text-6xl px-6">
                        <span className="text-green-600/90 font-semibold">Home{` `}</span>
                    </h1>
                </div>

                <div className="flex justify-center">
                    <div className="">

                        <ListenerCardHorizontal
                            username={'Kshitij Kochhar'}
                            distance={"3"}
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            songTag={['Rap', 'Melody', 'Popular']}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />
                        <ListenerCardHorizontal
                            username={'Kshitij Kochhar'}
                            distance={"3"}
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            songTag={['Rap', 'Melody', 'Popular']}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />
                        <ListenerCardHorizontal
                            username={'Kshitij Kochhar'}
                            distance={"3"}
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            songTag={['Rap', 'Melody', 'Popular']}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />
                        <ListenerCardHorizontal
                            username={'Kshitij Kochhar'}
                            distance={"3"}
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            songTag={['Rap', 'Melody', 'Popular']}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />

                    </div>


                </div>


            </div>
        </>
    );

}