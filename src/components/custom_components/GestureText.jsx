import * as motion from "motion/react-client"

export default function Gestures() {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
        />
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 200,
    height: 100,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    }
