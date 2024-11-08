"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  useTransform,
  useMotionValue,
} from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
// import GridLayout from "@/components/GridLayout";

export default function Home() {
  const firstView = useMotionValue(0);
  const secondView = useMotionValue(0);
  const thirdView = useMotionValue(0);
  const fourthView = useMotionValue(0);

  const firstViewHeight = useTransform(
    firstView,
    [1, 2, 3, 4, 5, 6],
    ["100%", "100%", "100%", "100%", "100%", "100%"]
  );
  const secondViewHeight = useTransform(
    secondView,
    [1, 2, 3, 4, 5, 6],
    ["100%", "100%", "100%", "100%", "100%", "100%"]
  );
  const thirdViewHeight = useTransform(
    thirdView,
    [1, 2, 3, 4, 5, 6],
    ["100%", "100%", "100%", "100%", "100%", "100%"]
  );
  const fourthViewHeight = useTransform(
    fourthView,
    [1, 2, 3, 4, 5, 6],
    ["100%", "100%", "100%", "100%", "100%", "100%"]
  );
  const firstViewRadius = useTransform(firstView, [1, 2, 3, 4, 5, 6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const secondViewRadius = useTransform(secondView, [1, 2,3,4,5,6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const thirdViewRadius = useTransform(thirdView, [1, 2, 3, 4, 5, 6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const fourthViewRadius = useTransform(fourthView, [1, 2,3,4,5,6], ["50%", "24px", "50%", "24px", "50%", "24px"]);
  const firstViewWidth = useTransform(
    firstView,
    [1, 2, 3, 4, 5, 6],
    ["100%", "100%", "100%", "100%", "100%", "100%"]
  );
  const secondViewWidth = useTransform(secondView, [1, 2], ["100%", "100%"]);
  const thirdViewWidth = useTransform(
    thirdView,
    [1, 2, 3, 4, 5, 6],
    ["100%", "100%", "100%", "100%", "100%", "100%"]
  );
  const fourthViewWidth = useTransform(fourthView, [1, 2], ["100%", "100%"]);

  const morphViewsClass = [
    "firstView",
    "secondView",
    "thirdView",
    "fourthView",
  ];

  const [scope, animate] = useAnimate();

  const [currentView, setCurrentView] = useState(morphViewsClass[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = morphViewsClass.indexOf(currentView);
      const nextIndex = (currentIndex + 1) % morphViewsClass.length;
      animate(scope.current, { opacity: 0 }, { duration: 0.5 }).then(() => {
      setCurrentView(morphViewsClass[nextIndex]);
      animate(scope.current, { opacity: 1 }, { duration: 0.5 });
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [currentView]);

  const getHeight = () => {
    switch (currentView) {
      case "firstView":
        return firstViewHeight;
      case "secondView":
        return secondViewHeight;
      case "thirdView":
        return thirdViewHeight;
      case "fourthView":
        return fourthViewHeight;
      default:
        return firstViewHeight;
    }
  };
  const getWidth = () => {
    switch (currentView) {
      case "firstView":
        return firstViewWidth;
      case "secondView":
        return secondViewWidth;
      case "thirdView":
        return thirdViewWidth;
      case "fourthView":
        return fourthViewWidth;
      default:
        return firstViewWidth;
    }
  };
  const getRadius = () => {
    switch (currentView) {
      case "firstView":
        return firstViewRadius;
      case "secondView":
        return secondViewRadius;
      case "thirdView":
        return thirdViewRadius;
      case "fourthView":
        return fourthViewRadius;
      default:
        return firstViewRadius;
    }
  };

  return (
    <div>
      {/* <h1>Hello</h1> */}
      <div className="masonry-wrapper">
        <ul className={styles.masonry} ref={scope}>
          {[...Array(6)].map((_, index) => (
            <motion.li
              key={index}
              className={`${styles.masonryItem} 
              ${styles[`${currentView}-${index + 1}`]}`}
              style={{
              overflow: "hidden",
              height: getHeight(),
              width: getWidth(),
              borderRadius: getRadius(),
              }}
              animate={{
              height: getHeight(),
              width: getWidth(),
              borderRadius: getRadius(),
              }}
              transition={{ duration: 1 }}
            >
              <Image
              src={`/${index + 1}.webp`}
              width={100}
              height={100}
              alt=""
              className="object-cover w-full h-full"
              priority
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>

    // <GridLayout />
  );
}
