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
