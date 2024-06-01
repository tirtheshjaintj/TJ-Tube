import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Box, IconButton, Tooltip, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from 'react-player/youtube';
import { format } from 'date-fns'; // Import the date-fns library for date formatting
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const [isHovered, setIsHovered] = useState(false);``
  return (
    <Card
      sx={{
        minWidth: { xs: '90vw', md: '350px' },
        margin: '15px',
        color: '#FFFFFF',
        backgroundColor: '#141c3a',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.7)',
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ textDecoration: 'none' }}>
        <Box sx={{ position: 'relative', width: '100%', height: '210px' }}>
          {isHovered ? (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              playing={isHovered}
              // width="100%"
              // height="100%"
              sx={{minWidth: { xs: '90vw', md: '350px' }}}
              style={{ position: 'absolute', top: 0, left: 0 }}
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
                    mute: 1 // Mute video
                  },
                },
              }}
            />
          ) : (
            <Box
              component="img"
              src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
              alt={snippet?.title}
              
              sx={{ position: 'absolute', top: 0, left: 0 ,minWidth: { xs: '90vw', md: '350px' }, height: '100%', objectFit: 'cover' }}
            />
          )}
        </Box>
      </Link>
      <CardContent sx={{ backgroundColor: '#141c3a', padding: '16px', height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ textDecoration: 'none' }}>
          <Tooltip title={snippet?.title}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFFFFF" gutterBottom>
              {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}...
            </Typography>
          </Tooltip>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Avatar src={snippet?.thumbnails?.default?.url || ''} alt={snippet?.channelTitle} />
          <Tooltip title={snippet?.channelTitle}>
            <Typography variant="body2" fontWeight='bold' color="#AAAAAA">
              {snippet?.channelTitle || demoChannelTitle}
            </Typography>
          </Tooltip>
          <CheckCircleIcon sx={{ fontSize: "14px", color: "#AAAAAA" }} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
