import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';

export default function Loader() {
    return (
        <Card sx={{
            width: { xs: '95%', md: '380px' },
            margin:  { xs: '5px', md: '15px' },
            color: '#FFFFFF',
            backgroundColor: '#141c3b', // Corrected the hex value for the dark background
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.01)',
              boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.7)',
            },
          }}>
          <CardHeader
            avatar={
           <Skeleton 
               animation="wave" 
               variant="circular" 
               width={40} 
               height={40}
               sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', highlightColor: 'rgba(255, 255, 255, 0.1)' }}
           />}
            title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                  sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', highlightColor: 'rgba(255, 255, 255, 0.1)' }}
                />
            }
            subheader={
                <Skeleton 
                    animation="wave" 
                    height={10} 
                    width="40%" 
                    sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', highlightColor: 'rgba(255, 255, 255, 0.1)' }}
                />
            }
          />
            <Skeleton 
                sx={{ height: 190, bgcolor: 'rgba(255, 255, 255, 0.13)', highlightColor: 'rgba(255, 255, 255, 0.1)' }} 
                animation="wave" 
                variant="rectangular" 
            />
          <CardContent>
              <React.Fragment>
                <Skeleton 
                    animation="wave" 
                    height={10} 
                    style={{ marginBottom: 6 }} 
                    sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', highlightColor: 'rgba(255, 255, 255, 0.1)' }}
                />
                <Skeleton 
                    animation="wave" 
                    height={10} 
                    width="80%" 
                    sx={{ bgcolor: 'rgba(255, 255, 255, 0.13)', highlightColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </React.Fragment>
          </CardContent>
        </Card>
      );
}
