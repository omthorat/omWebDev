"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="from-blue-50 to-red-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* HEADER SECTION */}
      <section className="flex flex-col items-center justify-center text-start py-16 bg-gradient-to-r from-bg-red-500 to-teal-500 text-black">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-md md:text-lg xl:text-xl max-w-3xl mx-2 ">
          Hi! I’m a dedicated Full-Stack Developer specializing in building
          intuitive end-to-end applications by seamlessly blending front-end and
          back-end technologies. Recently, I Engineered a Lab Labeling System
          for US LAB integrated React JS app with Zebra Printer. resulting in a
          40 % reduction in labeling errors.
        </p>
        <p className="text-md md:text-lg xl:text-xl max-w-3xl mx-2">
          When I’m not coding, you’ll find me staying active whether it’s
          running marathons or practicing yoga. I’m also deeply interested in
          India and world geopolitics. Understanding the connections between
          global events and industries keeps me informed and gives me a fresh
          perspective on problem-solving and innovation.
        </p>
      </section>

      {/* SUMMARY SECTION */}
      <motion.section
        className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={childVariants}>
        <motion.div
          className="relative rounded-lg shadow-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}>
          <Image
            src="/file.png"
            alt="Profile Image"
            layout="responsive"
            width={500}
            height={400}
            className="object-cover mix-blend-overlay"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Summary</h2>
          <p className="text-lg">
            I am an experienced Full Stack Developer, skilled in collaborating
            with cross-functional teams and delivering high-quality solutions
            that drive business value. I excel at fostering innovation and
            ensuring seamless integration of frontend and backend components.
          </p>
          <blockquote className="text-red-500 italic">
            "Passion fuels my code, and innovation drives my solutions."
          </blockquote>
        </div>
      </motion.section>

      {/* SKILLS SECTION */}
      <motion.section className="bg-gray-100 py-16" variants={childVariants}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={childVariants}>
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "ES6",
              "Object Oriented Programming (OOPS)",
              "React.js",
              "Redux",
              "Jest",
              "TypeScript",
              "Tailwind CSS",
              "Next js",
              "Node.js",
              "Express Js",
              "Rest API",
              "GraphQL",
              "MongoDB",
              "SQL",
              "MySQL",
              "Git",
              "Azure DevOps",
              "Agile",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 text-center rounded-lg shadow-md bg-white text-gray-700 hover:bg-red-500 hover:text-black transition-all cursor-pointer"
                whileHover={{ scale: 1.1 }}>
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        className="container mx-auto px-6 py-16"
        variants={childVariants}>
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="flex flex-col gap-12">
          <motion.div
            className="flex flex-col md:flex-row items-start gap-6"
            variants={childVariants}>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-red-500 font-medium">Aug 2022 - Present</p>
              <p className="text-gray-700 mt-2">
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  {`
          • Engineered a Lab Labeling System for a US LAB integrated React JS app with Zebra Printer, resulting in a 40% reduction in labeling errors.
          • Delivered user-friendly interfaces with 1:1 design accuracy and a seamless user experience.
          • Built a full-stack chat application with Socket.io, supporting real-time one-on-one and group messaging, message history, and notifications.
          • Extensive experience in Agile methodologies, ensuring iterative and collaborative project success.
          • Modernized a bank’s loan application portal with a responsive React JS frontend and integration with the backend, reducing loan processing time by 40%.
          • Experienced in collaborating with cross-functional teams and managing multiple priorities to ensure timely project delivery.
        `
                    .split("•")
                    .map((point, index) =>
                      point.trim() ? <li key={index}>{point.trim()}</li> : null
                    )}
                </ul>
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                Full Stack Developer Intern
              </h3>
              <p className="text-red-500 font-medium">Jan 2022 - Aug 2022</p>
              <p className="text-gray-700 mt-2">
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  {`
          • Developed and improved web applications using HTML5, CSS3, JavaScript(ES6), React JS, or Next.js to build responsive, scalable front-end solutions.
          • Worked closely with senior developers to design and implement UI features, ensuring design accuracy and seamless functionality.
          • Led a 5-member team in developing an end-to-end MERN stack web app.
        `
                    .split("•")
                    .map((point, index) =>
                      point.trim() ? <li key={index}>{point.trim()}</li> : null
                    )}
                </ul>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-blue-50 to-red-200 text-black py-6 text-center">
        <p>© 2025 Omkar | All Rights Reserved</p>
      </footer>
    </motion.div>
  );
};

export default AboutPage;
