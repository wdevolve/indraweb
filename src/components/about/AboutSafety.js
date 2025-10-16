import { useEffect } from 'react';
import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";
import Image from 'next/image';

export default function AboutSafety() {

// useAnimations();
  return (
    <>
    

      <section className="py-5 bg-dark">
        <div className="container"  style={{zIndex:'-1', position:'relative'}}>
      
        <div className="row mt-3">
          <div className="col-md-8 mx-auto">

                      <div className="row">
            <div className="col-md-12">
             
              <Image
                src={`/images/products/product-safety.webp`}
                alt="Media coverage"
                width={0}
                height={0}
                className="rounded-5 mb-5 shadow"
                style={{width:'100%',height:'450px',objectFit:'cover'}}
              />
              
            </div>
          </div>

            <p className="pe-md-5 lead fs-5 text-light text-center">Indra’s thesis is simple. Put treatment and intelligence at the source and make reuse the default. ElectroX turns difficult effluents into reliable water for industry and cities. Indra’s water intelligence platform learns from every drop to predict quality, prevent downtime, and verify impact. This shifts capital from long pipes to smart nodes and converts risk into resilience. The outcome is less pollution, lower emissions, steadier supply, and healthier communities at scale.</p>

          </div>
        </div>

</div>
</section>       



    </>
  );
}
