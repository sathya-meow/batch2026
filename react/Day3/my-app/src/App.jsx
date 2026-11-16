import Navbar from "./Components/Navbar";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Help from "./Page/Help";

import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />

            <div className="content" id="home">
                <h1>Welcome to My Website</h1>
                <p>This is my home page.</p>
            </div>

            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </>
    );
};

export default App;