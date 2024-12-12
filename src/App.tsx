
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './MyNavbar'
import MainContent from './MainContent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import NewsDetails from './NewsDetails'


function App() {
  

  return (
   
   <>
   <BrowserRouter>
      <MyNavbar/>
  
      <Routes>
        <Route path='/' element={ <MainContent/>}/>
        <Route path='/details/:id' element={ <NewsDetails/>}/>
        <Route path='*' element={ <NotFound/>}/>
     
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
