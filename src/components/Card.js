import { Link } from "react-router-dom";

const Card = ({ data }) => {
    console.log(data);
    return (

        <div className="h-60 w-64 flex flex-col gap-3">
            <div className="relative">
                <span className="absolute bottom-3 right-3 text-sm bg-slate-900 px-2 py-0.5 z-10 rounded">{data.videoDuration}</span>
                <Link to={`/Watch/${data.videoId}`}>
                <img src={data.videoThumbnail} alt='Thumbnail' className="h-44 w-72" />
                </Link>
            </div>
            <div className="flex gap-2">
                <div className="min-w-fit">
                    <a href='#'><img src={data.channelInfo.image} alt='Channel image' className="h-9 w-9 rounded-full" /></a>
                </div>
                <div>
                    <h3><a href="#" className="line-clamp-2">{data.videoTitle}</a></h3>
                    <div>
                        <div className="text-sm text-gray-400">
                            <a href="#" className="hover:text-white">{data.channelInfo.name}</a>
                        </div>
                        <div>
                            <span className="after:contents-['.'] after:mx-1">{data.videoViews} Views</span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
