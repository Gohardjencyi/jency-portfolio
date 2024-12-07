import { HashRouter, Route, Routes } from "react-router-dom";
import Intro from "../components/Intro/intro";
import About from "../components/About/about";
import Resume from "../components/Resume/resume";

function Routing() {
    return ( 
        <HashRouter>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/about" element={<About />} />
                {/* Uncomment the following as needed */}
                <Route path="/resume" element={<Resume />} />
                {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </HashRouter>
    );
}

export default Routing;
