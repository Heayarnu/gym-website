import React, { useEffect, useState } from "react";
import BodyParts from "./BodyParts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({ data, setBodyPart, bodyPart, isBodyparts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(2);
  let sliderRef = React.createRef();

  useEffect(() => {
    const handleResize = () => {
      // Tailwind's breakpoint for 'md' screens is 768px
      if (window.innerWidth >= 768) {
        setScrollAmount(3);
      } else {
        setScrollAmount(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the correct scroll amount

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideLeft = () => {
    if (currentIndex > 0) {
      const newIndex = Math.max(0, currentIndex - scrollAmount);
      setCurrentIndex(newIndex);
      sliderRef.current.children[newIndex].scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };

  const slideRight = () => {
    if (currentIndex < data.length - 1) {
      const newIndex = Math.min(data.length - 1, currentIndex + scrollAmount);
      setCurrentIndex(newIndex);
      sliderRef.current.children[newIndex].scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };

  return (
    <div className="flex relative items-center">
      <button
        onClick={slideLeft}
        className="h-7 text-2xl mr-5 hover:scale-105 hover:opacity-100 opacity-30"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      <div
        ref={sliderRef}
        className="overflow-x-scroll scroll-m-2 whitespace-nowrap flex flex-row"
        style={{ scrollBehavior: "smooth" }}
      >
        {data.map((item) => (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            className="mx-4 md:mx-7 lg:mx-10"
          >
            {isBodyparts ? (
              <BodyParts
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={slideRight}
        className=" h-10  text-2xl ml-5 hover:scale-105 hover:opacity-100 opacity-30"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default HorizontalScrollBar;
