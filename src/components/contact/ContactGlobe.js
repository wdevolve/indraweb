import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';
// import { useAnimations } from "@/utils/animations";

export default function ContactGlobe() {   
// useAnimations();
return (
<>
<Parallax speed={-10}>
  <section
  className="only-desk"
    style={{
      position: 'relative',
      width: '100%',
      minHeight: 'calc(100vh + 200px)',
      backgroundImage: 'url("/images/globe.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div style={{height:'calc(100% + 200px)'}}>
      {/* Branch Marker with Label */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        {/* Pin */}
        <span
        className="bi bi-geo-alt-fill fs-3"
          style={{
            width: '14px',
            height: '14px',
            color: '#06468f',
            display: 'inline-block',
          }}
        ></span>
        {/* Label */}
        <div
          style={{
            marginTop: '6px',
            fontSize: 'clamp(10px, 1vw, 14px)',
            color: '#333',
            backgroundColor: 'rgba(0,0,0,0)',
            padding: '2px 6px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          <div className="fs-4 fw-medium">New York</div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        {/* Pin */}
        <span
        className="bi bi-geo-alt-fill fs-3"
          style={{
            width: '14px',
            height: '14px',
            color: '#06468f',
            display: 'inline-block',
          }}
        ></span>
        {/* Label */}
        <div
          style={{
            marginTop: '6px',
            fontSize: 'clamp(10px, 1vw, 14px)',
            color: '#333',
            backgroundColor: 'rgba(0,0,0,0)',
            padding: '2px 6px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          <div className="fs-4 fw-medium">England</div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        {/* Pin */}
        <span
        className="bi bi-geo-alt-fill fs-3"
          style={{
            width: '14px',
            height: '14px',
            color: '#06468f',
            display: 'inline-block',
          }}
        ></span>
        {/* Label */}
        <div
          style={{
            marginTop: '6px',
            fontSize: 'clamp(10px, 1vw, 14px)',
            color: '#333',
            backgroundColor: 'rgba(0,0,0,0)',
            padding: '2px 6px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          <div className="fs-4 fw-medium">Russia</div>
        </div>
      </div>
      {/* Another Marker */}
      <div
        style={{
          position: 'absolute',
          top: '55%',
          left: '66.5%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <span
        className="bi bi-geo-alt-fill fs-3"
          style={{
            width: '14px',
            height: '14px',
            color: '#b02ded',
            display: 'inline-block',
          }}
        ></span>
        <div
          style={{
            marginTop: '6px',
            fontSize: 'clamp(10px, 1vw, 14px)',
            color: '#333',
            backgroundColor: 'rgba(0,0,0,0)',
            padding: '2px 6px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
          }}
        >
         <span className="fw-normal fs-4">Head Quarters</span> <br/><span className="fs-3 fw-medium">India</span>

          
        </div>
      </div>
    </div>
  </section>
</Parallax>





</>
  );
}