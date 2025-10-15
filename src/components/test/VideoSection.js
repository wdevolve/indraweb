import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";
import React, { useEffect, useRef, useState } from 'react';


export default function VideoSection() {
// useAnimations();

const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Duration of videos in seconds
  const video1Duration = 6;
  const video2Duration = 11;

  // Pixels per second scroll sensitivity
  const pixelsPerSecond = 1000;

  // Total scroll height for each video
  const video1Height = video1Duration * pixelsPerSecond;
  const video2Height = video2Duration * pixelsPerSecond;

  const totalHeight = video1Height + video2Height;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Handle Video 1
      if (scrollY <= video1Height - windowHeight) {
        const scrollFraction1 = Math.min(scrollY / (video1Height - windowHeight), 1);
        if (video1Ref.current) {
          video1Ref.current.currentTime = scrollFraction1 * video1Duration;
        }
      }

      // Handle Video 2
      const video2Start = video1Height;
      const video2End = video1Height + video2Height;

      if (scrollY >= video2Start && scrollY <= video2End - windowHeight) {
        const relativeScroll = scrollY - video2Start;
        const scrollFraction2 = Math.min(relativeScroll / (video2Height - windowHeight), 1);
        if (video2Ref.current) {
          video2Ref.current.currentTime = scrollFraction2 * video2Duration;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    

     <section className=" pt-0 pb-5 bg-grad-blue-gray">


      {/* Video Section 1 */}
      <div style={{ height: `${video1Height}px` }}>
        <video
          ref={video1Ref}
          src="/videos/video2.mp4"
          muted
          preload="auto"
          style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Video Section 2 */}
      <div style={{ height: `${video2Height}px` }}>
        <video
          ref={video2Ref}
          src="/videos/video.mp4"
          muted
          preload="auto"
          style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
        />
      </div>

      </section>
    </>
  );
}
