// resumeData.ts - Resume data for Jahnavi

import { ResumeData } from './types';

export const resumeData: ResumeData = {
  personal: {
    name: "Jahnavi",
    title: "Full Stack Developer | AI & Web Enthusiast",
    photo: require('../../assets/profile.png'), // Your profile image
  },

  about: {
    summary:
      "Passionate full stack developer and AI enthusiast with hands-on experience in building modern web applications using React, Next.js, Node.js, and MongoDB. Actively working on AI-driven projects involving LLMs, computer vision, and automation. Strong interest in solving real-world problems through technology, with a focus on scalable systems, clean architecture, and continuous learning.",
  },

  experience: [
    {
      id: "exp_3",
      jobTitle: "Full Stack Developer (Project-Based)",
      company: "Healix-MedManage",
      startDate: "February 2025",
      endDate: "Present",
      description:
        "Designed and developed an AI-driven medical management platform for traveling doctors. Implemented role-based access for admins, doctors, assistants, and patients. Integrated AI for medical report analysis, patient health tracking, and dynamic summaries. Built using React, Node.js, MongoDB, and LLM-based workflows.",
    },
    {
      id: "exp_2",
      jobTitle: "AI & Web Developer",
      company: "Personal & Hackathon Projects",
      startDate: "June 2024",
      endDate: "Present",
      description:
        "Built multiple AI-powered applications including a PDF note-taking and query system using vector embeddings, Convex database, and open-source LLMs. Developed a YouTube learning recommendation API that analyzes views, likes, comments, and descriptions using AI. Focused on automation, performance, and real-world usability.",
    },
    {
      id: "exp_1",
      jobTitle: "Web Developer",
      company: "Academic & Freelance Projects",
      startDate: "January 2024",
      endDate: "May 2024",
      description:
        "Created responsive web applications using React (Vite + TypeScript) and Next.js. Worked with REST APIs, authentication flows, and database design. Gained practical experience with deployment, Git-based workflows, and modern frontend architecture.",
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express.js", "Vite", "OpenCV", "YOLO"],
    },
    {
      category: "AI & Data",
      skills: ["LLMs", "Prompt Engineering", "Vector Databases", "Computer Vision", "Pandas", "NumPy"],
    },
    {
      category: "Tools & Technologies",
      skills: ["MongoDB", "Supabase", "Convex", "Docker", "Git", "REST APIs", "WebSockets"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "System Thinking",
        "Technical Communication",
        "Public Speaking",
        "Rapid Learning",
      ],
    },
  ],

  education: [
    {
      id: "edu_1",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "RV University, Bangalore",
      startDate: "August 2024",
      endDate: "Present",
    },
  ],

  contact: {
    phone: "+91-XXXXXXXXXX",
    email: "jahnavipr@email.com",
  },
};
