import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import getRandomNumber from "../../utils/getRandomNumber";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";

const PostLoading = () => {
    return (
        <div className="bg-white py-2 sm:py-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    <Skeleton width={getRandomNumber(100, 200)} />
                </h3>

                <div className="post-image-container">
                    <Skeleton height={250} />
                </div>

                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <span>
                        <Skeleton width={getRandomNumber(20, 50)} />
                    </span>
                    <span>
                        <Skeleton width={getRandomNumber(50, 100)} />
                    </span>
                    <span className="post-comments-container">
                        <button
                            type="button"
                            className="icon-action-button"
                            aria-label="Show comments">
                            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-300 mr-2" />
                        </button>
                        <Skeleton width={getRandomNumber(10, 50)} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PostLoading;
