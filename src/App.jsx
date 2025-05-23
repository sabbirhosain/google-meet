import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from "react-router-dom"
import './App.css'
import Meet_Room_Create from "./pages/Meet_Room_Create"
import Zego_Cloud from "./pages/Zego_Cloud "
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <Routes>
      <Route path="/meet-room-create" element={<Meet_Room_Create />} />
      <Route path="/join-meeting/:id" element={<Zego_Cloud />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App