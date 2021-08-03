import React from 'react'
import { PostsProps } from '../../types'
import { Post } from '../Post/Post'

const Posts: React.FC<PostsProps> = ({ posts }: PostsProps): React.ReactElement => {

  return (
    <div>
      {posts.map((item, key) => <Post {...item} key={key} />)}
    </div>
  )
}

export default Posts
