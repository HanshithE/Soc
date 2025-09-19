import { useState } from 'react';
import Nav from './components/Nav';
import Head , {Footer} from './components/Base';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}, your message is: ${message}`);
  }

  return (
    <>
      <BrowserRouter>
      <Head />
        <Nav />
        <Routes>
          <Route path="/homes" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <h1>Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;


