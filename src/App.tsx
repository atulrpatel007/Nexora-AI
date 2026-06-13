import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/DashBoard'
import Article from './pages/Article'
import BlogTitle from './pages/BlogTitle'
import GenerateImage from './pages/GenerateImage'
import RemoveBackground from './pages/RemoveBackground'
import Object from './pages/Object'
import Resume from './pages/Resume'
import Community from './pages/Community'
import Pricing from './pages/pricing'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/app' element={<Layout/>}>
        <Route index element={<Dashboard/> }/>
        <Route path='article' element={<Article/>}/>
        <Route path='blog' element={<BlogTitle/>}/>
        <Route path='images' element={<GenerateImage/>}/>
        <Route path='background' element={<RemoveBackground/>}/>
        <Route path='object' element={<Object/>}/>
        <Route path='resume' element={<Resume/>}/>
        <Route path='community' element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App