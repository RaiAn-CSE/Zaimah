import React from "react";

const UserItem = ({ name, location, imgSrc, onRemove }) => {
    return (
        <div className="px-4 py-2 flex items-center border-b-2">
            <img className="h-10 w-10 rounded-full" src={imgSrc} alt="image profile" />
            <div className="ml-4">
                <p>{name}</p>
                <p className="text-xs">{location}</p>
            </div>
            <button
                className="ml-auto bg-[#FD6356] text-white px-4 py-2 rounded"
                onClick={onRemove}
            >
                Remove
            </button>
        </div>
    );
};

export default UserItem;
