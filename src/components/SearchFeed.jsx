import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

function SearchFeed() {
  const [videos,setVideos]=useState([]);
  const {searchTerm}=useParams();
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((response)=>response.items)
    .then((data)=>{
         setVideos(data);
    })
    .catch((error)=>{})
    .finally(()=>window.scrollTo(0, 0));
  },[videos]);
  return (
<Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
  <Typography variant='h4' fontWeight='bold' mb={2} className='center' sx={{color:'white'}}>
  {`${searchTerm}`} <span style={{color:'#F31503',marginLeft:'5px'}}> Videos</span>
  </Typography>
  <Videos videos={videos}/>
</Box>
  )
}

export default SearchFeed