import React from 'react'
import { Stack,Box } from '@mui/material';
import {VideoCard,ChannelCard} from './';
import CircularProgress from '@mui/material/CircularProgress';
function Videos({videos,direction}) {
    if(!videos?.length)  return <div className="center"><CircularProgress/> </div>;
  return (
<Stack direction={direction||'row'} flexWrap='wrap' sx={{ justifyContent:'center' }} gap={2}>
  {videos && videos.map((item,index)=>(
    <Box key={index}>
        {item.id.videoId && <div className="center"><VideoCard video={item}/></div>}
        {item.id.channelId && <div className="center"><ChannelCard channelDetail={item}/> </div>}
</Box>))   
}
</Stack>
  ) 
}

export default Videos