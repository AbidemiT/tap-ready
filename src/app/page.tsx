"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Home() {
  const morphViewsClass = [
    "firstView",
    "secondView",
    "thirdView",
    "fourthView",
  ];

  const [currentView, setCurrentView] = useState(morphViewsClass[0]);

  // Create individual motion values for each item
  const mv1 = useMotionValue(0);
  const mv2 = useMotionValue(0);
  const mv3 = useMotionValue(0);
  const mv4 = useMotionValue(0);
  const mv5 = useMotionValue(0);
  const mv6 = useMotionValue(0);

  // Create individual radius transforms
  const radius1 = useTransform(mv1, [1, 2, 3, 4, 5, 6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const radius2 = useTransform(mv2, [1, 2, 3, 4, 5, 6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const radius3 = useTransform(mv3, [1, 2, 3, 4, 5, 6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const radius4 = useTransform(mv4, [1, 2, 3, 4, 5, 6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const radius5 = useTransform(mv5, [1, 2, 3, 4, 5, 6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const radius6 = useTransform(mv6, [1, 2, 3, 4, 5, 6], ["50%", "24px", "50%", "24px", "50%", "24px"]);

  const itemRadiuses = [radius1, radius2, radius3, radius4, radius5, radius6];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = morphViewsClass.indexOf(currentView);
      const nextIndex = (currentIndex + 1) % morphViewsClass.length;
      setCurrentView(morphViewsClass[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentView]);

  return (
    <div>
      <div className="masonry-wrapper">
        <ul className={styles.masonry}>
          {[...Array(6)].map((_, index) => (
            <motion.li
              key={`grid-item-${index}`}
              className={`${styles.masonryItem} 
              ${styles[`${currentView}-${index + 1}`]}`}
              layoutId={`grid-item-${index}`}
              layout
              style={{
                borderRadius: itemRadiuses[index],
                width: "100%"
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 35,
                mass: 1.5,
                duration: 1.2
              }}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}
                layout="preserve-aspect"
                transition={{
                  duration: 1.2,
                  ease: "anticipate"
                }}
              >
                <Image
                  src={`/${index + 1}.webp`}
                  fill
                  alt=""
                  className={styles.gridImage}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
