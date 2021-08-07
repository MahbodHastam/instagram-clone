export interface TopBarProps {
  unreadMessagesCount?: number
}

export interface StoriesComponentProps {
  stories: Array<StoriesComponentItem>
  userStory?: object
}

export interface StoriesComponentItem {
  profile_picture: string
  username: string
  seen: boolean
  is_post?: boolean
}

export interface PostProfileProps {
  profile: StoriesComponentItem
  location: string
  // key?: any
}

export interface PostDetails extends PostProfileProps {
  media: {
    media_url: string
    post_type: "picture" | "video"
  }
  description: string
  likes?: number
  views?: number
  is_liked?: boolean
  is_bookmarked?: boolean
  comments_count?: number
}

export interface PostsProps {
  posts: Array<PostDetails>
}

export interface ReducerProps {
  type: string
  payload: any
}
