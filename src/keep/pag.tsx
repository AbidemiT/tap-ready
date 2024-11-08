"use client";

// import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function Home() {
  // const masonryRef = useRef<HTMLDivElement>(null);
  // const randomNumber = (min: number, max: number) => {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  return (
    <div>
      <h1>Hello</h1>
      <div className="masonry-wrapper">
        <motion.div className={styles.masonry}
        >
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
            {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className={`${styles.masonryItem} ${styles[`masonryItem-${index + 1}`]}`}
              style={{ 
              overflow: "hidden",
              // gridColumn: `span ${randomNumber(1, 3)}`,
              // gridRow: `span ${randomNumber(1, 4)}`,
              }}
              // animate={{
              // gridColumn: `span ${randomNumber(1, 3)}`,
              // gridRow: `span ${randomNumber(1, 4)}`,
              // width: Math.random() > 0.66 ? 300 : Math.random() > 0.33 ? 200 : 100,
              // height: Math.random() > 0.75 ? 300 : Math.random() > 0.5 ? 200 : Math.random() > 0.25 ? 150 : 100,
              // borderRadius: Math.random() > 0.5 ? "50%" : "24px"
              // }}
              transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
              }}
            >
              <Image
              src={`/${index + 1}.webp`}
              alt={`demo ${index + 1}`}
              width={100}
              height={100}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover"
              }}
              />
            </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
