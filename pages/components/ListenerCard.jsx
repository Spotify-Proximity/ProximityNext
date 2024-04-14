import '@fortawesome/fontawesome-free/css/all.css';


const ListenerCard = ({imageURL, artist, song, bgColor, textColor }) => {
    // Add logic to change background based on primary image colors

    return (
            <div className={`m-5 max-w-md ${bgColor} rounded-sm flex-shrink-0 snap-always snap-center`}>
                <div className=" ">
                    <div className=" ">
                        <div className=' '>
                            <img
                                src={imageURL}
                                width=""
                                className="h-full w-full rounded-sm pt-8 px-8 text-center"
                            />

                        </div>
                        <div className={`grid grid-cols-2 px-8 pt-1 ${textColor}`}>
                            <h1 className={`flex justify-start text-2xl `}>{artist}</h1>
                            <h1 className="mr-1 flex justify-end items-center text-xl">{song}</h1>
                        </div>
                        <h1 className="py-4 text-sm text-white">{``}</h1>

                        
                        <h1 className={`text-xl font-bold`}>{ }</h1>
                    </div>
                </div>
            </div>
        
                
          

    );


};

export default ListenerCard;