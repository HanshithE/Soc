import {BrwoserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';  
import Contact from './Pages/Contact.jsx';

function F1() {
    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>);
}

export default F1;
