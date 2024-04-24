import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell, BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiMicrophoneFill } from "react-icons/pi";
import { RiVideoAddLine } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import { changeSearchTerm, clearVideos } from '../youtube/youtubeSlice';
const NavBar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    const handleSearch = () => {
        if (location.pathName !== '/search') navigate("/search");
        else {
            dispatch(clearVideos);
            dispatch(getSearchPageVideos(false));
        }
    }




    return (
        <div className='flex justify-between items-center bg-[#0F0F0F] h-16 opacity-95 sticky p-6'>
            <div className='flex gap-8 items-center text-2xl '>
                <div>
                    <GiHamburgerMenu />
                </div>
                <div className='flex gap-1 items-center bg-[#0F0F0F] justify-center' >
                    <BsYoutube className='text-3xl text-red-600' />
                    <span className=' text-2xl font-bold'>YouTube</span>
                </div>
            </div>
            <div className='flex items-center  justify-center gap-5'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <div className='flex bg- items-center bg-zinc-900 h-10 px-4 pr-0 rounded-r-3xl rounded-l-3xl '>
                        <div className='flex items-center pr-5 gap-5'>
                            <input type='text'
                            placeholder='Search'
                            className='w-96 bg-zinc-900 '
                            value={searchTerm}
                            onChange={(e)=>dispatch(changeSearchTerm(e.target.value))}/>
                        </div>
                        <button className=" h-10 w-16 flex items-center justify-center bg-zinc-800 focus:outline-none border-none rounded-r-3xl">
                            <AiOutlineSearch className='text-2xl' />
                        </button>
                    </div>
                </form>
                <div className=' text-xl p-3 bg-zinc-900 rounded-full'>
                    <PiMicrophoneFill />
                </div>
            </div>
            <div className='flex gap-5 items-center text-xl'>
                <RiVideoAddLine className='text-xl' />
                <div className='relative'>
                    <BsBell className='text-xl' />
                    <span className='absolute text-sm bottom-2 left-2 bg-red-600 rounded-full mx-1 px-1'>9+</span>
                </div>
                <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' alt='Profile Pic' className='h-8 w-8 mx-1 rounded-full' />
            </div>

        </div>
    )
}

export default NavBar
