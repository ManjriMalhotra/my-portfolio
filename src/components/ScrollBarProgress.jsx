import { motion, useScroll } from "framer-motion";

export default function ScrollBarProgress(){
    const { scrollYProgress } = useScroll();
    return(
        <motion.div
            style = {{
                scaleX: scrollYProgress,
            }}
            className="fixed top-0 left-0 right-0 h-2 bg-red-500 origin-left z-50  duration-700 ease-out"
            >
        </motion.div>
    )
}