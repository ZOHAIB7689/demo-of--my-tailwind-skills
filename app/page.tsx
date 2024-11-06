'use client'
import { useRouter } from "next/navigation";

export default function Page() {

const route = useRouter() 

  return (
    <>
      <div
        className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url(/Ai-01.jpg)',}} >
          <div
        className="absolute h-screen inset-0 bg-cover bg-center opacity-50" // control opacity here
        style={{  backgroundImage: 'url(/images/Ai-01.jpg)',  }}></div>
      
        <h1 className="text-2xl md:text-4xl  bg-slate-900/50 rounded-xl font-bold p-8 text-white">
          Let's Dive into the World of Ai
        </h1>
        <button onClick={() => route.push("/home")} className="mt-4 hover:scale-110 shadow hover:shadow-lg hover:shadow-green-300/50 duration-500 z-20 text-2xl p-2 md:p-4 rounded-xl hover:bg-sky-600 bg-sky-500" >
          Let's Get Started
        </button>
      </div>
    </>
  );
}
