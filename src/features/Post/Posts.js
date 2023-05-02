import React, { useState } from "react";
import moment from "moment";
import Avatar from "../../components/avatar/Avatar";

const Post = ({ post, onToggleComments }) => {
    return (
        <li
            key={post.id}
            className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
            <div>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {post.title}
                    </h3>
                    <img
                        src={post.url}
                        alt=""
                        className="aspect-[3/2] w-full rounded-2xl object-cover"
                    />
                </p>
                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <Avatar name={post.author} />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {post.author}
                        </p>
                        <p className="mt-1 flex text-xs leading-5 text-gray-500">
                            <time dateTime={post.dateTime}>
                                {moment.unix(post.created_utc).fromNow()}
                            </time>
                        </p>
                    </div>
                </div>
            </div>
            <div></div>
        </li>
    );
};

export default Post;
