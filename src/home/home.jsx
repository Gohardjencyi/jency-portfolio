import Navbar from "../components/navbar/navbar";
// import flower from "../assets/snow-gif.gif";
import Intro from "../components/Intro/intro";
import About from "../components/About/about";
import Resume from "../components/Resume/resume";
import Portfolio from '../components/Portfolio/portfolio';
import Contacts from "../components/Contacts";


function Home() {
    return (
        <div className="grid grid-cols-12">
            {/* Sidebar */}
            <div style={{backgroundColor:"#18000b"}} className="sticky z-10 bg-[#18000b] top-0 md:h-screen col-span-12 md:col-span-3  lg:col-span-2">
                <Navbar />
            </div>
            {/* Main Content */}
            <div className="overflow-y-auto px-8 col-span-12 md:col-span-9 lg:col-span-10">
                <Intro />
                <About />
                <Resume/>
                <Portfolio/>
                <Contacts/>
            </div>
            <div className="ball"></div>
        </div>
    );
}

export default Home;
