"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (message.length >= 5 && email.length >= 5) {
      emailjs
        .sendForm(
          "service_8q7taka",
          "template_ef36jby",
          form.current,
          "jLMWVGUykkg1HzRhJ"
        )
        .then(
          () => {
            setSuccess(true);
            form.current.reset();
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          },
          () => {
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 3000);
          }
        );
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-4xl lg:text-5xl font-bold">Get In Touch</h1>
        <p className="mt-4 text-lg">
          I'd love to hear from you! Whether it's a project, question, or just
          to say hi.
        </p>
      </header>

      {/* Main Contact Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 sm:px-12 lg:px-24">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white text-gray-800 w-full lg:w-1/2 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
          <label className="block text-lg font-semibold mb-2">
            Your Message:
          </label>
          <textarea
            name="user_message"
            rows="5"
            className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <label className="block text-lg font-semibold mt-4 mb-2">
            Your Email:
          </label>
          <input
            name="user_email"
            type="email"
            className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
            Send Message
          </button>
          {success && (
            <p className="mt-4 text-green-600 font-semibold">
              Your message has been sent successfully!
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-600 font-semibold">
              {message.length >= 5
                ? "Something went wrong!"
                : "Message should be more specific!"}
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-12 lg:mt-0 lg:ml-12 w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-semibold mb-6">
            Other Ways to Reach Me
          </h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">Email:</span> omkardev@example.com
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +123 456 7890
            </li>
            <li>
              <span className="font-semibold">Location:</span> City, Country
            </li>
          </ul>
          <div className="mt-8 flex justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <section className="mt-16 bg-gray-800 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Find Me Here</h2>
        <div className="relative w-full h-64 lg:h-96">
          {/* Replace with an actual map embed link */}
      {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7683005746315!2d-122.08424958439259!3d37.42206597982544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c20b8c87e5%3A0x2dbbc0b6823e0f39!2sGoogleplex!5e0!3m2!1sen!2sus!4v1675305027292!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section> */}
    </motion.div>
  );
};

export default ContactPage;
