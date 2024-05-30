import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
const create=(obj)=>{
return React.createElement(obj);
}

export const categories = [
  { name: 'Trending', icon: create(HomeIcon) },
  { name: 'Coding', icon: create(CodeIcon) },
  { name: 'Music', icon: create(MusicNoteIcon) },
  { name: 'Education', icon: create(SchoolIcon) },
  { name: 'Podcast', icon: create(GraphicEqIcon) },
  { name: 'Movie', icon: create(OndemandVideoIcon) },
  { name: 'Gaming', icon: create(SportsEsportsIcon) },
  { name: 'Live', icon: create(LiveTvIcon) },
  { name: 'Sport', icon: create(FitnessCenterIcon) },
  { name: 'Fashion', icon: create(CheckroomIcon) },
  { name: 'Beauty', icon: create(FaceRetouchingNaturalIcon) },
  { name: 'Comedy', icon: create(TheaterComedyIcon) },
  { name: 'Gym', icon: create(FitnessCenterIcon) },
  { name: 'Crypto', icon: create(DeveloperModeIcon) },
];

export const demoThumbnailUrl = 'https://tirtheshjain.netlify.app/avatar.svg';
export const demoChannelUrl = '/channel/UC0rRgbROX0ZW_SgaWpqg2CA';
export const demoVideoUrl = '/video/iVmLpktg_4o';
export const demoChannelTitle = 'Tirthesh Jain';
export const demoVideoTitle = 'Tirthesh Jain Youtube';
export const demoProfilePicture = 'https://tirtheshjain.netlify.app/avatar.svg';
