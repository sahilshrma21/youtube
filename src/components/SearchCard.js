import React from 'react'
import { Link } from 'react-router-dom'

const SearchCard = ({data}) => {
    return (
        <div className='flex gap-3'>
            <div className="relative">
                <span className="absolute bottom-3 right-3 text-sm bg-slate-900 m-2 px-2 py-0.5 z-10 rounded">{data.videoDuration}</span>
                <Link to={`/Watch/${data.videoId}`}>
                <img src={data.videoThumbnail} alt='Thumbnail' className="h-52 w-96 m-3 rounded" />
                </Link>
            </div>
            <div className='flex gap-1 my-4 flex-col'>
                <h3 className='max-w-2xl'>
                    <a href='#' className='line-clamp-2'>
                        {data.videoTitle}
                    </a>
                </h3>
                <div className='text-xs text-gray-400'>
                    <div>
                        <div>
                            <span className="after:contents-['.'] after:mx-1">{data.videoViews} Views</span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
                <div className='min-w-fit my-2'>
                    <a href='#' className='flex items-center gap-2 text-xs text-gray-400'>
                        <img scr={data.channelInfo.image} alt='channel' className='h-9 w-9 rounded-full'/>
                        <span>{data.channelInfo.name}</span>
                    </a>
                </div>
                <div className='max-w-2xl line-clamp-2 text-sm text-gray-400'>
                    <p>{data.videoDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchCard
