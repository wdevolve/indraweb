// import { useAnimations } from "@/utils/animations";

export default function Home3DModel() {
// useAnimations();
  return (
    <>
    

    <section className="container py-5 py-md-0 my-md-0">
      {/* First Row: Heading */}
      <div className="row mb-0">
        <div className="col">
        </div>
      </div>

      {/* Second Row: 2 columns */}
      <div className="row mx-auto mt-0">
        <div className="col-md-6 d-flex align-items-center">
          <div style={{maxWidth:'350px'}}>
            <h2 className="text-grad display-4 fw-medium">3D Model</h2>
            <p className="lead fs-4 fw-medium text-secondary">
            Rotate and experience the appearance of our water treatment plant machinery.         
             </p>
          </div>
        </div>
        <div className="col-md-6 line-right">
         
{/* 
         <div className="cube-container ms-0 ms-md-5 pb-0 pb-md-5">
  <div className="cube pb-5">
    <div className="front face">
      <button>front</button>
    </div>
    <div className="back face">
      <button>back</button>
    </div>
    <div className="right face">
      <button>right</button>
    </div>
    <div className="left face">
      <button>left</button>
    </div>
    <div className="top face">
      <button>top</button>
    </div>
    <div className="bottom face">
      <button>bottom</button>
    </div>
  </div>
</div> */}


        </div>
      </div>
    </section>


<section className="container-fluid px-0 pb-5 text-center">
  <div
    className="rounded-0 overflow-hidden shadow mx-auto"
    style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '16 / 9',
      maxHeight: 'calc(100vh - 160px)',
    }}
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-100 h-100"
      style={{
        objectFit: 'cover',
      }}
    >
      <source src="/videos/equipment.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>



    </>
  );
}
