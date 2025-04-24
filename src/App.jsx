import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from "react-router-dom"
import './App.css'
import Meet_Room_Create from "./pages/Meet_Room_Create"
import Zego_Cloud from "./pages/Zego_Cloud "

const App = () => {
  return (
    <Routes>
      <Route path="/meet-room-create" element={<Meet_Room_Create />} />
      <Route path="/" element={<Zego_Cloud />} />
    </Routes>
  )
}

export default App