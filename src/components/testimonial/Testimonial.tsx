import "./Testimonial.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar } from "../avatar/Avatar";
import { data } from "./data";
import { useState } from "react";

export const Testimonial = () => {
  const [testData] = useState(data);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === testData.length - 1) {
      return;
    }

    setIndex(index + 1);
  };
  const handlePrevious = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  return (
    <div className="testimonials mt-16 relative md:max-w-[800px] mx-auto ">
      <div className="testimonial-container my-2 h-[386px] md:h-[300px] relative flex items-center">
        {testData.map((te, i) => {
          return (
            <div
              key={te.id}
              style={{
                transform: `translateX(${(i - index) * 100}%)`,
              }}
              className={`testimonial-item min-w-full md:h-[230px] h-[320px]  bg-white absolute rounded-2xl transition-all p-8 duration-700`}
            >
              <div className="user absolute left-1/2 -translate-x-1/2 -top-7">
                <Avatar />
              </div>
              <header className="text-center py-3">
                <h5 className="text-md font-semibold text-primary">
                  {te.name}
                </h5>
                <p className="text-sm text-zinc-700">Ceo, Ocar bulding.</p>
              </header>

              <p className="comments md:px-5 text-zinc-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                harum doloribus quae! Magnam, aliquam. Reiciendis dolore
                doloremque aliquid ut, illum ea, minima officiis vel adipisci
                laborum aut repudiandae asperiores eveniet excepturi animi!
                Illo, nesciunt consectetur officiis est reiciendis eveniet eos.
              </p>
            </div>
          );
        })}
      </div>
      <div className="testimonial-controller w-full flex justify-between absolute top-1/2 -translate-y-1/2">
        <button
          className="bg-white p-2 rounded-full cursor-pointer relative -left-2 lg:-left-10"
          onClick={handlePrevious}
        >
          <Icon
            icon="iconamoon:arrow-left-2-bold"
            width="20"
            height="20"
            className="text-secondary"
          />
        </button>
        <button className="bg-white p-2 z-20 rounded-full cursor-pointer relative -right-2 lg:-right-10">
          <Icon
            icon="iconamoon:arrow-right-2-bold"
            width="20"
            height="20"
            className="text-secondary"
            onClick={handleNext}
          />
        </button>
      </div>
      <div className="testimonial-indicator w-full flex justify-center gap-2 relative -top-8">
        {testData.map((t, i) => {
          return i === index ? (
            <>
              <div
                key={t.id}
                className="min-h-2 min-w-2 bg-primary rounded-full cursor-pointer"
                onClick={() => setIndex(i)}
              ></div>
            </>
          ) : (
            <div
              className="min-h-2 min-w-2 bg-primary/25 rounded-full  cursor-pointer"
              onClick={() => setIndex(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default Testimonial;
