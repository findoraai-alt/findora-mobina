"use client";
import {
  MotionValue,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const EntImages = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "start end"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const imageXSpring = useSpring(imageX);

  const sectionX = useTransform(scrollYProgress, [0, 1], [-96, 0]);
  const sectionXSpring = useSpring(sectionX);

  return (
    <section ref={targetRef} className="overflow-hidden pt-20 md:pt-24">
      <motion.div style={{ x: sectionXSpring }} className="flex gap-2">
        <ImageBar imgSrc="/images/img1.jpg" x={imageXSpring} />
        <ImageBar imgSrc="/images/img2.jpg" x={imageXSpring} />
        <ImageBar imgSrc="/images/img3.jpg" x={imageXSpring} />
        <ImageBar imgSrc="/images/img4.jpg" x={imageXSpring} />
        <ImageBar imgSrc="/images/img5.jpg" x={imageXSpring} />
        <ImageBar imgSrc="/images/img6.jpg" x={imageXSpring} />
      </motion.div>
    </section>
  );
};

const ImageBar = ({
  imgSrc,
  x,
}: {
  imgSrc: string;
  x: MotionValue<number>;
}) => {
  return (
    <div className="w-1/3 lg:w-1/5 h-96 bg-slate-200 shrink-0 relative overflow-hidden">
      <motion.div
        className="absolute -inset-12"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          x,
        }}
      />
    </div>
  );
};

export default EntImages;
