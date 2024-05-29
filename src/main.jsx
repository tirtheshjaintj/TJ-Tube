import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import {Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';
const router=createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Feed/>}/>
      <Route path='/video/:id' element={<VideoDetail/>}/>
      <Route path='/channel/:id' element={<ChannelDetail/>}/>
      <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
