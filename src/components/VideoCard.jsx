import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from 'react-player/youtube';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        width: {xs:'100%',md:'380px'},
        margin: '15px',
        backgroundColor: '#1C1C1E',
        color: '#FFFFFF',
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
        <Box sx={{ position: 'relative', width: '100%', height: '210px' }}> {/* Increased height */}
          {isHovered ? (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              playing={isHovered}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
              config={{
                youtube: {
                  playerVars: { showinfo: 0, controls: 1,mute:1},
                },
              }}
            />
          ) : (
            <Box
              component="img"
              src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
              alt={snippet?.title}
              sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </Box>
      </Link>
      <CardContent sx={{ backgroundColor: '#2C2C2E', padding: '16px', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> {/* Fixed height for content */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFFFFF" gutterBottom>
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}...
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle2" color="#AAAAAA" display="flex" alignItems="center">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "14px", color: "#AAAAAA", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
