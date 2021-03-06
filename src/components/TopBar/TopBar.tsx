import { ChatIcon, CameraIcon } from '@heroicons/react/outline'
import React from 'react'
import { TopBarProps } from './types'

const TopBar: React.FC<TopBarProps> = ({
  unreadMessagesCount = 0,
}: TopBarProps): React.ReactElement => {

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-50 flex py-2 px-3 flex-row justify-between border-b border-gray-600 border-opacity-10">
      <button className="transition text-gray-800 hover:opacity-70">
        {/* <i className="bx bx-camera text-3xl"></i> */}
        <CameraIcon />
      </button>
      <h3 className="font-semibold font-sans text-lg cursor-pointer pt-1 transition text-gray-900 hover:opacity-70">
        Clonegram
      </h3>
      <button className="relative inline-block transition text-gray-800 hover:opacity-70">
        {/* <i className="bx bx-message-alt-detail text-3xl"></i> */}
        <ChatIcon />
        {unreadMessagesCount !== 0 || unreadMessagesCount === null ? (
          <span className="rounded-full animate-pulse bg-red-600 text-white bg-opacity-95 px-2 py-1 text-xs leading-none absolute -top-1 -left-1">
            {unreadMessagesCount}
          </span>
        ) : null}
      </button>
    </div>
  )
}

export default TopBar
