import "./App.css"
import Main from "./pages/main/main"
import Video from "./pages/video/video"
import { videoLoader } from "../src/utils/function"
// import { useLocation } from "react-router-dom"
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Quiz from "./pages/quiz/quiz"

const App = () => {
  return <RouterProvider router={router} />
}

export default App

// Router setup
const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  {
    path: "/video",
    element: <Video />,
    loader: videoLoader,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
])
