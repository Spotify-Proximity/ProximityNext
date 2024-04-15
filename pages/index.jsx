import Head from 'next/head';
import ListenerCard from "./components/ListenerCard";
import ListenerCardHorizontal from "./components/ListenerCardHorizontal";
import { useEffect, useState, Fragment } from 'react';
import {useUser} from '@auth0/nextjs-auth0/client';




export default function Index() {

    const {user, error, isLoading} = useUser();

    const getStartedButtonClick = () => {
        console.log('Button Clicked');
        window.location.href = '/api/auth/login'
    };

    const alreadyUserButtonClick = () => {
        console.log('Button Clicked');
        window.location.href = '/home'
    };

    return (
        <>
            <Head>
                <title>Spotify Proximity</title>
                <style>@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')</style>
                <link rel="icon" href="https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png" />
            </Head>

            <div className="max-w-screen flex flex-col items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>

                <div className="max-w-6xl sm:max-w-3xl pt-10">
                    <h1 className="text-black text-center text-6xl px-6">
                        <span className="text-green-600/90 font-semibold">Spotify</span>Proximity
                    </h1>
                </div>

                <div className="pt-10 max-w-xl text-wrap">
                    <h1 className="text-center mb-5 text-black text-4xl font text-wrap">
                        See what people around you are <span className="font-bold text-green-600/90">listening</span> to...
                    </h1>
                </div>

                <div className="flex pb-5 gap-x-10">
                    <a href="/api/auth/login" className="bg-gradient-to-b from-green-600/90 to-green-600/80 text-xl text-neutral-100/90 py-3 px-10 rounded-md hover:bg-green-700">
                        Get Started
                    </a>

                    <a href="/home" className="bg-gradient-to-b from-gray-600/90 to-gray-600/80 text-xl text-neutral-100/90 py-3 px-5 rounded-md hover:bg-gray-700">
                        Already a User?
                    </a>
                </div>


                <div className="flex pb-20">
                    <div className="flex gap-x-10 snap-x snap-mandatory overflow-x-auto">

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

                        <ListenerCard
                            imageURL={'https://hips.hearstapps.com/hmg-prod/images/7-64ecb1c909b78.png?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*'}
                            artist={'Taylor Swift'}
                            song={'Blank Space'}
                            bgColor={'bg-gradient-to-r from-pink-500/10 to-pink-500/40'}
                            textColor={'text-neutral-100/40'}
                        />

                        <ListenerCard
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />


                        <ListenerCard
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />

                        <ListenerCard
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />

                        <ListenerCard
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />

                        <ListenerCard
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />

                        <ListenerCard
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />

                        <ListenerCard
                            imageURL={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                            artist={'Post Malone'}
                            song={'Rockstar'}
                            bgColor={'bg-gradient-to-r from-neutral-700/90 to-black'}
                            textColor={'text-neutral-300/90'}
                        />
                    </div>

                </div>

            </div>
        </>
    );

}