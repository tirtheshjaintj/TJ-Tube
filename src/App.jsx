import { useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar} from './components'

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
  
    document.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  return (
    <>
    <Box sx={{backgroundColor:'#141c3a'}}>
      <Navbar/>
     <Outlet/>
    </Box>
    </>
  )
}

export default App
