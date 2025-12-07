import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export default function Connect() {
  return (
    <section id="connect">
      <h2 className="text-xl font-semibold mb-6">connect</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* X / Twitter */}
        <a
          href="https://x.com/YOUR_USERNAME"
          target="_blank"
          className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center gap-4"
        >
          <FaTwitter size={32} className="text-blue-500" />
          <p className="text-sm font-medium text-gray-700">Twitter / X</p>
          <motion.button
          whileHover={{scale: 1.6}}
          whileTap={{scale:0.9}}>
            Follow</motion.button>
            
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center gap-4"
        >
          <FaLinkedin size={32} className="text-blue-700" />
          <p className="text-sm font-medium text-gray-700">LinkedIn</p>
          <motion.button
          whileHover={{scale:1.6}}>
            Connect</motion.button>
        </a>

        {/* Notion Portfolio */}
        <a
          href="https://YOUR_NOTION_URL"
          target="_blank"
          className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center gap-4"
        >
          <SiNotion size={32} />
          <p className="text-sm font-medium text-gray-700">Notion Site</p>
          <motion.button
          className="font-medium"
          whileHover={{scale:1.6}}>Visit</motion.button>
        </a>
      </div>
    </section>
  );
}
