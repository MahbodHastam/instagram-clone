import { STORIES_GET_ALL } from "../../constants/ActionTypes"
import { ReducerProps } from "../../constants/types"

const initialState = {
  data: [
    { profile_picture: '/img/profile-pictures/1.jpeg', username: 'hele_dan_dan_dan_hele_yedane_yedane', seen: false, },
    { profile_picture: '/img/profile-pictures/3.jpeg', username: 'pishi', seen: false, },
    { profile_picture: '/img/profile-pictures/19.png', username: 'kimi', seen: false, },
    { profile_picture: '/img/profile-pictures/11.jpg', username: 'DibDmini', seen: true, },
    { profile_picture: '/img/profile-pictures/34.jpeg', username: 'khaaapooooo', seen: true, },
  ]
}

export default (state = initialState, { type, payload }: ReducerProps) => {
  switch (type) {

  case STORIES_GET_ALL:
    return { ...state, ...payload }

  default:
    return state
  }
}
