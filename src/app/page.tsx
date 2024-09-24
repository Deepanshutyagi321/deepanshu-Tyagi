"use client"

import { ProjectCard, SkillCard } from "@/components/card";
import "./style.css"
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS styles
import nexjspic from "../images/nextjs-icon-512x512-y563b8iq.png"
import jspic from "../images/5968292.png"
import cpluspic from "../images/6132222.png"
import htmlpic from "../images/html-5.png"
import reactpic from "../images/919851.png"
import gitpic from "../images/13170533.png"
import nodepic from "../images/5968322.png"
import tspic from "../images/6422234.svg"
import mongodbpic from "../images/mongodb.svg"
import expresspic from "../images/images.png"

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set the duration
  }, []);

  return (
    <div className="bg-slate-50 w-auto ">
      {/* Introduction Section */}
      <section id="introduction" className="flex items-center w-full h-screen bg-slate-50 ">
        <div className="ml-10" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl  font-bold text-black font-medium">Hi, I'm Deepanshu Tyagi</h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl mt-5 text-black font-medium">Mern Developer.</h2>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="w-screen h-screen bg-slate-50  flex items-center justify-center border-2 border-slate-300">
        <div className="text-center slide-up" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-medium  mb-4 text-black">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-black">
            Hi, I’m  a web developer passionate about creating user-friendly applications with React. I thrive on solving frontend-backend integration challenges and am constantly learning new technologies to improve my skills. With a background in computer science, I’m also exploring advanced concepts like API optimization and message aggregation to enhance application performance.I am a passionate full stack developer with experience in building high-quality web applications...
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-screen h-auto bg-slate-50 text-white flex flex-col">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-12 mb-8">Skills</h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 px-4" data-aos="fade-up">
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: cpluspic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: nexjspic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: jspic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: expresspic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: reactpic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: nodepic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: gitpic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: tspic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: mongodbpic }} />
          <SkillCard data={{ author: "HTML is the standard markup language for creating Web pages.", image: htmlpic }} />
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="w-screen h-auto bg-slate-50 text-black flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl  font-bold mt-12 mb-8">My best work</h2>
        <div className="flex flex-wrap items-center justify-center gap-10 px-4" data-aos="fade-up">
          <ProjectCard data={{
            title: "Mystry-feedback", description: "Mystery Feedback is a platform for anonymous feedback collection. Users share a unique link to receive secure and private feedback, promoting open dialogue and growth while maintaining anonymity.", technologies: "Next Js, React Js, MongoDB, Tailwind", url: "https://mystry-feedback.vercel.app/", github: "https://github.com/Deepanshutyagi321/MystryFeedback"
          }} />
          <ProjectCard data={{ title: "Wanderlust", description: "Wanderlust is an online marketplace that connect people who want to rent out their property with who are looking for accommodations, typically for short stays and long stays also.", technologies: "MongoDB, Node Js, Java script, HTML, CSS, Bootstrap", url: "https://wanderlust-ym89.onrender.com/listings", github: "https://github.com/Deepanshutyagi321/Wanderlust" }} />
          <ProjectCard data={{ title: "Simon Says Web version", description: "Simon is a fun memory game where players replicate increasingly complex sequences of lights and sounds by pressing colored pads in the correct order, testing their concentration and recall skills. One mistake, and it's game over ", technologies: "Javascript, CSS, HTML.", github: "https://github.com/Deepanshutyagi321/Simon_game" }} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-screen h-screen background  flex flex-col   border-2 border-slate-300 mt-10">
        <div className="mt-20 ml-10 md:ml-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-medium">Want to start a project</h1>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-medium">together? Get in touch</h1>
        </div>
        <div className="ml-10 md:ml-20 mt-5 md:mt-10 md:mt-20">
          <p className="font-medium">Email</p>
          <div className="flex flex-col md:flex-row items-start md:items-center mt-4">
            <p className="font-medium text-lg md:text-xl">deepanshutyagi97208@gmail.com</p>
            <Button
              className="bg-inherit text-white  mt-4 md:mt-0 md:ml-4 text-base text-sm md:text-lg hover:opacity-70 rounded-3xl border-2 border-slate-300 transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => navigator.clipboard.writeText("deepanshutyagi97208@gmail.com")}
            >
              Copy to Clipboard
            </Button>
          </div>
        </div>

        <div className="ml-10 md:ml-20 mt-8 md:mt-16">
          <p className="font-medium">Social</p>
          <span className="flex items-center mt-2 md:mt-5 space-x-4 font-medium font-bold text-sm md:text-lg ">
            <h3 className=""><a href="https://www.linkedin.com/in/deepanshu-tyagi-z14/">Linkedin</a></h3>
            <h3><a href="https://github.com/Deepanshutyagi321">Github</a></h3>
            <h3><a href="https://x.com/Deepans22338409">Twitter</a></h3>


          </span>
        </div>
      </section>
    </div>
  );
}
