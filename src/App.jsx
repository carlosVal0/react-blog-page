import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Layout from './containers/Layout'
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import './App.css'

function App() {


  return (
    <div className="App">
      <Header />
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
       </BrowserRouter>
       
    </div>
  )
}

export default App
