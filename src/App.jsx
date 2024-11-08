
import "./App.css"
import Main from "./pages/main/main"
import { useLocation } from "react-router-dom"
import { BrowserRouter,Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      {/* {!isAuthPage && <Navbar />}
      {!isAuthPage && <Sidebar />} */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/signUp" element={<Auth />} /> */}
        {/* <Route path="/paste" element={<Paste />} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
