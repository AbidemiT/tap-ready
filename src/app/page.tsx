"use client";
import { motion, useMotionValue, useAnimate, AnimationSequence, easeIn } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useMemo, useEffect } from "react";
// import GridLayout from "@/components/GridLayout";

export default function Home() {
  // const progress = useMotionValue(0);
  const [scope, animate] = useAnimate();
  // const sequence: AnimationSequence = useMemo(() => [
  //   ['li.masonryItem-1', { height: 84, width: "100%", borderRadius: "48px", gridArea: "2 / 1 / span 1 / span 3" }, { duration: 1 }],
  //   [progress, 100, { ease: "easeInOut", duration: 1 }]
  // ], [progress]);

  useEffect(() => {
    handleMansoryItemOne();
  }, []);

  const handleMansoryItemOne = async () => {
    try {
      await animate("li.masonryItem-1", {y: "-40%"});

      await animate("li.masonryItem-1", {y: "0%"});

      await animate("li.masonryItem-1", {y: "40%"});


    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div>
      <div className="masonry-wrapper">
        <motion.ul className={styles.masonry} ref={scope} >
            <motion.li
              className={`${styles.masonryItem} ${styles.masonryItem}-1`}
              initial={{
                height: "84px",
                width: "84px",
                borderRadius: "50%",
                gridColumn: 1,
                gridRow: 1,
              }}
              animate={{
                height: [ "84px", "64px", "84px"],
                width: [ "300px", "64px", "84px"],
                borderRadius: [ "48px", "32px", "50%"],
                gridColumn: [ "1 / span 3", "1 / span 1", "1 / span 1"],
                gridRow: [ "2 / span 1", "1 / span 1", "1 / span 1"],
                // gridArea: ["1 / 1 / span 1 / span 1", "2 / 1 / span 1 / span 3", "1 / 1 / span 1 / span 1", "1 / 1 / span 1 / span 1"],
              }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src={`/1.webp`}
                width={100}
                height={100}
                alt=""
                className="object-cover w-full h-full"
                priority
              />
            </motion.li>
           <motion.li
            className={`${styles.masonryItem} ${styles.masonryItem}-2`}
            initial={{ height: "100%", width: "64px", borderRadius: "48px", gridArea: "1 / 2 / span 3 / span 1" }}
            animate={ {
              height: [ "64px", "84px", "100%"],
              width: [ "64px", "64px", "64px"],
              borderRadius: [ "50%", "32px", "48px"],
              gridArea: [ "1 / 2 / span 1 / span 1", "1 / 2 / span 1 / span 1", "1 / 2 / span 3 / span 1"],
              // x: ["33%", "33%", "33%", "33%"],
            }
            // ,[
            //   {
            //     height: 64,
            //     width: 64,
            //     borderRadius: "50%",
            //     gridColumn: 2,
            //     gridRow: 1,
            //   },
            //   {
            //     height: 84,
            //     width: 64,
            //     borderRadius: "32px",
            //     gridColumn: 2,
            //     gridRow: 1,
            //   },
            //   {height: "100%", width: "64px", borderRadius: "48px", gridArea: "1 / 2 / span 3 / span 1" },
            // ]
          }
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src={`/2.webp`}
              width={100}
              height={100}
              alt=""
              className="object-cover w-full h-full"
              priority
            />
          </motion.li>
          {/*
          <motion.li
            className={`${styles.masonryItem} ${styles.masonryItem}-3`}
            initial={{ borderRadius: "48px", gridRow: "span 3" }}
            animate={[
              {
                height: 72,
                width: 84,
                borderRadius: "32px",
                gridColumn: 3,
                gridRow: 1,
              },
              {
                height: 64,
                width: "100%",
                borderRadius: "32px",
                gridArea: "2 / 2 / span 2 / span 3",
              },
              { height: "100%", width: "64px", borderRadius: "48px", gridArea: "1 / 3 / span 3 / span 1" },
            ]}
            transition={{ duration: 30, repeat: Infinity }}
          >
            <Image
              src={`/3.webp`}
              width={100}
              height={100}
              alt=""
              className="object-cover w-full h-full"
              priority
            />
          </motion.li>
          <motion.li
            className={`${styles.masonryItem} ${styles.masonryItem}-4`}
            initial={{ borderRadius: "48px", gridRow: "span 2" }}
            animate={[
              {
                height: 72,
                width: 72,
                borderRadius: "50%",
                gridColumn: 1,
                gridRow: 3,
              },
              { gridColumn: 1, gridRow: 2 },
              {height: "100%", width: "72px", borderRadius: "48px", gridRow: "2 / span 2" },
            ]}
            transition={{ duration: 30, repeat: Infinity }}
          >
            <Image
              src={`/4.webp`}
              width={100}
              height={100}
              alt=""
              className="object-cover w-full h-full"
              priority
            />
          </motion.li>
          <motion.li
            className={`${styles.masonryItem} ${styles.masonryItem}-5`}
            initial={{
              height: 84,
              width: 84,
              borderRadius: "50%",
              gridColumn: 1,
              gridRow: 4,
              alignSelf: "center",
            }}
            animate={[
              { height: 72, width: 72, borderRadius: "50%" },
              {
                height: "100%",
                width: "100%",
                borderRadius: "56px",
                gridArea: "3 / 1 / span 2 / span 2",
              },
              {
                height: 84,
                width: 84,
                borderRadius: "50%",
                gridArea: "4 / 1 / span 1 / span 1"
              },
            ]}
            transition={{ duration: 30, repeat: Infinity }}
          >
            <Image
              src={`/5.webp`}
              width={100}
              height={100}
              alt=""
              className="object-cover w-full h-full"
              priority
            />
          </motion.li>
          <motion.li
            className={`${styles.masonryItem} ${styles.masonryItem}-6`}
            initial={{
              height: "100%",
              width: "100%",
              borderRadius: "56px",
              gridColumn: "2 / span 2",
              gridRow: "4 / span 3",
            }}
            animate={[
              {
                borderRadius: "48px",
                gridColumn: "2 / span 2",
                gridRow: "3 / span 2",
              },
              {
                height: 72,
                width: 72,
                borderRadius: "50%",
                gridColumn: 3,
                gridRow: 4,
              },
              {
                height: "100%",
                width: "100%",
                borderRadius: "56px",
                gridColumn: "2 / span 2",
                gridRow: "4 / span 3",
                alignSelf: "flex-start",
              },
            ]}
            transition={{ duration: 30, repeat: Infinity }}
          >
            <Image
              src={`/6.webp`}
              width={100}
              height={100}
              alt=""
              className="object-cover w-full h-full"
              priority
            />
          </motion.li> */}
        </motion.ul>
      </div>
    </div>

    // <GridLayout />
  );
}
