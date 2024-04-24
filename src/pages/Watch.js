// import React, { useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../hooks/useApp';
// import { getRecommendedVideos } from '../store/reducers/getRecommendedVideos';
// import { getVideoDetails, parseData } from '../store/reducers/getVideoDetails';

// export default function Watch() {
    //     const { id } = useParams();
    //     const dispatch = useAppDispatch();
    //     const navigate = useNavigate();
    //     const currentPlaying = useAppSelector((state) => state.youtubeApp.currentPlaying);
    
    //     useEffect(() => {
        //         if (id) {
            //             dispatch(getVideoDetails(id))
            //                 .then((action) => {
                //                     if (action.payload && action.payload.data && action.payload.data.items && action.payload.data.items.length > 0) {
                    //                         parseData(action.payload.data.items);
                    //                     }
                    //                 });
                    //         } else {
                        //             navigate("/");
                        //         }
                        //     }, [id, dispatch, navigate]);
                        
                        //     useEffect(() => {
                            //         if (currentPlaying && id) {
                                //             dispatch(getRecommendedVideos(id));
                                //         }
                                //     }, [currentPlaying, dispatch, id]);
                                
                                //     return (
                                    //         <>
                                    //             {currentPlaying && currentPlaying?.videoId === id && (
                                        //                 <div className='max-h-screen overflow-auto'>
                                        //                     <div style={{ height: "7.5vh" }}>
                                        //                         <NavBar />
                                        //                     </div>
                                        //                     <div>
                                        //                         <div>
                                        //                             <div>
                                        //                                 <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                        //                                     frameBorder={0}
                                        //                                     width={800}
                                        //                                     height={502}
                                        //                                     allowFullScreen
                                        //                                     title='Youtube Player'></iframe>
                                        //                             </div>
                                        //                         </div>
                                        //                     </div>
                                        //                 </div>
                                        //             )}
                                        //         </>
                                        //     )
                                        // }
                                        import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from '../components/NavBar';
                                        
                                        import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
                                        
                                        export default function Watch() {
                                            const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );

  console.log(currentPlaying);

  const recommendedVideo = useAppSelector(
    (state) => state.youtubeApp.recommendedVideo
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <div>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div >
            <NavBar />
          </div>
          <div>
            <div>
              <div>
                <div>
                  <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                  frameBorder="0"
                  width="800"
                  height="502"
                  allowFullScreen
                  title="Youtube Player">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
