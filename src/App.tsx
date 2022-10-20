import { Layout } from 'components'
import {
  BandInfo,
  BandInfoEdit,
  Dashboard,
  Landing,
  Login,
  Members,
  NewMember,
  NewSocialLink,
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
          <Route path='/members/new' element={<NewMember />} />
          <Route path='/social-links' element={<SocialLinks />} />
          <Route path='/social-links/new' element={<NewSocialLink />} />
          <Route path='/band-info' element={<BandInfo />} />
          <Route path='/band-info/edit' element={<BandInfoEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
