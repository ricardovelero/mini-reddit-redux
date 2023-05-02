import React from "react";
import Avatar from "../avatar/Avatar";
import moment from "moment";
import ReactMarkdown from "react-markdown";

const Comment = ({ comment }) => {
    return (
        <div className="transition duration-300 ease-in rounded mx-0 my-2 p-4 hover:drop-shadow-xl;">
            <div className="flex items-center mb-4">
                <Avatar name={comment.author} />
                <p className="font-bold text-blue-900 mr-8">{comment.author}</p>
                <ReactMarkdown className="ml-2">{comment.body}</ReactMarkdown>
                <p className="italic ml-auto">
                    {moment.unix(comment.created_utc).fromNow()}
                </p>
            </div>
        </div>
    );
};

export default Comment;
