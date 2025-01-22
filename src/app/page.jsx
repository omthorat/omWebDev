"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Hero Section */}
      <section className="h-full flex flex-col md:flex-row items-center justify-center p-6 lg:px-24">
        {/* Hero Text */}
        <div className="flex flex-col  items-center lg:items-start text-left lg:text-left md:w-[50%] lg:w-[70%]  ">
          <motion.h1
            className="text-xl sm:text-sm pt-2 md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight text-red-600"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}>
            Code with Purpose, Create with Passion!
          </motion.h1>
          <motion.p
            className="text-lg md:text-md sm:text-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Hi, I’m Omkar, a Full Stack Developer with a knack for building
            efficient, scalable, and user-friendly web applications. With
            expertise in the MERN stack, real-time applications, and AI-driven
            projects, I transform ideas into digital realities. Whether
            it&apos;s crafting intuitive UI/UX, optimizing backend workflows, or
            exploring AI/ML-powered innovations, I’m here to bring your vision
            to life. Let’s collaborate to create solutions that not only work
            but leave a lasting impact!
          </motion.p>
          <div className="flex space-x-4 mt-4">
            <Link href="/portfolio">
              <button className="bg-red-600 hover:bg-red-700 transition duration-300 px-6 py-3 rounded-lg font-semibold">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white text-red-600 hover:bg-gray-100 transition duration-300 px-6 py-3 rounded-lg font-semibold">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative  flex justify-center item-center w-full md:w-[50%] lg:w-[40%] mt-8 lg:mt-0">
          <Image
            src="/file.png"
            alt="Digital Creativity Illustration"
            width={400}
            height={400}
            className="rounded-full bg-white shadow-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16 text-gray-800">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Technologies I Work With</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24">
          {[
            {
              title: "Frontend",
              description:
                "HTML5, CSS3, Tailwind CSS, SCSS, JavaScript, ES6/7, TypeScript, React Js, Next.js, Bootstrap, Material Ui.",
            },
            {
              title: "Backend",
              description: "Node.js, Express, MongoDB, SQL, MySQL, GraphQL",
            },
            {
              title: "Tools & Platforms",
              description:
                "Git, Gitbash, VS code, Azure DevOps, Agile Expert, Docker, Netlify",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-xl">{skill.title}</h3>
              <p className="text-gray-600 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Projects
          </h2>
        </div>
        <div className="flex justify-center flex-col md:flex-row  gap-8 px-6 sm:px-12 lg:px-24">
          {[
            {
              name: "Lab Labelling System",
              details:
                "Engineered a Lab Labeling System for US LAB integrated React JS app with Zebra Printer. resulting in a 40 % reduction in labeling errors",
            },
            {
              name: "Loan application portal",
              details:
                "Modernized a bank’s loan application portal with a responsive React JS frontend and integration with the backend. reduced loan processing time by 40%.",
            },
            {
              name: "Chatterly Real-Time Chat App",
              details:
                "Built a full-stack chat application with Socket.io, supporting real-time one-on-one and group messaging, message history, and notifications",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 max-w-sm">
              <h3 className="font-semibold text-xl text-gray-800">
                {project.name}
              </h3>
              <p className="mt-2 text-gray-600">{project.details}</p>
              <Link
                href="/portfolio"
                className="text-red-500 hover:underline mt-4 inline-block">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">What People Are Saying</h2>
        </div>
        <div className="flex-col flex md:flex-row justify-center gap-8 px-6 sm:px-12 lg:px-24">
          {[
            {
              feedback:
                "Omkar quickly adapted and brought valuable front-end expertise to the team. He consistently delivers thorough updates, excels in prioritizing and resolving issues, and stepped up during a lead's absence. His strong work ethic, excellent React skills, and deep understanding of project requirements showcase his dedication and impact.",
              name: "CLA (CliftonLarsonAllen LLP)",
              role: "Joe, Scrum Master",
            },
            {
              feedback:
                "I worked with Omkar on the Merck account as his reporting manager and team lead. He is hardworking, quick to learn new technologies, and consistently delivers tasks on time, including complex assignments. Omkar is highly collaborative and always ready to support his team, showcasing dedication and strong technical skills.",
              name: "Merck Millipore",
              role: "Tech Lead",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white-100 p-6  mb-4 rounded-lg shadow-2xl max-w-md">
              <p className="italic text-gray-800 text-sm">
                {testimonial.feedback}
              </p>
              <p className="mt-4 font-semibold text-xl">{testimonial.name}</p>
              <p className="text-black">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-b from-blue-50 to-red-200 py-16 text-center text-black">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="mt-2">
          Have a project in mind? Let’s build something amazing!
        </p>
        <Link href="/contact">
          <button className="bg-white text-red-500 px-6 py-3 rounded-lg mt-6 font-semibold hover:bg-gray-100 transition duration-300">
            Get In Touch
          </button>
        </Link>
      </section>
    </motion.div>
  );
};

export default Homepage;
