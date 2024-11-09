
import "./App.css"
import Main from "./pages/main/main"
import Video from "./pages/video/video"
// import { useLocation } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
function App() {
  return (
    <>
      {/* {!isAuthPage && <Navbar />}
      {!isAuthPage && <Sidebar />} */}
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/video" element={<Video />} />
            {/* <Route path="/paste" element={<Paste />} /> */}
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  )
}

export default App
