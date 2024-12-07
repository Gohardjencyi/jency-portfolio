import './resume.css';

// const data = {  
//   education: [  
//     {  
//       degree: "Bachelor of Electronics and Communication Engineering",  
//       year: "2015 - 2019",  
//       university: "Anna University",  
//     //   description: "Focuses on designing, developing, and testing electronic systems and communication devices. It integrates concepts of electronics, telecommunications, signal processing, and embedded systems, equipping students with skills to innovate in industries like telecommunications, robotics, and IoT"  
//     },  
//     {  
//       degree: "Higher Secondary School",  
//       year: "2013 - 2015",  
//       university: "LNP Girls High School",  
//     //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."  
//     },  
//     {  
//       degree: "Higher Secondary School",  
//       year: "2012 - 2013",  
//       university: "LNP Girls High School",  
//     //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."  
//     }  
//   ],
//   experience: [
//     {
//       position: "Frontend Developer",
//       company: "Sri Venkateswara College of Engineering",
//       year: "2022 - Present",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
//     },
//     {
//       position: "Frontend Developer",
//       company: "Sri Venkateswara College of Engineering",
//       year: "2022 - Present",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
//     },
//     {
//       position: "Frontend Developer",
//       company: "Sri Venkateswara College of Engineering",
//       year: "2022 - Present",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."
//     },
//   ]  
// };  

// const Resume = () => {  
//   return (  
//     <div id="resume" className="text-white p-8">  
//         <h2 className="text-3xl font-bold mb-6 flex items-center">  
//             <span className="mr-3 text-yellow-500"></span> Education  
//         </h2>  
//         <div className="grid grid-col-12">
//             <div className="col-span-6">
//                 <div className="relative border-l-2 border-amber-500 pl-8 space-y-10">  
//                     {data.education.map((edu, index) => (  
//                         <div key={index} className="relative group">  
//                             {/* Dot for timeline */}
//                             <div className="absolute -left-[43px] group-hover:bg-black group-hover:border-amber-900 top-0 w-5 h-5 bg-amber-500 rounded-full border-4 border-gray-900"></div>  

//                             {/* Content */}
//                             <div>
//                             <h3 className="text-xl font-semibold">{edu.degree}</h3>  
//                             <span className="block text-gray-400 text-sm mb-2">{edu.year}</span>  
//                             <span className="block text-gray-300 mb-2">{edu.university}</span>  
//                             {/* <p className="text-gray-400 text-sm">{edu.description}</p>   */}
//                             </div>
//                         </div>  
//                     ))}  
//                 </div> 
//             </div>
//             <div className="col-span-6">
//                 <div className="relative border-l-2 border-amber-500 pl-8 space-y-10 mt-10">  
//                     {data.experience.map((exp, index) => (
//                         <div key={index} className="relative group">
//                             <div className="absolute -left-[43px] group-hover:bg-black group-hover:border-amber-900 top-0 w-5 h-5 bg-amber-500 rounded-full border-4 border-gray-900"></div>
//                             <div>
//                             <h3 className="text-xl font-semibold">{exp.position}</h3>
//                             <span className="block text-gray-400 text-sm mb-2">{exp.company}</span>
//                             <span className="block text-gray-300 mb-2">{exp.year}</span>
//                             <p className="text-gray-400 text-sm">{exp.description}</p>
//                             </div>
//                         </div>
//                     ))} 
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Resume;

