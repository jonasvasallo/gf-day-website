import React, { useState, useEffect } from "react";
import MemoriesCard from "../MemoriesCard";

function OurMemoriesTogether() {
  const cards = [
    "IMG_8089.jpeg",
    "IMG_7705.jpg",
    "IMG_7960.jpeg",
    "cover.JPG",
    "IMG_7711.jpg",
    "IMG_8307.jpeg",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // 🔹 Update cards per view based on screen size
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    }

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (startIndex < cards.length - cardsPerView) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl md:text-5xl font-LTColoredPencil text-center">
        Our Memories Together 💜
      </div>

      <div className="flex gap-2 mt-4 items-center justify-center">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="px-3 py-2 bg-purple-400 rounded-full text-white disabled:opacity-50"
        >
          ◀
        </button>

        {/* Slider container */}
        <div className="flex gap-2 overflow-hidden w-[50vw] sm:w-[500px] md:w-[600px] justify-center">
          {cards.slice(startIndex, startIndex + cardsPerView).map((path, i) => (
            <MemoriesCard key={i} path={path} />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          disabled={startIndex >= cards.length - cardsPerView}
          className="px-3 py-2 bg-purple-400 rounded-full text-white disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default OurMemoriesTogether;
