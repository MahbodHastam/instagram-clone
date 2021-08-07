import React, { useState, useEffect } from "react"
import logo from "../../logo.svg"
import { PostDetails, PostsProps, StoriesComponentItem } from "../../types"
import { useSelector } from 'react-redux'
import Navigation from "../Navigation"
import Posts from "../Posts"
import Stories from "../Stories"
import TopBar from "../TopBar"

/* const maxWidth = 375

const CheckSize = (): React.ReactElement | null => {
  const [innerWidth, setInnerWidth] = useState(0)

  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [])

  window.onresize = () => {
    setInnerWidth(window.innerWidth)
  }

  return innerWidth > maxWidth ? (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-50 bg-black w-full h-full text-center pt-5">
      <span className="text-lg text-gray-200">
        change ur screen size to{" "}
        <b>
          {"<="} {maxWidth}px
        </b>
      </span>
    </div>
  ) : null
} */

const App: React.FC = () => {

  const stories = useSelector((state: any) => state.stories.data)
    
  const [userStory, setUserStory] = useState<StoriesComponentItem>({
    profile_picture: logo,
    username: 'Your Story',
    seen: true,
  })

  const [posts, setPosts] = useState<Array<PostDetails>>([
    {
      profile: { profile_picture: '/img/profile-pictures/1.jpeg', username: 'hele_dan_dan_dan_hele_yedane_yedane', seen: false, is_post: true, },
      location: 'Iran, Inja',
      media: {
        media_url: '/img/profile-pictures/1.jpeg',
        post_type: 'picture',
      },
      description: 'ajksndkaj sndkajs ndaskd asdjasdmaisudhmaisudh mais mi h hjh njn jknkasd asdasd.',
      likes: 12,
      is_liked: false,
      is_bookmarked: false,
      comments_count: 0,
    }, {
      profile: { profile_picture: '/img/profile-pictures/34.jpeg', username: 'khaaapooooo', seen: true, is_post: true, },
      location: 'Unja, Anja',
      media: {
        media_url: '/img/profile-pictures/34.jpeg',
        post_type: 'picture',
      },
      description: 'ajksndkaj sndkajs ndaskd asdjasdmaisudhmaisudh mais mi h hjh njn jknkasd asdasd ajksndkaj sndkajs ndaskd asdjasdmaisudhmaisudh mais mi h hjh njn jknkasd asdasd ajksndkaj sndkajs ndaskd asdjasdmaisudhmaisudh mais mi h hjh njn jknkasd asdasd\n\najksndkaj sndkajs ndaskd asdjasdmaisudhmaisudh mais mi h hjh njn jknkasd asdasd\najksndkaj sndkajs ndaskd asdjasdmaisudhmaisudh mais mi h hjh njn jknkasd asdasd\n\n\nGood luck..',
      likes: 1,
      is_liked: true,
      is_bookmarked: true,
      comments_count: 2,
    }
  ])
  
  return (
    <div className="app bg-gray-50">
      {/* <CheckSize /> */}
      <TopBar unreadMessagesCount={0} />
      <Stories stories={stories} userStory={userStory} />
      <Posts posts={posts} />
      <Navigation />
    </div>
  )
}

export default App
