"use client";
import styles from "./styles.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const StickyImg = [
  {
    img: "/images/ent1.jpg",
  },
  {
    img: "/images/ent2.jpg",
  },
  {
    img: "/images/ent3.jpg",
  },
];

export default function EntSticky() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-[#f0f0fc] dark:bg-[#111828]">
      <div className=" pt-20 md:pt-24">
        <div ref={container} className={styles.container}>
          <div
            className={styles.sticky}
            style={{
              backgroundImage: "url(/images/shapes.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {
              <motion.div style={{ scale: scale4 }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <div className=" bg-black flex px-4 md:px-8 w-full h-full overflow-hidden">
                    <motion.div style={{ opacity: opacity }}>
                      {StickyImg.map((image, index) => (
                        <motion.img
                          key={index}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          transition={{
                            duration: 1,
                            delay: index * 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          src={image.img}
                          alt="..."
                          className={`${styles.stickyImg} object-cover object-center absolute hidden lg:block`}
                        />
                      ))}

                      <h6 className=" absolute inset-0 w-fit h-fit m-auto text-center px-4 md-px-8 text-xs text-white font-extralight z-10">
                        Where Privacy Meets Transparency.
                      </h6>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
