import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { demoThumbnailUrl,demoChannelUrl} from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop ,channelId}) => (
  <Box
  sx={{
    minWidth: { xs: '90vw', md: '380px' },
    margin: '15px',
    color: '#FFFFFF',
    borderRadius: '50px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    marginTop,
    '&:hover': {
      transform: 'scale(1.1)',
      filter: 'drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.7))',
    },
  }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId||channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
       <div className="center">
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        </div>
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;