import { useState } from "react"



function AboutMe() {

  const [skills, setSkills] = useState([
    {
      "skill": "JavaScript",
      "expertise": 30,
      "color": "bg-yellow-300"
    },
    {
      "skill": "C++",
      "expertise": 50,
      "color": "bg-sky-400"
    },
    {
      "skill": "React",
      "expertise": 40,
      "color": "bg-blue-500"
    },
    {
      "skill": "Tailwind CSS",
      "expertise": 70,
      "color": "bg-teal-400"
    },
    {
      "skill": "Unreal Engine 5",
      "expertise": 25,
      "color": "bg-purple-700"
    },
    {
      "skill": "QT Creator",
      "expertise": 60,
      "color": "bg-green-400"
    },
    {
      "skill": "Blender",
      "expertise": 80,
      "color": "bg-orange-500"
    }
  ])

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white px-6 transition-colors duration-500 flex flex-col items-center justify-start py-12 space-y-12">
      {/* <img
            class="h-auto w-xl hover:w-2xl rounded-4xl hover:rounded-xs cursor-pointer filter grayscale hover:grayscale-0"
            style={{transition: '0.5s ease'}}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          /> */}
          <h1 className="text-5xl font-extrabold mb-6">About Me</h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 w-10/12">
        My name is Franciszek Woźniak, and I’m a fifth-year programming student at SCI. Throughout my studies, I have developed a strong analytical mindset and a deep appreciation for problem-solving. Outside of academics, I enjoy playing the piano, playing chess, exploring mathematics, and immersing myself in fantasy and science fiction literature. Additionally, I have a passion for 3D graphics and spend time working in Blender, particularly with Geometry Nodes, where I enjoy experimenting with procedural design and visual creativity. 
        While my studies are focused on programming, my long-term interests lie in fields that allow for more direct creative expression and interdisciplinary work..
      </p>

      <ol class="relative border-s border-gray-200 dark:border-gray-700 mb-32">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2021</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Begining of studies at SCI</h3>
          <img src="SCI_Logo.png" style={{ height: "6rem" }} />
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Promotion to 2nd grade with honors</h3>

        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2023</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Promotion to 3nd grade with honors</h3>

        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2023</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Apprenticeship in VRR – Immersive Technologies</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Learning basics of Unreal Engine 5</p>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2024</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Promotion to 4nd grade with honors</h3>

        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2024</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Apprenticeship in Spyrosoft Synergy S.A.</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Creating HMI for Yachts in QT Creator</p>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2025</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Promotion to 5nd grade with honors</h3>

        </li>
      </ol>


      <div>
        <h2 class="text-4xl font-extrabold dark:text-white mb-10">Skills:</h2>
        {skills.map((e) => (
          <div>
            <div className="mb-1 text-base font-medium text-black dark:text-white">{e.skill}</div>
            <div class="w-3xl bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className={`${e.color} h-2.5 rounded-full`} style={{ width: e.expertise + '%' }}></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )

}

export default AboutMe