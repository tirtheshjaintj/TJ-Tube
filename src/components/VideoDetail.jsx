import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Tooltip, Avatar } from '@mui/material';
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
    <Box height={{ xs: 'auto', md: '100vh' }} display="flex" flexDirection={{ xs: 'column', md: 'row' }} overflow={{ xs: 'visible', md: 'hidden' }}>
      <Stack direction={{ xs: 'column', md: 'row' }} width="100%">
        <Box flex={{ xs: 'none', md: 3 }} height={{ xs: 'auto', md: '100vh' }} sx={{ overflowY: { xs: 'visible', md: 'auto' } }}>
          <Box sx={{ width: '100%', position: 'sticky', top: { xs: '0px', md: '10px' }, paddingTop: '110px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
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
              playing={true}
              className='react-player'
              controls
            />
            <Typography variant="h5" color="#fff" fontWeight='bold' p={1}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" sx={{ color: "#fff" }}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Tooltip title={videoDetail?.snippet?.channelTitle || ""}>
                  <Stack direction="row" alignItems="center" gap={1} p={2}>
                    <Avatar
                      src={videoDetail?.snippet?.thumbnails?.default?.url}
                      alt={videoDetail?.snippet?.channelTitle}
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography variant="h6" color="#fff">
                      {videoDetail?.snippet?.channelTitle}
                    </Typography>
                  </Stack>
                </Tooltip>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center" justifyContent='end' pr={1}>
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
        <Box flex={{ xs: 'none', md: 1 }} height={{ xs: 'auto', md: '100vh' }} sx={{ overflowY: { xs: 'visible', md: 'auto' } }}>
          <Box px={2} py={{ md: 1, xs: 5 }} sx={{ paddingTop: { xs: '10px', md: '100px' } }} justifyContent="center" alignItems="center">
            <div className="center">
              <Videos videos={videos} direction="column" />
            </div>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
