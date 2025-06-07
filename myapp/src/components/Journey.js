'use client';

import { useEffect, useRef } from 'react';
import './Journey.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Journey = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const box = boxRef.current;
    const container = containerRef.current;
  
    if (box && container) {
      gsap.to(box, {
        rotateY: -360,
        y: -1000, // shift the box up during rotation
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=2000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }
  }, []);
  

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-60">
        My <span className="text-violet-500">Journey</span>
      </h2>
      <div className="gallery-container" ref={containerRef}>
        <div className="box" ref={boxRef}>
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} style={{ '--i': i + 1 }}>
              <img src={`/journey/p${i + 1}.jpeg`} alt={`p${i + 1}`} />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Journey;
