import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FloatingDockDemo } from "./socialmedia";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="h-screen flex flex-col">
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
      <div className="pt-72 md:pt-60">
      <FloatingDockDemo/>
      </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
