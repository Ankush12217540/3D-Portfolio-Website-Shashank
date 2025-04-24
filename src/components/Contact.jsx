import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_onwr0j4",
        "template_1pzjmt9",
        {
          from_name: form.name,
          to_name: "Saurav Shinde",
          from_email: form.email,
          to_email: "sauravshinde.000@gmail.com",
          message: form.message,
        },
        "pa3lSQFA-d1hwdFhk"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col lg:flex-row bg-black-100 p-8 rounded-2xl border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 w-full max-w-[1100px] mx-auto"
      >
        <div className="flex flex-col lg:w-1/2 w-full">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 w-full"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.7)] transition-all duration-300 font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-blue-400 hover:shadow-[0_0_10px_rgba(96,165,250,0.7)] transition-all duration-300 font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.7)] transition-all duration-300 font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-full sm:w-auto text-white font-bold shadow-md shadow-primary rounded-xl border border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.8)] transition-all duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        {/* Include EarthCanvas if needed in layout */}
        <div className="xl:w-1/2 w-full xl:flex-1 xl:h-auto md:h-[800px] h-[600px] mt-12 lg:mt-0">
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
