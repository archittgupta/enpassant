import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FloatingDockDemo } from "./socialmedia";
import { IconChartBar, IconSettings, IconUser } from "@tabler/icons-react";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="min-h-screen flex items-center flex-col">
      <h2 className=" top-72 text-3xl relative z-20 md:text-4xl lg:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Checkmate?{" "}
        <div className="relative mx-auto  w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 text-4xl lg:text-7xl top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">En passant.</span>
          </div>
          <div className="relative lg:text-7xl text-4xl bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">En passant.</span>
          </div>
        </div>
      </h2>
      <div className="pt-96 md:pt-80">
      <FloatingDockDemo/>
      </div>


    <div className="h-auto md:h-96 mb-10 w-96 md:w-full p-10 max-w-7xl rounded-2xl bg-white/10 flex flex-col items-center backdrop-blur-2xl">
      <h1 className="text-white font-bold text-4xl mt-6 text-center">How it Works</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-white text-xl max-w-5xl px-6">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <IconUser size={48} className="text-white mb-4" />
          <p>Connect your community with your Chess.com account.</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col space-y-4 items-center text-center">
          <IconChartBar size={48}  className="text-white mb-4" />
          <p>Track your standings and performance along with other members of the community.</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <IconSettings size={48} className="text-white mb-4" />
          <p>Customize your experience and manage your profile.</p>
        </div>
      </div>
    </div>


      </div>
      
    </BackgroundBeamsWithCollision>
  );
}
