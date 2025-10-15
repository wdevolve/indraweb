import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function TechTest() {  
  return (
 <div className="section">
      <div className="video-visual">
        <video
          autoPlay
        loop
        muted
        playsInline
        className="position-absolute w-100 h-100"
        style={{
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex:'0',
          opacity:'0.5'
        }}
        >
          <source
            src="/videos/electrolysis-2.mp4"
            type="video/mp4"
          />
        </video>

         {/* Radial black overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          // background:
          //   'radial-gradient(circle, transparent 0%, rgba(0,0,0,0.8) 100%)',
          top: 0,
          left: 0,
        }}
      ></div>

      </div>
      <div className="section-wrapper container">
        <div className="content-wrapper text-end">
          <div className="content content-1">
            <div className="mobile-visual">
              <Image
                className="card-img" width={0} height={0}
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
                alt="Fantasy warrior  - Video game character"
              />
            </div>
            <div className="meta">
              <h5 className="card-title text-primary lead display-2 text-grad lead fw-medium mb-3">Agile process</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
            </div>
          </div>
          <div className="content content-2">
            <div className="mobile-visual">
              <div className="water-drop"></div>
              <Image
                className="card-img" width={0} height={0}
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
                alt="Green haired ninja in armor - Video game character"
              />
            </div>
            <div className="meta">
              <h5 className="card-title text-primary lead display-2 text-grad lead fw-medium mb-3">Agile process</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
            </div>
          </div>
          <div className="content content-3">
            <div className="mobile-visual">
                            <div className="water-drop"></div>

              <Image
                className="card-img" width={0} height={0}
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
                alt="Female warrior in armor - Video game character"
              />
            </div>
            <div className="meta">
              <h5 className="card-title text-primary lead display-2 text-grad lead fw-medium mb-3">Agile process</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
            </div>
          </div>
          <div className="content content-4">
            <div className="mobile-visual">
                            <div className="water-drop"></div>
              <Image
                className="card-img" width={0} height={0}
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                alt="Agile warrior - Video game character"
              />
            </div>
            <div className="meta">
              <h5 className="card-title text-primary lead display-2 text-grad lead fw-medium mb-3">Agile process</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
            </div>
          </div>
        </div>
        <div className="visual" style={{zIndex:'999'}}>
          <div className="card-wrapper">
            <div className="water-card card-1">
                            <div className="water-drop"></div>
<Image
                className="card-img" width={0} height={0}
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
                alt="Fantasy warrior  - Video game character"
              />
            </div>
            <div className="water-card card-2">
                            <div className="water-drop"></div>
<Image
                className="card-img" width={0} height={0}
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
                alt="Green haired ninja in armor - Video game character"
              />
            </div>
            <div className="water-card card-3">
                            <div className="water-drop"></div>
<Image
                className="card-img" width={0} height={0}
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
                alt="Female warrior in armor - Video game character"
              />
            </div>
            <div className="water-card card-4">
                            <div className="water-drop"></div>
<Image
                className="card-img" width={0} height={0}
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                alt="Agile warrior - Video game character"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}