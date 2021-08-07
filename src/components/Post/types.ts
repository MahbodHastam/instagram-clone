import { StoriesComponentItem } from "../Stories/types"

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
