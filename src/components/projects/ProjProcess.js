import React from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function ProjProccess() {
  // useAnimations();
  return (
    <>
<section className="pt-5">
      <div className="container">
        


            <div className="row mb-5">
              <div className="col-md-8">
                <h2 className="mb-5 fs-1 fw-normal lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h2>
                <hr className="border-top border-dark border-1"/>

              </div>
              <div className="col-md-4">
                </div>
            </div>




        <div className="row">
  <div className="col-12 col-md">
                    <Image height={0}
                    width={0} style={{ width:'100%', height:'100%' }} src={`/images/dirty-water.webp`} alt={`Water Treatment`} className="Image-fluid" />
  </div>
  <div className="col-12 col-md d-flex align-items-center">
    
 <div className="w-100 mr-[25%] my-4 sm:my-0 sm:flex-[0_0_13%]
                 sm:mx-2 sm:mt-[10%] PulseLine PulseLine--blue">
          <div className="PulseLine-ends"></div>
        </div>


  </div>
  <div className="col-12 col-md">
                <Image height={0}
                    width={0} style={{ width:'100%', height:'100%' }} src={`/images/indra-equipment.webp`} alt={`Water Treatment`} className="Image-fluid" />
  </div>
  <div className="col-12 col-md d-flex align-items-center">
        

      <div className="mr-[25%] my-4 sm:my-0 sm:flex-[0_0_13%]
                 sm:mx-2 sm:mt-[10%] PulseLine purple PulseLine--purple">
          <div className="PulseLine-ends"></div>
        </div>


  </div>
  <div className="col-12 col-md">
                <Image height={0}
                    width={0} style={{ width:'100%', height:'100%' }} src={`/images/pure-water.webp`} alt={`Pure water`} className="Image-fluid" />
  </div>
</div>

        </div> 
    </section>

<section className="pb-0 text-center">
      <div className="container mb-5">
        
        <div className="row">
  <div className="col-12 col-md">
                                           <span className="badge text-bg-primary bg-primary-subtle text-dark my-3">1</span>
                    <p>Lorem ipsum short image description in three lines.</p>

  </div>
  <div className="col-12 col-md d-flex align-items-center">
    


  </div>
  <div className="col-12 col-md">
                                           <span className="badge text-bg-primary bg-primary-subtle text-dark my-3">2</span>
                    <p>Lorem ipsum short image description in three lines.</p>

  </div>
  <div className="col-12 col-md d-flex align-items-center">
        


  </div>
  <div className="col-12 col-md">
                                           <span className="badge text-bg-primary bg-primary-subtle text-dark my-3">3</span>
                    <p>Lorem ipsum short image description in three lines.</p>

  </div>
</div>

        </div> 
    </section>    

</>
  );
}
