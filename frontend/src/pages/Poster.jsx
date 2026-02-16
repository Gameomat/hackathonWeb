import React, { useEffect, useState } from 'react';
import { useRef } from "react";
import Navbar from '../components/Navbar';
import '../styles/Poster.css';
import posterImage from "./poster-jpg.png";


const Poster = () => {
  const audioRef = useRef(null);
  const [emojis, setEmojis] = useState([]);
  const [showEmojis, setShowEmojis] = useState(true);

useEffect(() => {

  if (audioRef.current) {
  audioRef.current.volume = 0.5;
  audioRef.current.play().catch(()=>{});
}

  const emojiList = ['⭐','👍','❤️','🎉','🚀','💡','🔥','✨'];

  const interval = setInterval(() => {

    const newEmoji = {
      id: Date.now() + Math.random(),
      emoji: emojiList[Math.floor(Math.random()*emojiList.length)],
      left: Math.random()*100,
      size: 30 + Math.random()*40,
      duration: 4 + Math.random()*3,
      rotate: (Math.random()*40 - 20)
    };

    setEmojis(prev => [...prev.slice(-35), newEmoji]);

  }, 450);   // smoother spawn rate

  return () => clearInterval(interval);

}, []);


    

  return (
    <div className="poster-container">
      <audio ref={audioRef} loop>
  <source src="/music1.mpeg" type="audio/mpeg" />
</audio>

      <Navbar />
      <div className="poster-wrapper">
        <img 
           src={posterImage} 
          alt="FusionX Hackathon 2026 Poster"
          className="poster-image"
        />
      </div>

      {/* Animated Emojis */}
      {showEmojis && (
        <div className="emoji-container">
  {emojis.map(e => (
    <span
      key={e.id}
      className="floating-emoji"
      style={{
        left: `${e.left}%`,
        fontSize: `${e.size}px`,
        animationDuration: `${e.duration}s`,
        transform: `rotate(${e.rotate}deg)`
      }}
    >
      {e.emoji}
    </span>
  ))}
</div>

      )}
    </div>
  );
};

export default Poster;