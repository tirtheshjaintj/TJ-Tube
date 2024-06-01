import React from 'react'
import Loader from './Loader'
import { Stack } from '@mui/material'

function LoadSkeleton({direction}) {
  return (
    <Stack direction={direction||'row'} flexWrap='wrap' sx={{ justifyContent:'center' }} gap={2}>
<Loader/><Loader/><Loader/>
<Loader/><Loader/><Loader/>
<Loader/><Loader/><Loader/>

</Stack>
  )
}

export default LoadSkeleton