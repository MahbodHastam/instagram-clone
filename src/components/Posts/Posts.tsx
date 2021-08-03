import React from 'react'
import { PostsProps } from '../../types'
import Post from '../Post'

const Posts: React.FC<PostsProps> = ({ posts }: PostsProps): React.ReactElement => {

  return (
    <div className="pb-10">
      {posts.map((item, key) => <Post {...item} key={key} />)}
    </div>
  )
}

export default Posts
