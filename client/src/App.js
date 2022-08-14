import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Bounce, Flip, Slide, ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Error, Landing, ProtectedRoute, Register } from './pages'
import {
  AddJob,
  AllJobs,
  Profile,
  Settings,
  SharedLayout,
  Stats,
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nested routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }>
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        draggablePercent={80}
        pauseOnHover={false}
        transition={Zoom}
      />
    </BrowserRouter>
  )
}

export default App
