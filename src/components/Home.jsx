
function Home(){

    return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white flex items-center justify-center px-6 transition-colors duration-500">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Franek</span> <span className="animate-wave inline-block">👋</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          I'm currently studying programming, but my interests lie beyond the tech industry. While I’ve gained valuable skills in building systems and solving technical problems, my long-term goal is to apply this experience in a different field where I can contribute in more creative, strategic, or human-centered ways.
        </p>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-400">
          Whether you're here to explore my work, learn more about me, or just say hello — you're in the right place!
        </p>
      </div>
    </div>
  );
}

export default Home