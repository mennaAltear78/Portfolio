import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import MainChatBot from "./components/MainChatBot"
function App() {
  return (
    <main className="dark:bg-black-500 bg-white ">
      <Router>
<MainChatBot>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes></MainChatBot>
      </Router>
    </main>
  );
}

export default App;
