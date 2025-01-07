"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    // Second image
    "/hero3.webp", // Third image
  ];

  const handleClick = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div
      className="from-blue-50 to-red-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* HEADER SECTION */}
      <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-red-400 via-pink-500 to-teal-500 text-white px-4">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-12 drop-shadow-md">
          👨‍💻 About Me
        </h1>

        {/* Card 1 */}
        <div className="relative bg-white text-black rounded-3xl shadow-lg p-8 max-w-4xl mb-8 transform transition-all duration-300 hover:scale-105">
          <div className="absolute top-[-20px] left-[-20px] h-12 w-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-red-500 rounded-full shadow-md"></div>
          <p className="text-md md:text-lg xl:text-xl leading-relaxed">
            Hi! I’m a passionate{" "}
            <span className="text-yellow-600 font-semibold">
              Full-Stack Developer
            </span>{" "}
            specializing in creating end-to-end applications that blend
            cutting-edge front-end and back-end technologies. For instance, I
            engineered a{" "}
            <span className="text-green-600 font-medium">
              Lab Labeling System
            </span>{" "}
            that integrates React.js with Zebra Printers, reducing labeling
            errors by <span className="text-pink-600 font-bold">40%</span>. My
            mission is to make technology work smarter and better for everyone.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white text-black rounded-[3rem] shadow-lg p-8 max-w-4xl transform transition-all duration-300 hover:scale-105">
          <div className="absolute top-[-20px] right-[-20px] h-12 w-12 bg-gradient-to-bl from-teal-400 via-blue-500 to-purple-500 rounded-full shadow-md"></div>
          <p className="text-md md:text-lg xl:text-xl leading-relaxed">
            When I’m not coding, you’ll find me{" "}
            <span className="text-teal-600 font-medium">Gym, Cardio</span> 🏃‍♂️,
            practicing yoga 🧘‍♂️, or diving into the world of{" "}
            <span className="text-blue-600 font-semibold">geopolitics</span> 🌍.
            I love exploring how global trends shape industries and foster
            innovation. Fun fact: I believe solving complex bugs and decoding
            geopolitics share one thing in common—
            <span className="italic">creative problem-solving!</span>
          </p>
        </div>

        {/* Closing Statement */}
        <p className="text-lg mt-12 font-semibold italic text-gray-100">
          Let’s create something extraordinary together—one line of code at a
          time. 🚀
        </p>
      </section>

      {/* SUMMARY SECTION */}
      <motion.section
        className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={childVariants}>
        <div className="relative flex items-center justify-center">
          {/* Back Images */}
          {images.slice(1).map((img, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-full shadow-lg overflow-hidden ${
                index === 0 ? "top-4 left-4" : "top-8 left-8"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 0, scale: 0.95 }}>
              <Image
                src="/hero3.webp"
                alt={`Background Image ${index + 1}`}
                layout="responsive"
                width={500}
                height={500}
                className="object-cover mix-blend-overlay"
              />
            </motion.div>
          ))}

          {/* Main Image */}
          <motion.div
            className="relative rounded-full shadow-lg overflow-hidden z-10 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={handleClick}>
            <Image
              src={images[currentImage]}
              alt="Profile Image"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover mix-blend-overlay"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Summary</h2>
          <p className="text-lg">
            I am an experienced Full Stack Developer, skilled in collaborating
            with cross-functional teams and delivering high-quality solutions
            that drive business value. I excel at fostering innovation and
            ensuring seamless integration of frontend and backend components.
          </p>
          <blockquote className="text-red-500 italic">
            &quot;Passion fuels my code, and innovation drives my
            solutions.&quot;
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
              <div className="text-gray-700 mt-2">
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
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                Full Stack Developer Intern
              </h3>
              <p className="text-red-500 font-medium">Jan 2022 - Aug 2022</p>
              <div className="text-gray-700 mt-2">
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
              </div>
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
