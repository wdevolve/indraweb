import { useEffect } from 'react';
import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";
import Image from 'next/image';

export default function ProductsEvolution() {

// useAnimations();
  return (
    <>
    


     <section className=" py-5 bg-light">

        <div
          className="container anim-fade-left"
        >


            <div className="row anim-fade-left">
            <div className="col">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Indra <span className="text-grad">Evolution</span></h2>
              <p className="fs-4 text-secondary">A journey from treating liters to millions of liters.</p>
            </div>
          </div>


           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-0 text-center" style={{paddingBottom:'20px'}}>
              <div className="col text-center">
                <Image height={0} width={0} style={{ width:'100%', height:'auto' }} src={`/images/products/product-evolution-1.webp`} alt={`Water Treatment`} className="Image-fluid mb-5" />
              <div style={{marginTop:'-45px', position:'relative', zIndex:'999999', background:'transparent'}}>
                <div className="lead fs-2 fw-bold text-secondary bg-light py-3 px-4 d-inline">2018</div>
                <div className="lead fs-2 fw-medium text-grad my-2">Prototype</div>
                <div className="lead text-black">Compact</div>
                </div>
              </div>
              <div className="col">
                <Image height={0} width={0} style={{ width:'100%', height:'auto' }} src={`/images/products/product-evolution-2.webp`} alt={`Water Treatment`} className="Image-fluid mb-5" />
              <div style={{marginTop:'-45px', position:'relative', zIndex:'999999', background:'transparent'}}>
                <div className="lead fs-2 fw-bold text-secondary bg-light py-3 px-4 d-inline">2020</div>
                <div className="lead fs-2 fw-medium text-grad my-2">Flow Reactor</div>
                <div className="lead text-black">3x Throughput</div>
                </div>

              </div>
              <div className="col">
                <Image height={0} width={0} style={{ width:'100%', height:'auto' }} src={`/images/products/product-evolution-3.webp`} alt={`Water Treatment`} className="Image-fluid mb-5" />
              <div style={{marginTop:'-45px', position:'relative', zIndex:'999999', background:'transparent'}}>
                <div className="lead fs-2 fw-bold text-secondary bg-light py-3 px-4 d-inline">2022</div>
                <div className="lead fs-2 fw-medium text-grad my-2">SRF 1.0</div>
                <div className="lead text-black">5x Throughput</div>
                </div>
              </div>
              <div className="col">
                <Image height={0} width={0} style={{ width:'100%', height:'auto' }} src={`/images/products/product-evolution-4.webp`} alt={`Water Treatment`} className="Image-fluid mb-5" />
              <div style={{marginTop:'-45px', position:'relative', zIndex:'999999', background:'transparent'}}>
                <div className="lead fs-2 fw-bold text-secondary bg-light py-3 px-4 d-inline">2023</div>
                <div className="lead fs-2 fw-medium text-grad my-2">ElectroX Flow</div>
                <div className="lead text-black">15% Energy Efficient</div>
                </div>
              </div>
              <div className="col">
                <Image height={0} width={0} style={{ width:'100%', height:'auto' }} src={`/images/products/product-evolution-5.webp`} alt={`Water Treatment`} className="Image-fluid mb-5" />
              <div style={{marginTop:'-45px', position:'relative', zIndex:'999999', background:'transparent'}}>
                <div className="lead fs-2 fw-bold text-secondary bg-light py-3 px-4 d-inline">2024</div>
                <div className="lead fs-2 fw-medium text-grad my-2">ElectroX L02</div>
                <div className="lead text-black">25% Energy Efficient</div>
                </div>
              </div>
            </div>
                                  <hr className="animated-hr"/>

        </div>


      </section>

    </>
  );
}
