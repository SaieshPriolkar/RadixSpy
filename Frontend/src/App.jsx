import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './components/Landing';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Features from './components/Features';
import Team from './components/Team';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import TraceAccounts from './components/pages/TraceAccounts';
import Video from './components/pages/Video';
import Control from './components/pages/Control';
import History from './components/pages/History';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Landing />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/team",
    element: (
      <div>
        <Header />
        <Team />
      </div>
    ),
  },
  {
    path: "/features",
    element: (
      <div>
        <Header />
        <Features />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div className='flex gap-5'>
        <Control />
        <Home />
      </div>
    ),
  },
  {
    path: "/post",
    element: (
      <div className='flex gap-5'>
        <Control />
        <Post />
      </div>
    ),
  },
  {
    path: "/trace-accounts",
    element: (
      <div className='flex gap-5'>
        <Control />
        <TraceAccounts />
      </div>
    ),
  },
  {
    path: "/video",
    element: (
      <div className='flex gap-5'>
        <Control />
        <Video />
      </div>
    ),
  },
  {
    path: "/history",
    element: (
      <div className='flex gap-5'>
        <Control />
        <History />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