const data = {  
  education: [  
    {  
      degree: "Scaler",  
      year: "2023 - 2025",  
      university: "Online Learning Platform",
    },  
    {  
      degree: "Bachelor of Engineering",
      year: "2015 - 2019",
      university: "Anna University",
     },  
    {  
      degree: "Higher Secondary School",  
      year: "2013 - 2015",  
      university: "LNP Girls Higher Secondary School",
    },  
    {
      degree: "Secondary School",  
      year: "2012 - 2013",  
      university: "LNP Girls Higher Secondary School",
    }
  ],  
  experience: [  
    {  
      title: "Wordpress Developer",  
      year: "Apr 2024 - Present",  
      company: "VSolve AI Private Limited, Bangalore",  
      description: "Bluprint is a WordPress-powered product-based company focused on site maintenance, feature enhancements, and efficient order management. Similarly, Tripsica, a travel-oriented WordPress website, is managed to ensure seamless functionality and user-friendly booking experiences. Both projects emphasize robust WordPress solutions and consistent performance."  
    },  
    {  
      title: "Full Stack developer",  
      year: "Jun 2020 - Feb 2023",  
      company: "SCube Digital Limited, Bangalore",  
      description: "I have developed and sold WordPress themes on ThemeForest, focusing on site creation, updates, and maintenance. Additionally, I built a React project using Material UI, Tailwind CSS, and Bootstrap, with MongoDB as the backend, powered by Express and Node.js."  
    },  
    {  
      title: "Web Developer Intern",  
      year: "Jan 2014 - December 2015",  
      company: "Vijay Tech Zone, Trichy",  
      description: "During my training, I learned the basics of web development, including HTML, CSS, PHP, SQL, and JavaScript. I also contributed to several projects by creating front-end designs to enhance my skills and gain practical experience."  
    }  
  ]  
};  

const Resume = () => {  
  return (  
    <div id="resume" className="text-white py-8">  
    <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-3xl my-10 text-white pb-3 border-b-2 inline-block border-white">RESUME</h2>
                </div>
      <div className="grid lg:grid-cols-2 gap-8 px-10">  
        {/* Education Section */}   
        <div>
            <h2 className="text-3xl lg:text-4xl col-span-2 lg:col-span-1 font-medium mb-4 flex items-center">  
                <span className="mr-2 text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

</span> Education  
            </h2> 
            <div className="relative border-l-2 lg:col-span-1 col-span-2  border-amber-500 pl-8 space-y-10 mt-10">  
                {data.education.map((edu, index) => (  
                    <div key={index} className="relative group">  
                        {/* Dot for timeline */}
                        <div className="absolute -left-[43px] group-hover:bg-black group-hover:border-amber-900 top-0 w-5 h-5 bg-amber-500 rounded-full border-4 border-gray-900"></div>  

                    {/* Content */}
                        <div>
                        <h3 className="text-xl lg:text-2xl text-amber-500 font-semibold">{edu.degree}</h3>  
                        <span className="block text-gray-400 text-sm mb-2">{edu.year}</span>  
                        <span className="block text-base lg:text-lg text-gray-300 mb-2">{edu.university}</span>
                        </div>
                    </div>  
                ))}  
            </div>  
        </div>
        

        {/* Experience Section */}  
        <div>  
          <h2 className="text-3xl lg:text-4xl font-medium mb-4 flex items-center">  
            <span className="mr-2 text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 20 20" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>
</span> Experience  
          </h2>  
          <div className="relative border-l-2 border-amber-500 pl-8 space-y-10 mt-10">  
                     {data.experience.map((exp, index) => (
                         <div key={index} className="relative group">
                             <div className="absolute -left-[43px] group-hover:bg-black group-hover:border-amber-900 top-0 w-5 h-5 bg-amber-500 rounded-full border-4 border-gray-900"></div>
                             <div>
                             <h3 className="text-xl lg:text-2xl text-amber-500 font-semibold">{exp.title}</h3>
                             <span className="block text-gray-300 mb-2">{exp.year}</span>
                             <span className="block text-white font-semibold text-lg lg:text-xl mb-2">{exp.company}</span>
                             <p className="text-gray-400 text-base lg:text-lg">{exp.description}</p>
                             </div>
                         </div>
                     ))} 
                 </div> 
        </div>  
      </div>  
    </div>  
  );  
};  

export default Resume;
