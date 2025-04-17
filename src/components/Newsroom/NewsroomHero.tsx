"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";

const images = [
  "news1.jpg",
  "news2.jpg",
  "news3.jpg",
  "news4.jpg",
  "news5.jpg",
  "news6.jpg",
  "news7.jpg",
  "news8.jpg",
  "news9.jpg",
  "news10.jpg",
  "news11.jpg",
  "news12.jpg",
];

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main
      className={`${styles.main} pt-20 md:pt-24 bg-[#f0f0fc] dark:bg-[#111828]`}
    >
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </main>
  );
}
interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
