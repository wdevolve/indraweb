import React from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function AboutSolving() {
  // useAnimations();
  // Partner data
  const solve1 = [
    {
      title: 'Non-Standardization',
      description: '<p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p>'
    }
  ];

  // Client data
  const solve2 = [
    {
      title: 'Space Intensive',
      description: '<p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p>',
    }
  ]
      const solve3 = [
    {
      title: 'Poor Shock Handling',
      description: '<p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p>',
    }
  ]
      const solve4 = [
    {
      title: 'Unupgradable',
      description: '<p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p><p>A global IT solutions provider for digital transformation. Sample partner description line paragraph. A global IT solutions provider for digital transformation. Sample partner description line paragraph.</p>',
    }
  ];

  return (
    <div className="container-fluid pb-5 my-0 px-0">
      {/* Sticky Main Heading */}
      <div
        className="container bg-white py-3 border-bottom"
        
      >
          <h2 className="mb-3 fw-normal lead fs-1" style={{maxWidth:'100%'}}>
                What is <span className="text-grad">INDRA Solving</span>?</h2>
      </div>

      {/* Clients Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="position-sticky pe-md-5" style={{ top: '250px', zIndex: 1010 }}>
              <Image height={0}
                width={0} alt="Image" style={{opacity:'0.8',width:'auto',height:'60vh' }} src="/images/product3.webp"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              {solve1.map((solve1, index) => (
                <div className="col-md-12 mb-4 d-flex align-items-center" style={{minHeight:'calc(100vh - 100px)'}} key={`solve1-${index}`}>
                    <div className="p-0 mt-5 pe-md-5 me-md-5">
                      <h5 className="card-title text-primary lead display-5 mb-3">{solve1.title}</h5>
                        <div
                          className="card-text lead"
                          dangerouslySetInnerHTML={{ __html: solve1.description }}
                        ></div>                     
                        </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Clients Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="position-sticky pe-md-5" style={{ top: '250px', zIndex: 1010 }}>
              <Image height={0}
                width={0} alt="Image" style={{opacity:'0.8',width:'auto',height:'60vh' }} src="/images/product1.webp"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              {solve2.map((solve2, index) => (
                <div className="col-md-12 mb-4 d-flex align-items-center" style={{minHeight:'calc(100vh - 100px)'}} key={`solve2-${index}`}>
                    <div className="p-0 mt-5 pe-md-5 me-md-5">
                      <h5 className="card-title text-primary lead display-5 mb-3">{solve2.title}</h5>
                        <div
                          className="card-text lead"
                          dangerouslySetInnerHTML={{ __html: solve2.description }}
                        ></div>                    
                        </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="position-sticky pe-md-5" style={{ top: '250px', zIndex: 1010}}>
                            <Image height={0}
                width={0} alt="Image" style={{opacity:'0.8',width:'auto',height:'60vh' }} src="/images/product2.webp"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              {solve3.map((solve3, index) => (
                <div className="col-md-12 mb-4 d-flex align-items-center" style={{minHeight:'calc(100vh - 100px)'}} key={`solve3-${index}`}>
                    <div className="p-0 mt-5">
                      <h5 className="card-title text-primary lead display-5 mb-3">{solve3.title}</h5>
                        <div
                          className="card-text lead"
                          dangerouslySetInnerHTML={{ __html: solve3.description }}
                        ></div>                     </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      {/* Partners Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="position-sticky pe-md-5" style={{ top: '250px', zIndex: 1010 }}>
                            <Image height={0}
                width={0} alt="Image" style={{opacity:'0.8',width:'auto',height:'60vh' }} src="/images/product3.webp"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              {solve4.map((solve4, index) => (
                <div className="col-md-12 mb-4 d-flex align-items-center" style={{minHeight:'calc(100vh - 100px)'}} key={`solve4-${index}`}>
                    <div className="p-0 mt-5">
                      <h5 className="card-title text-primary lead display-5 mb-3">{solve4.title}</h5>
                        <div
                          className="card-text lead"
                          dangerouslySetInnerHTML={{ __html: solve4.description }}
                        ></div>                     </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
