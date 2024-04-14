import '@fortawesome/fontawesome-free/css/all.css';


const ListenerCardHorizontal = ({ username, distance, imageURL, artist, song, songTag, bgColor, textColor }) => {
    // Add logic to change background based on primary image colors
    return (
        <div className={`flex mt-10 max-w-md ${bgColor} rounded-sm`}>
            <div className="">
                <img
                    src={imageURL}
                    width=""
                    className="h-48 w-48 rounded-sm p-4 text-center"
                />
            </div>
            <div className={`pt-3 pr-4 ${textColor}`}>
                <div>
                    <h1 className={`text-3xl`}>{username}</h1>
                    <h1 className="text-lg">{song} by {artist}</h1>
                    <h1 className="text-sm">{distance} miles away</h1>
                </div>

                {songTag && songTag.length > 0 &&
                    <div className="pt-2 grid grid-cols-3">
                        {songTag.map((tag, index) => (
                            <div key={index} className="bg-gray-500/50 flex justify-center text-xs text-neutral p-1 rounded-sm mr-1 mb-1 hover:bg-gray-500/80 ">{tag}</div>
                        ))}
                    </div>
                }

                <div className="pt-2 grid grid-cols-2">
                    <div className="flex justify-center">
                        <button className="bg-blue-800/50 text-xs text-neutral p-1 rounded-sm hover:bg-blue-800/80">Add User</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-800/50 text-xs text-neutral p-1 rounded-sm hover:bg-blue-800/80">Add Song</button>
                    </div>
                </div>

            </div>
        </div>
    );


};

export default ListenerCardHorizontal;