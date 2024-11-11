"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const morphViewsClass = [
  "firstView",
  "secondView",
  "thirdView",
  "fourthView",
];

const gridLayouts = {
  firstView: [
    "col-start-1 row-start-1 self-center",
    "row-span-3",
    "row-span-3",
    "row-span-2",
    "row-start-1",
    "col-span-2 col-start-2",
  ],
  secondView: [
    "row-start-2 col-span-3",
    "col-start-2 row-span-1",
    "row-span-1",
    "row-span-1",
    "row-start-1",
    "col-start-2 col-span-2 row-start-3 row-span-2",
  ],
  thirdView: [
    "col-start-1 row-start-1",
    "col-start-2 row-span-1",
    "col-start-2 col-span-2 row-start-2",
    "col-start-1 row-start-2 row-span-1",
    "col-start-1 col-span-2 row-start-3 row-span-2",
    "col-start-3 row-start-4",
  ],
  fourthView: [
    "col-start-1 row-start-1",
    "col-start-2 row-start-1 row-span-3",
    "col-start-3 row-start-1 row-span-2",
    "col-start-1 row-start-2 row-span-2",
    "col-start-1 col-span-2 row-start-4",
    "col-start-3 row-start-3 row-span-2",
  ],
};

export default function Mansory() {
  const [currentView, setCurrentView] = useState(morphViewsClass[0]);

  const mv1 = useMotionValue(0);
  const mv2 = useMotionValue(0);
  const mv3 = useMotionValue(0);
  const mv4 = useMotionValue(0);
  const mv5 = useMotionValue(0);
  const mv6 = useMotionValue(0);

  const radius1 = useTransform(mv1, [1, 2, 3, 4, 5, 6], ["50%", "34px", "50%", "34px", "50%", "34px"]);
  const radius2 = useTransform(mv2, [1, 2, 3, 4, 5, 6], ["50%", "34px", "50%", "34px", "50%", "34px"]);
  const radius3 = useTransform(mv3, [1, 2, 3, 4, 5, 6], ["50%", "34px", "50%", "34px", "50%", "34px"]);
  const radius4 = useTransform(mv4, [1, 2, 3, 4, 5, 6], ["50%", "34px", "50%", "34px", "50%", "34px"]);
  const radius5 = useTransform(mv5, [1, 2, 3, 4, 5, 6], ["50%", "34px", "50%", "34px", "50%", "34px"]);
  const radius6 = useTransform(mv6, [1, 2, 3, 4, 5, 6], ["50%", "34px", "50%", "34px", "50%", "34px"]);

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
    <ul className="overflow-hidden grid grid-cols-3 grid-rows-4 gap-5 bg-transparent h-[400px] w-[300px] p-5 pointer-events-none">
      {[...Array(6)].map((_, index) => (
        <motion.li
          key={`grid-item-${index}`}
          className={`overflow-hidden bg-gray-400 flex items-center justify-center justify-self-stretch self-stretch w-full h-full relative
                ${gridLayouts[currentView as keyof typeof gridLayouts][index]}`}
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
            <Image
              src={`/${index + 1}.webp`}
              fill
              alt=""
              className="object-cover w-full h-full transform-none opacity-100 transition-none"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </motion.li>
      ))}
    </ul>
  );
}