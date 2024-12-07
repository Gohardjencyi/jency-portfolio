import { useState } from 'react';
// import todo from '../../../src/assets/todo.avif';
import portfoliodata from '../../components/Portfolio/portfolioData.json';

function Portfolio() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = (id) => {
    if (id) {
      const clickedTodo = portfoliodata.find((todo) => todo.id === id);
      setSelectedTodo(clickedTodo);
    } else {
      setSelectedTodo(null);
    }
    setIsModalOpen(!isModalOpen);
  };
  

  return (
    <section
      id="portfolio"
      className="flex flex-col h-screen portfolio-block w-full items-center justify-center"
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl lg:text-3xl my-10 text-white pb-3 border-b-2 inline-block border-white">
          PORTFOLIO
        </h2>
      </div>

      {/* Portfolio Items */}
      <div className="grid lg:grid-cols-3 gap-8">
        {portfoliodata.map((todo, index) => (
          <div
            key={index}
            className="relative lg:col-span-1 col-span-3 bg-cover bg-left bg-no-repeat rounded-lg shadow-lg h-80 w-80 group"
            style={{ backgroundImage: `url(${todo.image})` }}
          >
            {/* Overlay */}
            <div className="absolute lg:inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => handleModal(todo.id)}
                className="h-12 w-12 bg-amber-800 rounded-full flex items-center justify-center mb-4"
              >
                <span className="text-xl lg:text-2xl font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </button>
              <h3 className="text-sm md:text-base lg:text-lg font-semibold">{todo.title}</h3>
              <p className="text-sm">Todo app to maintain your daily tasks.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedTodo && (
        <div
          id="modal"
          className="fixed overflow-y-auto inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div className='h-screen'>
 {/* Modal Content */}
 <div className="bg-white h-50 leading-8 rounded-lg p-6 relative shadow-lg max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={() => handleModal(null)}
              className="absolute top-3 right-3 text-black hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img src={selectedTodo.image} alt={selectedTodo.title} className="rounded-lg mb-4" />
            <h2 className='text-3xl lg:text-4xl my-5 font-semibold'>{selectedTodo.title}</h2>
            <div className='bg-amber-100 p-4 rounded-lg border border-amber-300'>
              <p className='text-sm md:text-base lg:text-lg'>Programming Language : {selectedTodo.Languages}</p>
              <p className='text-sm md:text-base lg:text-lg'>Wedbiste :  <a className='text-blue-600' href={selectedTodo.website}>{selectedTodo.website}</a></p>
              <p className='text-sm md:text-base lg:text-lg mb-3'>GitHub : <a className='text-blue-600' href={selectedTodo.github}>{selectedTodo.github}</a></p>
            </div>
            {/* Modal Content */}
            {selectedTodo?.content?.map((content, index) => (
              <div key={index} className='leading-8'>
                {/* Check if page and title exist */}
                {content.page?.title && (
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">{content.page.title}</h3>
                )}
                
                {/* Check if sections exist */}
                {content.page?.sections?.map((section, secIndex) => (
                  <div key={secIndex}>
                    {/* Render section heading */}
                    {section.heading && (
                      <h4 className="text-lg lg:text-xl font-semibold mb-2">{section.heading}</h4>
                    )}

                    {/* Render section content */}
                    {section.content && (
                      <p className="text-sm md:text-base lg:text-lg mb-3 leading-6" >
                        {Array.isArray(section.content)
                          ? section.content.join(" ") // Handle array content
                          : section.content} {/* Handle string content */}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}

          </div>
            
          </div>
         
        </div>
      )}
    </section>
  );
}

export default Portfolio;
