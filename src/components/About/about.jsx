// import jency from "../../assets/jency-profile.jpg";

function About() {
    const skills =[
        {name:"HTML", percentage:"100%"},
        {name:"CSS", percentage:"100%"},
        {name:"JavaScript", percentage:"100%"},
        {name:"Tailwind", percentage:"100%"},
        {name:"Bootstrap", percentage:"100%"},
        {name:"React", percentage:"90%"},
        {name:"Wordpress", percentage:"90%"},
        {name:"Node.js", percentage:"80%"},
        {name:"MongoDB", percentage:"80%"},
        {name:"MySQL", percentage:"80%"},
        {name:"Express.js", percentage:"80%"},       
    ]
    const personal =[
        {name:"Name", value:"Gohard Jency"},
        {name:"Email", value:"gohardjency@gmail.com"},
        {name:"Phone", value:"+91 638 033 8098"},
        {name:"Address", value:"Tamil Nadu, India"},
        {name:"Languages", value:"English, Tamil"},
        {name:"Freelance", value:"Available"},

    ]
    return ( 
        <section id="about" className="my-10 block py-10">
            <div>
                <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-3xl mb-10 text-white pb-3 border-b-2 inline-block border-white">ABOUT ME</h2>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center mb-5 lg:col-start-2 lg:col-span-4">
                        <img src='../../assets/jency-profile.jpg' width="400" height="400" alt="jency-photo" />
                    </div>
                    <div className="col-span-12 lg:col-end-13 text-white lg:col-span-7">
                        <h3 className="lg:text-5xl text-4xl font-medium mb-5">Hi There! I&apos;m <span className="text-amber-600">Gohard Jency</span></h3>
                        <h5><span className="text-amber-600 inline-block text-2xl lg:text-3xl mb-4">Fullstack web developer</span></h5>
                        <p className="lg:text-lg text-base leading-8 mb-10 text-gray-300 lg:leading-9">Hi, I&apos;m a web developer with a passion for creating dynamic and user-friendly websites. I specialize in both front-end and back-end development, utilizing technologies like HTML, CSS, JavaScript, React and various frameworks. My goal is to deliver seamless, interactive, and efficient web experiences.</p>
                        {
                            personal.map((personal, index) => (
                                <li className="list-none text-gray-300 mb-3 text-base lg:text-lg mb-3" key={index}>
                                    <span className="w-20 lg:w-40 inline-block">{personal.name}</span> : <span className="inline-block"> &nbsp;&nbsp;{personal.value}</span>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
            <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-3xl my-10 text-white pb-3 border-b-2 inline-block border-white">SKILLS</h2>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 mb-5 lg:col-start-1 lg:col-end-6 text-white lg:col-span-5 pr-5">
                        <h3 className="text-3xl lg:text-4xl leading-10 font-medium mb-5">All the skills that I have in that field of work are mentioned.</h3>
                        <p className="text-base lg:text-lg text-gray-300 leading-8 lg:leading-9">As a web developer, I am skilled in creating responsive and visually appealing websites with a strong focus on functionality and performance. My expertise lies in front-end technologies like HTML, CSS, and JavaScript, ensuring seamless user experiences. Additionally, I have a solid understanding of back-end development, enabling me to build and maintain robust web applications. With a commitment to delivering high-quality results, I continuously enhance my skills to stay updated with the latest trends and technologies in the field.</p>
                    </div>
                    <div className="lg:col-end-13 col-span-12 text-white lg:col-span-6">
                        {
                            skills.map((skill, index) => (
                                <div className="mb-3 lg:mb-5" key={index}>
                                    <div className="flex justify-between pb-2">
                                        <div className="text-base font-medium dark:text-white">{skill.name}</div>
                                        <div className="text-base font-medium dark:text-white">{skill.percentage}</div>
                                    </div>
                                    <div className="w-full bg-amber-100 rounded-full h-0.5 ">
                                        <div className="bg-amber-600 h-0.5 rounded-full" style={{ width: skill.percentage }}></div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
           
            
        </section>
     );
}

export default About;