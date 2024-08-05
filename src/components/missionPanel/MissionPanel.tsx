import "./MissionPanel.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const imageAnimateFromLeft = {
  initial: {
    opacity: 0,
    x: "200px",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: { duration: 1 },
  },
};
const imageAnimateFromRight = {
  initial: {
    opacity: 0,
    x: "-200px",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: { duration: 1 },
  },
};
const textAnimateIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const intersectionOptions = {
  threshold: 0.5,
};

type Props = {
  inverse?: boolean;
  background?: string;
  children?: React.ReactNode;
};
export const MissionPanel = ({
  inverse = false,
  background = "bg-emerald-50",
  children,
}: Props) => {
  const [show, setShow] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);
  const [image, detail] = children as Array<React.ReactNode>;
  const animate = inverse ? imageAnimateFromLeft : imageAnimateFromRight;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !show) {
          setShow(true);
        }
      });
    }, intersectionOptions);
    if (productRef.current) {
      observer.observe(productRef.current);
    }
    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, [productRef]);
  return (
    <div
      className={`grid-info flex flex-col mt-20 gap-4  md:h-96 relative  md:max-w-[900px] ${
        inverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
      ref={productRef}
    >
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.75 } }}
            className={`grid-foreground absolute h-full md:h-96 rounded-2xl w-full bottom-0 -z-10 md:w-5/6 ${
              inverse ? "md:w-5/6 left-0" : "right-0"
            } ${background}`}
          ></motion.div>
          <motion.div
            {...animate}
            className="panel-left relative z-20 md:h-full md:flex md:items-center"
          >
            {image}
          </motion.div>
          <motion.div
            {...textAnimateIn}
            className={`panel-right relative  z-10 p-8 rounded-md md:flex-1 ${
              inverse ? "" : "md:w-5/6"
            }`}
          >
            {detail}
          </motion.div>
        </>
      )}
    </div>
  );
};
type MissionULType = {
  children: React.ReactNode;
};
export const MissionUL = ({ children }: MissionULType) => {
  return (
    <ul className="product-list flex flex-col gap-4 list-disc text-md lg:text-xl text-slate-700">
      {children}
    </ul>
  );
};
type MissionListType = {
  children: React.ReactNode;
};
export const MissionList = ({ children }: MissionListType) => {
  return (
    <li>
      <p className="text-balance">{children}</p>
    </li>
  );
};
