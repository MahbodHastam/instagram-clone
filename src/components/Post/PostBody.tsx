import React from "react"
import { PostDetails } from "../../types"
import { ChatIcon, ExternalLinkIcon, HeartIcon, BookmarkIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid, BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/solid'

const PostBody: React.FC<PostDetails> = (
  props: PostDetails
): React.ReactElement => {
  return (
    <div className="flex flex-col gap-1">
      {props.media.post_type === "picture" ? (
        <img
          src={props.media.media_url}
          alt={props.profile.username}
          className={`w-full h-2/4`}
        />
      ) : (
        <span>it's video</span>
      )}
      <div className="w-full flex flex-row justify-between px-2 py-1">
        <div className="flex flex-col">
          <div className="flex flex-row space-x-2 text-2xl align-middle">
            <button
              className="transition text-gray-800 hover:opacity-70"
            >
              {/* <i
                className={`bx font-bold ${
                  props.is_liked ? "bxs-heart text-red-600" : "bx-heart"
                }`}
              ></i> */}
              {props.is_liked ? <HeartIconSolid className="text-red-600" /> : <HeartIcon />}
            </button>
            <button
              className="transition text-gray-800 hover:opacity-70"
            >
              {/* <i className="bx bx-comment font-bold"></i> */}
              <ChatIcon />
            </button>
            <button
              className="transition text-gray-800 hover:opacity-70"
            >
              {/* <i className="bx bx-redo text-3xl"></i> */}
              <ExternalLinkIcon />
            </button>
          </div>
          {(props.likes && props.likes > 0) ||
          (props.views && props.views > 0) ? (
            <span className="text-gray-800">
              <span className="font-semibold">
                {props.media.post_type === "picture"
                  ? props.likes
                  : props.views}
              </span>{" "}
              {props.likes
                ? props.likes > 1
                  ? "likes"
                  : "like"
                : props.views && props.views > 1
                ? "views"
                : "view"}
            </span>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            className="transition text-gray-800 hover:opacity-70"
          >
            {/* <i
              className={`bx text-3xl ${
                props.is_bookmarked ? "bxs-bookmark" : "bx-bookmark"
              }`}
            ></i> */}
            {props.is_bookmarked ? <BookmarkIconSolid /> : <BookmarkIcon />}
          </button>
        </div>
      </div>
      <p className="leading-6 text-gray-900 px-2">{props.description}</p>
      {props.comments_count && props.comments_count > 0 ? (
        <a href="#" className="text-sm text-gray-700 hover:text-gray-500 px-2 mt-2">
          View {props.comments_count} Comments
        </a>
      ) : (
        ""
      )}
    </div>
  )
}

export default PostBody
