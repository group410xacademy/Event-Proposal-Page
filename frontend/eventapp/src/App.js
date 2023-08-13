import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Form from './components/Form';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'

import VendorProfile from './pages/VendorProfile';
import Home from './pages/Home';
function App() {
  return (
    <div className='App'>
{/* <div>logo</div>
<div className="d-flex flex-row justify-content-between px-5">

  <div>
    text will be diaplyed here
  </div>
  <div className='bg-white'>
   <Form/>
  </div>
</div>
 <CreatePropsal/> */}
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/vendor' element={<VendorProfile/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
