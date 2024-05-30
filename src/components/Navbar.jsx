import { Stack ,Box} from '@mui/material';
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
justifyContent='center'
p={{xs:0,md:2}}
pt={{xs:2,md:2}}
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
<Box sx={{paddingBottom:{xs:"10px"}}}>
<Logo/>
</Box>
</Link>
<Box sx={{paddingBottom:{xs:"10px"}}}>
<SearchBar/>
</Box>
</Stack>
)
}

export default Navbar