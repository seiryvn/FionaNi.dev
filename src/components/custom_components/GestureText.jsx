import * as motion from "motion/react-client"

export default function Gestures({text, link}) {
    return (
        <a href={link}>
            <motion.button
            initial={{ color: "#000000"}}
            whileHover={{ scale: 1.1, backgroundColor: "black", color: "#E6E6E6"}}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 600 }}
            style={box}
            >{text}
            </motion.button>
        </a>
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    // width: 100,
    // height: 50,
    display: "inline-block",
    padding: "10px 16px",
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    }
