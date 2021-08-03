import React from "react"
import { StoriesComponentItem } from "../../types"

type ProfilePictureProps = {
  profile: StoriesComponentItem
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  profile,
}: ProfilePictureProps): React.ReactElement => {
  return (
    <li
      className={`flex ${profile.is_post ? 'flex-row mb-3' : 'flex-col'} items-center`}
      key={profile.username}
    >
      <div
        className={`${profile.is_post ? 'p-0.5 mx-2' : 'p-1'} rounded-full transition-all hover:opacity-90 bg-gradient-to-br 
        ${
          profile.seen
            ? `from-gray-100 via-gray-300 to-gray-400`
            : `from-yellow-200 via-red-500 to-pink-500`
        }
        `}
      >
        <a href="#" className={`bg-white rounded-full block`}>
          <img
            src={profile.profile_picture}
            alt={`${profile.username}'s profile picture`}
            className="rounded-full"
            style={
              profile.is_post
                ? { width: 28, height: 28 }
                : { width: 48, height: 48 }
            }
          />
        </a>
      </div>
      <span
        className={`text-xs ${profile.is_post ? 'w-auto cursor-pointer font-semibold' : 'w-16'} overflow-hidden overflow-ellipsis text-center transition hover:opacity-90 ${
          profile.seen && !profile.is_post ? "text-gray-700" : "text-gray-900"
        }`}
      >
        {profile.username}
      </span>
    </li>
  )
}

export default ProfilePicture
