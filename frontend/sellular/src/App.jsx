import { useEffect, useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Pages/Login';
import Home from './Pages/Home';
import {Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Threads from './Pages/Threads';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NotFound from './components/NotFound.jsx';
import FindTeamMates from './pages/FindTeamMates';
import ViewThread from './Pages/ViewThread';
import Apply from './Pages/Apply';
import TimeLine from './components/TimeLine';
import CreatePost from './components/CreatePost';
import { ModalsProvider } from '@saas-ui/modals'
import CreateEvent from './components/CreateEvent';
import CreateTeampost from './components/CreateTeampost';
import Hackathons from './pages/Hackathons';
import MyHackathons from './pages/MyHackathons';
import ViewProfile from './pages/ViewProfile';
import ViewHackathon from './pages/viewHackathon';
import MultiStep from './components/MultiStep';
import AppliedHackathons from './pages/AppliedHackathons';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='home' element={<Home />}>
        <Route path='' element={<Threads />} />
        <Route path='findmates' element={<FindTeamMates />} />
        <Route path='thread/:id' element={<ViewThread />} />
        <Route path='thread/apply/:id' element={<Apply />} />
        <Route path='createpost' element={<CreateTeampost />} />
        <Route path='createevent' element={<CreateEvent />} />
        <Route path='hackathons' element={<Hackathons />} />
        <Route path='myHackathons' element={<MyHackathons />} />
        <Route path='myprofile' element={<ViewProfile />} />
        <Route path='profile/:id' element={<ViewProfile />} />
        <Route path='event/:id' element={<ViewThread />} />
        <Route path='hackathon/:id' element={<ViewHackathon />} />
        <Route path='myAppliedHackathons' element={<AppliedHackathons />} />


      </Route>
      <Route path='timeline' element={<TimeLine />} />
      <Route path='registertwo' element={<MultiStep />} />
      <Route path='register' element={<SignUp />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
