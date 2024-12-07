
import "./intro.css";

function Intro() {
    return ( 
        <section id="intro" className="flex flex-col h-screen intro-block w-full items-center justify-center">
            <h1 className="text-center leading-tight">Hi, I am <span className="typing text-amber-600">Gohard Jency</span></h1>
            <p>I am a <span className="text-amber-600">Fullstack web developer.</span> I can provide clean code and pixel perfect design.
            I also make website more & more interactive with web animations.</p>
        </section>
        
     );
}

export default Intro;