// import axios from 'axios';
// import { convertRawtoString } from './convertRawtoString';
// import { parseVideoDuration } from './parseVideoDuration';
// import { timeSince } from './timeSince';
// const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;


// export const parseData = async (items) => {
//     try {
//         // console.log('Items:', items);

//         const videoIds = [];
//         const channelIds = [];

//         items.forEach(item => {
//             channelIds.push(item.snippet.channelId);
//             videoIds.push(item.id.videoId);
//         });


//         const { data: { items: channelsData } } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`);
        

//         const parsedChannelsData = channelsData.map(channel => ({
//             id: channel.id,
//             image: channel.snippet.thumbnails.default.url,
//         }));

        
        
//         const { data: { items: videosData } } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`);
        

//         const parseData = items.map((item, index) => {
//             const { image: channelImage } = parsedChannelsData.find(data => data.id === item.snippet.channelId) || {};
//             if (channelImage) {
//                 return {
//                     videoId: item.id.videoId,
//                     videoTitle: item.snippet.title,
//                     videoDescription: item.snippet.description,
//                     videoThumbnail: item.snippet.thumbnails.medium.url,
//                     videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
//                     videoDuration: parseVideoDuration(videosData[index].contentDetails.duration),
//                     videoViews: convertRawtoString(videosData[index].statistics.viewCount),
//                     videoAge: timeSince(new Date(item.snippet.publishedAt)),
//                     channelInfo: {
//                         id: item.snippet.channelId,
//                         image: channelImage,
//                         name: item.snippet.channelTitle,
//                     },
//                 };
//             }
//             return null; // Skip invalid data
//         }).filter(Boolean); // Remove null entries

        

//         return parseData;
//     } catch (err) {
//         console.log(err);
//         return []; // Return an empty array in case of error
//     }
// }




// export const parseData = async (items) => {
    //     try {
//         const videoIds = [];
//         const channelIds = [];

//         items.forEach(item => {
//             channelIds.push(item.snippet.channelId);
//             videoIds.push(item.id.videoId);
//         });

//         const { data: { items: channelsData } } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`);

//         const parsedChannelsData = channelsData.map(channel => ({
    //             id: channel.id,
    //             image: channel.snippet.thumbnails.default.url,
    //         }));
    
    //         const { data: { items: videosData } } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`);
    
    //         const parseData = items.map((item, index) => {
        //             const channelData = parsedChannelsData.find(data => data.id === item.snippet.channelId);
        //             const channelImage = channelData ? channelData.image : null;
        
        //             if (channelImage) {
            //                 return {
                //                     videoId: item.id.videoId,
                //                     videoTitle: item.snippet.title,
                //                     videoDescription: item.snippet.description,
                //                     videoThumbnail: item.snippet.thumbnails.medium.url,
                //                     videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                //                     videoDuration: parseVideoDuration(videosData[index].contentDetails.duration),
                //                     videoViews: convertRawtoString(videosData[index].statistics.viewCount),
                //                     videoAge: timeSince(new Date(item.snippet.publishedAt)),
                //                     channelInfo: {
//                         id: item.snippet.channelId,
//                         image: channelImage,
//                         name: item.snippet.channelTitle,
//                     },
//                 };
//             }
//             return null; // Skip invalid data
//         }).filter(Boolean); // Remove null entries

//         return parseData;
//     } catch (err) {
    //         console.log(err);
    //         return []; // Return an empty array in case of error
    //     }
    // }
    
    import axios from 'axios';
import { convertRawtoString } from './convertRawtoString';
import { parseVideoDuration } from './parseVideoDuration';
import { timeSince } from './timeSince';
    const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;



    export const parseData = async (items) => {

        if (!Array.isArray(items)) {
            console.log("items is not an array:", items);
            return [];
        }

        try {
            // console.log('Items:', items);

        const videoIds = [];
        const channelIds = [];

        items.forEach(item => {
            if (item && item.snippet) {
                console.log(item.snippet.channelId);
                channelIds.push(item.snippet.channelId);
                videoIds.push(item.id.videoId);
            }
        });

        if (channelIds.length > 0) {
            const { data: { items: channelsData } } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`);

            const parsedChannelsData = channelsData.map(channel => ({
                id: channel.id,
                image: channel.snippet.thumbnails.default.url,
            }));

            const { data: { items: videosData } } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`);

            const parseData = items.map((item, index) => {
                if (item && item.snippet) {
                    const { image: channelImage } = parsedChannelsData.find(data => data.id === item.snippet.channelId) || {};
                    if (channelImage) {
                        return {
                            videoId: item.id.videoId,
                            videoTitle: item.snippet.title,
                            videoDescription: item.snippet.description,
                            videoThumbnail: item.snippet.thumbnails.medium.url,
                            videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                            videoDuration: parseVideoDuration(videosData[index].contentDetails.duration),
                            videoViews: convertRawtoString(videosData[index].statistics.viewCount),
                            videoAge: timeSince(new Date(item.snippet.publishedAt)),
                            channelInfo: {
                                id: item.snippet.channelId,
                                image: channelImage,
                                name: item.snippet.channelTitle,
                            },
                        };
                    }
                }
                return null; // Skip invalid data
            }).filter(Boolean); // Remove null entries

            return parseData;
        }

        return [];
    } catch (err) {
        console.log(err);
        return []; // Return an empty array in case of error
    }
}