import React from "react";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-400 via-pink-300 to-blue-300
    `}>
      <span className="text-4xl">Texto</span>
    </div>
  );
}
