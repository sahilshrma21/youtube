
import { createSlice } from '@reduxjs/toolkit';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import { getRecommendedVideos } from '../store/reducers/getRecommendedVideos';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import { getVideoDetails } from '../store/reducers/getVideoDetails';

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResult: [],
    nextPageToken: null,
    recommendedVideo: [],
}

// const youtubeSlice = createSlice({
//     name: "youtubeApp",
//     initialState,
//     reducers: {
//         clearVideos:(state)=>{
//             state.videos = [];
//             state.nextPageToken = null;
//         },
//         changeSearchTerm:(state,action)=>{
//             state.searchTerm = action.payload;
//         },
//         clearSearchTerm:(state)=>{
//             state.searchTerm = "";
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
//             if (action.payload && action.payload.parsedData) {
//                 state.videos = action.payload.parsedData;
//                 state.nextPageToken = action.payload.nextPageToken;
//             }
//         });
//         builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
//             if (action.payload && action.payload.parsedData) {
//                 state.videos = action.payload.parsedData;
//                 state.nextPageToken = action.payload.nextPageToken;
//             }
//         });
//         builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
//             if (action.payload && action.payload.parsedData) {
//                 state.recommendedVideo = action.payload.parsedData;
//             }
//         });
//         builder.addCase(getVideoDetails.fulfilled, (state, action) => {
//             if (action.payload && action.payload.parsedData) {
//                 state.currentPlaying = action.payload.currentPlaying;
//             }
//         });
//     }
    
    
// });


const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHomePageVideos.fulfilled, (state, action) => {
                if (action.payload && action.payload.parsedData) {
                    state.videos = action.payload.parsedData;
                    state.nextPageToken = action.payload.nextPageToken;
                }
            })
            .addCase(getSearchPageVideos.fulfilled, (state, action) => {
                if (action.payload && action.payload.parsedData) {
                    state.videos = action.payload.parsedData;
                    state.nextPageToken = action.payload.nextPageToken;
                }
            })
            .addCase(getRecommendedVideos.fulfilled, (state, action) => {
                if (action.payload && action.payload.parsedData) {
                    state.recommendedVideo = action.payload.parsedData;
                }
            })
            .addCase(getVideoDetails.fulfilled, (state, action) => {
                if (action.payload && action.payload.parsedData) {
                    state.currentPlaying = action.payload.parsedData;
                }
            });
    }
});

export const {clearVideos,changeSearchTerm,clearSearchTerm} = youtubeSlice.actions;
export default youtubeSlice.reducer;

