import React from "react";
import Avatar from "../avatar/Avatar";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

const Comment = ({ comment }) => {
    return (
        <div className="relative pb-8">
            <div className="relative flex items-start space-x-3">
                <div className="relative">
                    <Avatar
                        name={comment.author}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                    />
                    <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                        <ChatBubbleLeftEllipsisIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </div>
                <div className="min-w-0 flex-1">
                    <div>
                        <div className="text-sm">
                            <p className="font-bold text-blue-900">
                                {comment.author}
                            </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                            Commented{" "}
                            {moment.unix(comment.created_utc).fromNow()}
                        </p>
                        <ReactMarkdown className="mt-2 text-sm text-gray-700">
                            {comment.body}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
