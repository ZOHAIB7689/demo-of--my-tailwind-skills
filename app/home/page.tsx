// home/page.tsx
/* eslint-disable */
import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-4 flex flex-col md:flex-row h-full flex-wrap box-border bg-gray-950">
      <div className="flex flex-col ease-in-out flex-shrink-0 w-full md:w-96 shadow hover:shadow-indigo-500/50 hover:shadow-xl md:hover:w-1/2 duration-500 rounded-xl items-center m-3 p-5 border border-fuchsia-600/50">
        <div className="">
          <Image className="w-full md:w-auto mr-2 rounded-lg" src="/01.jpg" alt="Robotics Image" width={500} height={500} />
        </div>
        <div className="">
          <h1 className="text-2xl my-3 font-semibold text-white">Robotics</h1>
          <p className="font-bold text-slate-400">
            AI powers robots to perform tasks autonomously and interact with their environment.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col w-full md:w-96 shadow hover:shadow-lime-500/50 hover:shadow-xl md:hover:w-1/2 duration-700 rounded-xl items-center p-5 m-3 border border-green-500/50">
        <div className="">
          <Image className="w-full md:w-auto mr-2 rounded-lg" src="/02.jpg" alt="Image Recognition" width={500} height={500} />
        </div>
        <div className="">
          <h1 className="text-2xl my-3 font-semibold text-white">Image Recognition</h1>
          <p className="font-bold text-slate-400">
            AI can identify, classify, and process images with high accuracy.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col my-3 w-full md:w-96 rounded-xl shadow hover:shadow-amber-300/50 hover:shadow-xl md:hover:w-1/2 duration-700 items-center m-3 p-5 border border-red-800/50">
        <div className="">
          <Image className="w-full md:w-auto mr-2 rounded-lg" src="/03.jpg" alt="Predictive Analytics" width={500} height={500} />
        </div>
        <div className="">
          <h1 className="text-2xl my-3 font-semibold text-white">Predictive Analytics</h1>
          <p className="font-bold text-slate-400">
            AI analyzes data patterns to predict future trends and outcomes effectively.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col w-full md:w-96 rounded-xl items-center shadow hover:shadow-red-500/50 hover:shadow-xl md:hover:w-1/2 duration-700 p-5 m-3 border border-amber-800/50">
        <div className="">
          <Image className="w-full md:w-auto mr-2 rounded-lg" src="/04.jpg" alt="Automation" width={500} height={500} />
        </div>
        <div className="">
          <h1 className="text-2xl my-3 font-semibold text-white">Automation</h1>
          <p className="font-bold text-slate-400">
            AI automates repetitive tasks, increasing efficiency and reducing human error.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col w-full my-3 md:w-96 rounded-xl items-center shadow hover:shadow-cyan-500/50 hover:shadow-xl md:hover:w-1/2 duration-700 m-3 p-5 border border-blue-500/50">
        <div className="">
          <Image className="w-full md:w-auto mr-2 rounded-lg" src="/05.jpg" alt="Decision Making" width={500} height={500} />
        </div>
        <div className="">
          <h1 className="text-2xl my-3 font-semibold text-white">Decision Making</h1>
          <p className="font-bold text-slate-400">
            AI processes vast amounts of data to assist in making smart decisions.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col w-full md:w-96 rounded-xl items-center shadow hover:shadow-sky-500/50 hover:shadow-xl md:hover:w-1/2 duration-700 p-5 m-3 border border-sky-500">
        <div className="">
          <Image className="w-full md:w-auto mr-2 rounded-lg" src="/06.jpg" alt="Speech Recognition" width={500} height={500} />
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold text-white">Speech Recognition</h1>
          <p className="font-bold text-slate-400">
            AI converts spoken language into text, enabling hands-free interactions.
          </p>
        </div>
      </div>
    </div>
  );
}
