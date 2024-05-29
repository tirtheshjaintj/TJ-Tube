import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom';
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function VideoDetail() {
  const {id}=useParams();
  const [videoDetail,setVideoDetail]=useState(null);
  const[videos,setVideos]=useState([]);
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data?.items[0]))
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data?.items))
  },[id]);
  return (
  <Box minHeight='100vh' p={2}>
<Stack direction={{xs:'column',md:'row'}}>
<Box flex={1}>
<Box sx={{width:'100%',position:'sticky',top:'86px'}}>
<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} playing={true} className='react-player' controls/>
<Typography variant="h5" color="#fff" fontWeight='bold' p={1}>
  {videoDetail?.snippet?.title}
</Typography>
<Stack direction={{xs:'column',md:'row'}} justifyContent="space-between" sx={{ color: "#fff" }}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant="h6"  color="#fff"  className="category-btn">
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
           </Stack>
</Box>
</Box>
<Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
  <div className="center">
<Videos videos={videos} direction="column" />
</div>
</Box>
</Stack>
  </Box>
  )
}

export default VideoDetail