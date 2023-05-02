import React from "react";

const Avatar = ({ name }) => {
    return (
        <img
            src={`https://api.adorable.io/avatars/10/${name}`}
            alt={`${name} profile`}
            className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
        />
    );
};

export default Avatar;
