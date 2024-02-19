"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()

  return (
    <section className="bg-[#ffff] flex justify-center items-center flex-col sm:flex-row h-screen w-full" >
    <div className="bg-[url('../assets/task-bro.svg')] mt-8 sm:mt-0 bg-no-repeat bg-center sm:bg-right flex justify-center items-center h-3/4 w-3/4" ></div>
    <div className="flex justify-center items-center h-screen w-full" >
      <div className=" rounded-xl p-4 h-1/2 w-1/2 flex flex-col-reverse sm:flex-col gap-12 sm:gap-12 justify-center items-center">
        <h2 className="text-xl text-black">Dive into the world of Productivity</h2>
        <div onClick={()=> router.push("/signup")} className="bg-[#e3c3c3] py-2 px-4 cursor-pointer rounded-xl text-lg">Get Started</div>
      </div>
    </div>
    </section>
  );
}