function Projects() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white px-6 transition-colors duration-500 flex flex-col items-center justify-start py-12 space-y-12">

      <h1 className="text-5xl font-extrabold mb-6">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* === Project Card 1 === */}
        <ProjectCard
          title="Thiria"
          description="A web app for creating custom creatures."
          tech="JavaScript, PHP"
          imgSrc="./Thiria.png"
          github="https://github.com/sikoramodra/Thiria"
        />

        {/* === Project Card 2 === */}
        <ProjectCard
          title="Maze of Menace"
          description="Singleplayer roguelike game where the player finds a way out of a maze."
          tech="Unreal Engine 5, Blender"
          imgSrc="./MazeOfMenace.png"
          github="https://github.com/PokeYoda/Maze-of-Menace"
        />

        {/* === Project Card 3 === */}
        <ProjectCard
          title="Weather-App"
          description="Website showing current weather conditions using OpenWeatherMap."
          tech="Vue"
          imgSrc="/docs/images/blog/image-1.jpg"
          github="https://github.com/PokeYoda/Weather-App"
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, imgSrc, github }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.03] hover:shadow-lg" style={{transition: "transform 0.3s ease"}}>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-t-lg w-full h-48 object-cover transition-transform duration-500 ease-in-out"
          src={imgSrc}
          alt={title}
        />
      </a>
      <div className="p-5">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-400">
            {title}
          </h5>
        </a>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 transition-colors duration-300">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 transition-colors duration-300">
          {tech}
        </p>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg transition-all duration-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          GitHub
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}


export default Projects;
