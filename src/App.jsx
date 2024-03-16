import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/home/Home"
import { useState } from "react"
import Video from "./Pages/Video/Video";


function App() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </>)
}

export default App
