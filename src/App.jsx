import "./App.css";
import Main from "./pages/main/main";
import Video from "./pages/video/video";
// import { useLocation } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Quiz from "./pages/quiz/quiz";
function App() {
  return (
    <>
      {/* {!isAuthPage && <Navbar />}
      {!isAuthPage && <Sidebar />} */}
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/video" element={<Video />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
