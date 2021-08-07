import React from 'react'
import Post from '../Post'
import { PostsProps } from './types'

const Posts: React.FC<PostsProps> = ({ posts }: PostsProps): React.ReactElement => {

  return (
    <div className="pb-10 md:px-2 md:grid md:grid-cols-3 gap-2">
      {posts.map((item, key) => <Post {...item} key={key} />)}
    </div>
  )
}

export default Posts
