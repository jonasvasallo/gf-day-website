import React, { useEffect, useRef, useState } from "react";
import sound from '../assets/songs/clairo_heaven.mp3'

function SpotifyCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const music = useRef(new Audio(sound));

  const playerProgressRef = useRef(null);
  const progressRef = useRef(null);

  const playPause = () => {
    if (isPlaying) {
      music.current.pause();
    } else {
      music.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const updateProgressBar = () => {
      if (!progressRef.current) return;
      const { duration, currentTime } = music.current;
      const percent = (currentTime / duration) * 100;
      progressRef.current.style.width = `${percent}%`;
    };

    const setProgress = (e) => {
      const width = playerProgressRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      music.current.currentTime = (clickX / width) * music.current.duration;
    };

    music.current.addEventListener("timeupdate", updateProgressBar);
    return () => {
      music.current.removeEventListener("timeupdate", updateProgressBar);
    };
  }, []);

  return (
    <div className="w-[400px] h-[112px] mt-4 bg-purple-300 rounded-md p-2 shadow-md">
      <div className="flex gap-2 justify-between">
        <div className="w-24 h-24 bg-gray-400">
          <img src="/pictures/cover.JPG" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <span className="text-white font-semibold">i love you • kyra</span>
          <span className="text-white text-md font-medium">Heaven • Clairo</span>

          <div className="flex items-center gap-2">
            <button>
              <i className="fa-solid fa-backward" />
            </button>
            <div
              ref={playerProgressRef}
              className="player-progress w-32 h-2 bg-gray-500 rounded cursor-pointer"
              onClick={(e) => {
                const width = playerProgressRef.current.clientWidth;
                const clickX = e.nativeEvent.offsetX;
                music.current.currentTime =
                  (clickX / width) * music.current.duration;
              }}
            >
              <div ref={progressRef} className="progress h-2 bg-green-400 rounded"></div>
            </div>
            <button>
              <i className="fa-solid fa-forward" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
            <div className='w-8 h-8'>
                <img src="/assets/spotify-logo.png" alt="" className='object-cover'/>
            </div>
            <button
                onClick={playPause}
                className="w-9 h-9 bg-white rounded-full flex justify-center items-center"
            >
            <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`} />
            </button>
        </div>
      </div>
    </div>
  );
}

export default SpotifyCard;
