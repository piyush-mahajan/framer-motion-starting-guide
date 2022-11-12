import { motion } from "framer-motion";
export default function Box2() {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      trasition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const listVarient = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChidren: 0.2,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              className="boxItem"
              variants={listVarient}
              animate="visible"
              initial="hidden"
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
