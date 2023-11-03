import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {

      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Fullstack Web Development",
      icon: mobile,
    },
    {
      title: "3D Still/Motion Graphics",
      icon: backend,
    },
    {
      title: "Photography & Videography",


      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {

      title: "Independent Freelancer",
      company_name: "Tell-A-Vision Ent.",
      icon: starbucks,
      iconBg: "#000",
      date: "2022 - Present",
      points: [
        "An I.T goods and services start-up. It entails the following:",
        "Developing and maintaining web applications using React and other related technologies.",
        "Developing and updating graphics and motion graphics using Adobe Creative Cloud.",
        "Video editing using Premiere Pro.",
        "Merch and Digital Marketing.",
      ],
    },
    {
      title: "IT Web Student",
      company_name: "CTU Training Solutions",
      icon: tesla,
      iconBg: "#000",
      date: "2021 - 2023",
      points: [
        "At CTU, I studied a 2-year vocational course meaning that I developed many real-world/workplace-related apps and websites; which is considered to be an equivalent to 1-2 years of work experience.",
        "It was mainly remote learning with lots of due dates and submissions.",
        "Averaging above 75% in my transcripts, I never failed an exam and never had to repeat anything.",
      ],
    },
    {
      title: "Founder & Web Developer",
      company_name: "Tell-A-Vision Ent.",
      icon: starbucks,
      iconBg: "#000",
      date: "Feb 2019 - Present",
      points: [
        "An I.T services small business renamed to iLunaweb. It entails the following:",
        "Developing and maintaining web applications using React and other related technologies.",
        "Developing and updating graphics and motion graphics using Photoshop and After Effects.",
        "Video editing using Premiere Pro.",
        "Digital Marketing.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought I wouldn't need a website to run a farm, but Luna proved me wrong.",
      name: "Julienne Rossouw",
      designation: "",
      company: "Helvetia Farms",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "We expected a situation where we send him back for improvements design after design, but we fell in love with the very first design he sent.",
      name: "Tarang Patel",
      designation: "",

      company: "Equinox Media",

      company: "Kodak",

      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Working with Luna is a breeze. He carefully encapsulates your ideas and brings them to life.",
      name: "Morgan B. Swartz",
      designation: "",

      company: "BetCoza",

      company: "PlaneWingz (PTY) LTD",

      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "LunaDigi",
      description:
        "This is a 3D User Interface for a real-estate company that uses blockchain technology to record a building. The precise recording is then used to make a customizable 3D copy of the building so that construction companies and clients can discuss renovations remotely/online which cuts travelling costs.",

      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {

          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,

      source_code_link: "https://github.com/Lunakill/LunaDigi",
    },
    {
      name: "Cooling Co.",
      description:
        "This is a 3D User Interface I developed using reusable components from the LunaDigi code. Cooling Co. Maintenance is a commercial air-conditioner company based in George, Western Cape. Click on the GitHub icon on the top right of this card to view the git repository.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],

      image: jobit,

      source_code_link: "hhttps://github.com/Lunakill/coolingco",
    },
    {
      name: "iLunaweb",
      description:
        "This is my personal website with cool 3D features that interact with the user through hovering, touching and clicking. I built it using JavaScript, React.js. Tailwind CSS, Three.js, Blender3D, Adobe Photoshop and After Effects. Click on the GitHub icon on the top right of this card to view the git repository.",

      tags: [
        {
          name: "PremierePro",
          color: "blue-text-gradient",
        },
        {
          name: "AfterEffects",
          color: "green-text-gradient",
        },
        {
          name: "Photoshop",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,

      source_code_link: "https://github.com/Lunakill/iLunaweb",

    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };