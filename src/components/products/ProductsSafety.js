import { useEffect } from 'react';
import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";
import Image from 'next/image';

export default function ProductsSafety() {

// useAnimations();
  return (
    <>
    

      <section className="py-5 bg-dark">
        <div className="container"  style={{zIndex:'-1', position:'relative'}}>
      
        <div className="row mt-3">
          <div className="col-md-9 mx-auto">

                      <div className="row">
            <div className="col-md-6">
             
              <Image
                src={`/images/products/product-safety.jpg`}
                alt="Media coverage"
                width={0}
                height={0}
                className="media-slide-image rounded-5 mb-5 shadow"
                style={{width:'100%',height:'500px',objectFit:'cover'}}
              />
              
            </div>
              <div className="col-md-6">
             
              <Image
                src={`/images/products/product-safety-2.jpg`}
                alt="Media coverage"
                width={0}
                height={0}
                className="media-slide-image rounded-5 mb-5 shadow"
                style={{width:'100%',height:'500px',objectFit:'cover'}}
              />
              
            </div>
          </div>

            <p className="pe-md-5 lead fs-5 text-light text-center">Safety isn’t optional; it’s built-in. The built-in pressure, temperature, electrical, and relief safeguards in every module ensure every run is a smooth one.</p>

          </div>
        </div>

</div>
</section>       



    </>
  );
}
