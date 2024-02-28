"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [mesg,setMesg]=useState()
  const [email,setEmail]=useState()
  const text = "Say Hello";

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if(mesg.length >=5 && email.length >=5){
    emailjs
      .sendForm(
        "service_8q7taka",
        "template_ef36jby",
        form.current,
        "jLMWVGUykkg1HzRhJ",
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setTimeout(()=>{
            setSuccess(false);
          },2000)
        },
        () => {
          setError(true);
          setTimeout(()=>{
            setError(false)
          },2000)
        }
      );
    }
    else{
      setError(true)
      setTimeout(()=>{
        setError(false)
      },2000)
    }
    
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 ">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-md lg:text-xl flex flex-col gap-6 justify-center p-12 lg:p-16 xl:p-18 2xl:p-22"
        >
          <span>Dear Omkar Dev,</span>
          <textarea
            rows={6}
            cols={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none p-2 "
            name="user_message"
            onChange={(e)=>{setMesg(e.target.value)}}
            required
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            className="bg-transparent border-b-2 border-b-black outline-none"
            multiple
            required
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success &&  (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
             {mesg.length >=5 ?"Something went wrong!": "Message should be more specific!!"} 
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;