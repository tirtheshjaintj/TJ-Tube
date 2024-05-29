import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Logo from './Logo';
function Navbar() {
  return (
<Stack
backgroundColor='transparent'
direction={{xs:'column',md:'row'}}
alignItems="center"
p={2}
sx={
{position:'fixed',
top:0,
width:'100%',
zIndex:100,
backdropFilter:'blur(20px)',
justifyContent:'space-between'}
}
>
<Link to="/" className='center'>
<Logo/>
</Link>
<SearchBar/>
</Stack>
)
}

export default Navbar