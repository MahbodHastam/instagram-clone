import React from 'react'
import { HomeIcon, SearchIcon, HeartIcon, UserIcon, PlusIcon } from '@heroicons/react/outline'

const Navigation: React.FC = (): React.ReactElement => {
  return (
    <div className="w-full fixed inset-x-0 bottom-0 bg-gray-50 py-3 px-4 border-t border-gray-200 flex flex-row justify-between">
      <button className="transition hover:opacity-70"><HomeIcon /></button>
      <button className="transition hover:opacity-70"><SearchIcon /></button>
      <button className="transition rounded-lg border-2 border-gray-900 text-gray-900 bg-white hover:opacity-70"><PlusIcon className="h-6 w-6" /></button>
      <button className="transition hover:opacity-70"><HeartIcon /></button>
      <button className="transition hover:opacity-70">
        {/* <UserIcon /> */}
        <img
          src="/img/profile-pictures/11.jpg"
          alt="user's picture"
          className="rounded-full w-7 h-7 ring-1 ring-gray-800 p-0.5"
        />
      </button>
    </div>
  )
}

export default Navigation
