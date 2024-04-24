import React from 'react';
import { CgPlayList } from "react-icons/cg";
import { GoHistory, GoHomeFill } from "react-icons/go";
import { LuThumbsUp } from "react-icons/lu";
import { MdOutlineSubscriptions, MdOutlineWatchLater, MdSlowMotionVideo } from "react-icons/md";


const SideBar = () => {

  const mainLinks =[
    {
      icon:<GoHomeFill className='text-xl' />,
      name:"Home"
    },
    {
      icon:<MdSlowMotionVideo className='text-xl' />,
      name:"Shorts"
    },
    {
      icon:<MdOutlineSubscriptions className='text-xl' />,
      name:"Subscriptions"
    }
  ];
  const otherLinks =[
    {
      icon:<GoHistory className='text-xl'/>,
      name:"History"
    },
    {
      icon:<CgPlayList className='text-xl'/>,
      name:"Playlists"
    },
    {
      icon:<MdOutlineWatchLater className='text-xl'/>,
      name:"WatchLaters"
    },
    {
      icon:<LuThumbsUp className='text-xl'/>,
      name:"LikedVideos"
    }
  ];


  return (
    <div className='w-2/12 bg-[#0F0F0F] pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col p-2 border-b-2 border-zinc-700 '>
        {mainLinks.map(({icon,name})=>{
          return(
            <li key={name} className={`pl-6 m-1 py-5 hover:bg-[#262629] rounded-lg ${name=== "Home" ?"bg-zinc-900":"bg-[#0F0F0F]"}`}><a href='#' className='flex items-center gap-5' >{icon}<span className='text-sm font- tracking-wider'>{name}</span></a></li>
          )
        })}
      </ul>
      <ul className='flex flex-col p-2 border-b-1 border-zinc-800'>
        {otherLinks.map(({icon,name})=>{
          return(
            <li key={name} className={`pl-6 m-1 py-5 hover:bg-[#262629] rounded-lg ${name=== "Home" ?"bg-zinc-900":"bg-[#0F0F0F]"}`}><a href='#' className='flex items-center gap-5' >{icon}<span className='text-sm tracking-wider'>{name}</span></a></li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar
