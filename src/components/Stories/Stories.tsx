import React from "react"
import { StoriesComponentItem, StoriesComponentProps } from "../../types"
import logo from "../../logo.svg"
import ProfilePicture from "../ProfilePicture/ProfilePicture"

const Stories: React.FC<StoriesComponentProps> = ({
  stories,
  userStory,
}: StoriesComponentProps): React.ReactElement => {
  return (
    <div className="w-full p-4 px-5 py-5 mb-3 mt-10">
      <ul className="flex overflow-auto overflow-y-hidden space-x-4">
        {stories.map((item: StoriesComponentItem, key) => (
          <ProfilePicture profile={item} key={key} />
        ))}
      </ul>
    </div>
  )
}

export default Stories
