import { motion } from "motion/react"

const TextAnimation = ({text}) => {
    return (
        <motion.h1 
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ y: 15 }}
            transition={{ duration: 1, ease: "easeInOut"}}>
            <div>{text}</div>
        </motion.h1>
    )
}

export default TextAnimation;