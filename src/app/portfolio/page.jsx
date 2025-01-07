"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Lab Labelling System",
    desc: [
      "• Frontend Development using React.js, Es6, Material UI for creating interactive, intuitive, and responsive UI.",
      "• Streamlined GraphQL APIs for efficient querying and minimized data over-fetching.",
      "• Developed customizable label creation and printing features, optimizing workflows to save users 2 hours daily.",
      "• Enhanced labels with dynamic textboxes, barcode generation, rich icon library, and precision tools for advanced customization.",
    ],
    img: "/lab.jpg",
    link: "#",
    linktype: "Client Project",
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "Loan application portal",
    desc: [
      "• Frontend Developed using React Js for seamless User Interface.",
      "• Backend Implementation Built Using Node.Js and Express.Js to Handle API Integration and DB Connection.",
      "• Database Management Utilized MongoDB as a database for storing and managing people All information.",
    ],
    img: "/loanimg.avif",
    link: "#",
    linktype: "Client Project",
  },
  {
    id: 3,
    color: "from-red-300 to-blue-300",
    title: "File Uploading in MERN stack",
    desc: [
      "This project features user registration, authorization with JWT tokens, and complete file operations such as uploading, deleting, and updating. Built using the MERN stack.",
    ],
    img: "/fileupload.jpg",
    link: "https://github.com/omthorat/Usersauth-file-uploading-and-deleting",
    linktype: "Github Link",
  },
  {
    id: 4,
    color: "from-blue-300 to-violet-300",
    title: "React Text Utilities App",
    desc: [
      "This text editor app includes routing, multiple text editing features, and visual modes for better usability.",
      " This include feature like makeing string upper case , measuring typing speed , word count, changing font size and etc..",
    ],
    img: "/textu.png",
    link: "https://textutilesweb.netlify.app/",
    linktype: "See Demo",
  },
  {
    id: 5,
    color: "from-violet-300 to-purple-300",
    title: "Social Media App (MERN Stack)",
    desc: [
      "A full-stack social media app for user interaction through posts, comments, and content engagement.",
    ],
    img: "/social.jpg",
    link: "https://github.com/omthorat/socialmediaMERNstack",
    linktype: "Git Link",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <header className="w-full py-10 text-center bg-gradient-to-b from-blue-50 to-red-200 text-black">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Showcasing my best work and creativity.
        </p>
      </header>

      <main ref={ref} className="relative">
        <section className="py-20">
          <div className="container px-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {items.map((item) => (
              <motion.div
                key={item.id}
                className={`p-6 rounded-xl shadow-lg bg-gradient-to-r ${item.color} transform hover:scale-105 transition-transform`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                <div className="relative mt-4 w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    objectFit="cover"
                  />
                </div>
                <p className="mt-4 text-white">
                  {Array.isArray(item.desc) ? (
                    item.desc.map((dec, i) => <span key={i}>{dec}</span>)
                  ) : (
                    <span>{item.desc || "No description available"}</span>
                  )}
                </p>

                <Link
                  href={item.link}
                  className="inline-block mt-4 py-2 px-6 bg-white text-gray-700 font-semibold rounded hover:bg-gray-100 transition"
                  target="_blank">
                  {item.linktype}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b flex flex-col justify-center md:flex-row align-item-center gap-3 from-blue-50 to-red-200 text-black text-center">
          <div>
            <h2 className="text-4xl font-bold mt-3">Have a Project in Mind?</h2>
            <p className="mt-4 text-xl">
              Let&apos;s work together and bring your ideas to life.
            </p>
          </div>
          <div className="text-center flex justify-center">
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 flex-2  bg-black text-white rounded-full flex items-center justify-center">
              Hire Me
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-10 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2025 Omkar Thorat. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default PortfolioPage;
