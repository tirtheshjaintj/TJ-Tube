import React from 'react'
import { Stack,Box } from '@mui/material';
import {VideoCard,ChannelCard, LoadSkeleton} from './';
import CircularProgress from '@mui/material/CircularProgress';
function Videos({videos,direction}) {
  if(!videos?.length)  return <div className="center"><LoadSkeleton direction={direction||'row'} /></div>;
  return (
<div className="center">
<Stack direction={direction||'row'} flexWrap='wrap'  sx={{ justifyContent:'center',alignItems:'center'}} gap={2}>
  {videos && videos.map((item,index)=>(
    <Box key={index}>
        {item.id.videoId && <div className="center2"><VideoCard video={item}/></div>}
        {item.id.channelId && <div className="center2"><ChannelCard channelDetail={item}/> </div>}
</Box>))   
}
</Stack>
</div>
  ) 
}

export default Videos