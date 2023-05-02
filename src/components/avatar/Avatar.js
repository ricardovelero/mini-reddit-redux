import React from "react";

const Avatar = ({ name, className }) => {
    return (
        <img
            src={`https://api.dicebear.com/6.x/personas/svg?seed=${name}`}
            alt={`${name} profile`}
            className={className}
        />
    );
};

export default Avatar;
