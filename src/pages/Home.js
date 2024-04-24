import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
const Home = () => {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state)=> state.youtubeApp.videos);

    useEffect(()=>{
        dispatch(getHomePageVideos(false));
    },[dispatch])
    console.log(videos);

    return (
        <div className='max-h-screen overflow-auto'>
            <div style={{height:"7.5vh"}}>
            <NavBar/>
            </div>
            <div className='flex' style={{height:"92.5vh"}}>
            <SideBar/>
            {
                videos.length ? (
                    <InfiniteScroll dataLength={videos.length}
                    next={()=>dispatch(getHomePageVideos(true))}
                    hasMore={videos.length<500}
                    loader={<Spinner/>}
                    height={650}
                    >
                        <div className=' grid gap-y-14 gap-x-11 grid-cols-4 p-12'>
                            {videos.map((item)=>{
                                return <Card data = {item} key={item.videoId}/>
                            })}
                        </div>
                    </InfiniteScroll>
                ):(
                    <Spinner/>
                )
            }
            </div>
        </div>
    )
}

export default Home
