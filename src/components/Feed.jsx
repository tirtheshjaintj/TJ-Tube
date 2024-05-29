import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Sidebar,Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import CircularProgress from '@mui/material/CircularProgress';

function Feed() {
  const [selectedCategory,setSelectedCategory]=useState('Trending');
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((response)=>response.items)
    .then((data)=>{
         console.log(data);
         setVideos(data);
    })
    .catch((error)=>{console.log(error)})
    .finally(()=>window.scrollTo(0, 0));
  },[selectedCategory]);
  return (
<Stack sx={{flexDirection:{sx:"column",md:"row"}}} marginTop={0}>
<Box sx={{height:{sx:'auto',md:'100vh'},borderRight:'1px solid #3D3D3D',px:{sx:0,md:2}}}>
  <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
</Box>
<Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
  <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
    {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
  </Typography>
  <Videos videos={videos}/>
</Box>
</Stack>
  )
}

export default Feed