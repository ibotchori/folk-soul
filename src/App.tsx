import Layout from 'components/Layout/Layout'
import {
  BandInfo,
  Dashboard,
  Landing,
  Login,
  Members,
  SocialLinks,
} from 'pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/members' element={<Members />} />
          <Route path='/social-links' element={<SocialLinks />} />
          <Route path='/band-info' element={<BandInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
