import React from 'react'
import { PostDetails } from './types'
import ProfilePicture from '../ProfilePicture'
import PostBody from './PostBody'

const Post: React.FC<PostDetails> = (
  props: PostDetails
): React.ReactElement => {

  return (
    <div className="flex flex-col mb-5">
      <ProfilePicture profile={props.profile} />
      <PostBody {...props} />
    </div>
  )
}

export default Post

