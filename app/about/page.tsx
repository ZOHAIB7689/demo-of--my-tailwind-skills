// about/page.tsx
/* eslint-disable */

import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center bg-slate-950 h-full">
      <h1 className="relative top-12 text-2xl md:text-5xl font-semibold text-sky-400">About Us</h1>
      <p className="md:text-2xl text-gray-500 p-44 px-16">
        Welcome to my first AI Page, where we explore the limitless possibilities of artificial intelligence. Our mission is to harness the power of AI to create innovative solutions that transform industries and improve everyday life.
        <br />
        <br />
        At our Page, we believe AI is more than just technology; it&apos;s a tool for unlocking human potential. From automation and machine learning to predictive analytics and natural language processing, our team is dedicated to developing AI-driven products that push the boundaries of what&apos;s possible.
        <br />
        <br />
        Our platform is designed to make AI accessible to everyone, whether you&apos;re a business looking to streamline operations, a researcher diving into data, or an individual curious about the future of technology. We are passionate about AI&apos;s potential to reshape the world, and we&apos;re committed to driving that change responsibly and ethically.
        <br />
        <br />
        Join us as we explore the evolving landscape of artificial intelligence and discover how it can empower you to achieve more.
      </p>
    </div>
  );
}

export default About;
