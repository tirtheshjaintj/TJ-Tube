import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Tooltip } from '@mui/material';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data?.items));

    document.title = videoDetail?.snippet?.title || 'TJ Tube';
  }, [id]);

  return (
    <Box minHeight='100vh' p={0} >
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box  sx={{ width: '100%',position: 'sticky',top: '86px',paddingTop:'110px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1, // Remove YouTube logo from control bar
                  rel: 0, // Do not show related videos at the end
                  controls: 1, // Show player controls
                  showinfo: 0, // Hide video title and uploader info
                  fs: 1, // Show fullscreen button
                  disablekb: 0, // Enable keyboard controls
                  loop: 1, // Enable loop playback
                },
              },
            }}
            playing={true} className='react-player' controls />
            <Typography variant="h5" color="#fff" fontWeight='bold' p={1}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" sx={{ color: "#fff" }}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Tooltip title={videoDetail?.snippet?.channelTitle || ""}>
                  <Typography variant="h6" color="#fff" className="category-btn">
                    {videoDetail?.snippet?.channelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
                </Tooltip>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Tooltip title={`${parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views`}>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                  </Typography>
                </Tooltip>
                <Tooltip title={`${parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes`}>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                  </Typography>
                </Tooltip>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} sx={{paddingTop:{xs:'10px',md:'100px'}}} justifyContent="center" alignItems="center" >
          <div className="center">
            <Videos videos={videos} direction="column" />
          </div>
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
