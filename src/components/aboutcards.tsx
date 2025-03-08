"use client";

import { motion } from "framer-motion";
import { IconChessKnight, IconCalendarEvent, IconChess, IconMicrophone, IconMicrophone2, IconGrowth, IconTrendingUp } from "@tabler/icons-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";


export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="min-h-screen w-full">
     
      <section className="relative w-full min-h-screen  text-white flex flex-col items-center justify-center px-6 py-2">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl pt-20 md:pt-2 font-bold flex justify-center  space-x-2">
         
          <IconChessKnight size={40} stroke={1.5} />
          <span >About Us</span>
        
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl py-6 mx-auto">
          We are a passionate <span className="text-yellow-400">Chess Community</span> founded in <strong>2023</strong>.  
          Our mission is to connect chess enthusiasts and promote the beauty of the game.
        </p>
      </motion.div>

      {/* Details Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 flex flex-col md:grid md:grid-cols-2 items-center gap-8"
      >
        {/* Year Founded */}
        <div className="flex items-center h-24 w-96 space-x-4 bg-white/15 backdrop-blur-xl p-6 rounded-lg shadow-lg">
          <IconCalendarEvent size={40} stroke={1.5} className="text-yellow-400" />
          <div>
            <h3 className="text-xl font-semibold">Founded</h3>
            <p className="text-gray-400">In 2023, a new chess era began</p>
          </div>
        </div>

        {/* Chess.com Partnership */}
        <div className="flex items-center h-24 w-96 space-x-4 bg-white/15 backdrop-blur-xl p-6 rounded-lg shadow-lg">
          <IconChess size={40} stroke={1.5} className="text-green-400" />
          <div>
            <h3 className="text-xl font-semibold">Official Partner</h3>
            <p className="text-gray-400">Proudly partnered with <a href="https://www.chess.com" className="text-green-300 underline">Chess.com</a></p>
          </div>
        </div>
        
        <div className="flex items-center h-24 w-96 space-x-4 bg-white/15 backdrop-blur-xl p-6 rounded-lg shadow-lg">
          <IconMicrophone2 size={40} stroke={1.5} className="text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold">Official Partner</h3>
            <p className="text-gray-400">Collaborated with Samay Raina</p>
          </div>
        </div>
        <div className="flex items-center h-24 w-96 space-x-4 bg-white/15 backdrop-blur-xl p-6 rounded-lg shadow-lg">
          <IconTrendingUp size={40} stroke={1.5} className="text-yellow-400" />
          <div>
            <h3 className="text-xl font-semibold">Tournaments</h3>
            <p className="text-gray-400">6+ tournaments organised till now </p>
          </div>
        </div>
      </motion.div>
    </section>
    <div className="h-20 bg-black"></div>
      
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
