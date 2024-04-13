import '@fortawesome/fontawesome-free/css/all.css';


const ListenerCardHorizontal = ({ }) => {

    return (

        <div className="my-72 max-w-md relative isolate overflow-hidden rounded-md bg-neutral-900/90  ring-1 ring-white/10 hover:ring-neutral-600">
            <div className="relative mx-auto max-w-7xl px-5">
                <div
                    className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#081e75] to-[#0737f2] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="lg:mx-0 ">
                    <div className="grid grid-cols-2 text-lg leading-8 text-gray-300">
                    
                        <div className='border '>
                            <img
                                src={'https://www.udiscovermusic.com/wp-content/uploads/2019/12/Post-Malone-Stoney-album-cover-820.jpg'}
                                className="h-full w-full rounded-md"
                            /> 
                        </div>
                        <div>
                            <h1 className="text-2xl text-white">Kshitij Kochhar</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );


};

export default ListenerCardHorizontal;