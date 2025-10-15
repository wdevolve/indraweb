import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function TechBenchmark() {  
  // useAnimations();
  return (
    <section
      className="py-5">
      <div className="container">

        <div className="row mb-0">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 lead fw-normal border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                <span className="text-grad">Benchmarking</span> Water Treatment</h2>
              <p className="fs-4 text-secondary">Traditional treatment systems were built for a different era. ElectroX is engineered for today’s water challenges, combining completeness, compactness, and consistency in one modular system.</p>
            </div>
          </div>


           <div className="row mb-0">
            <div className="col anim-fade-left">
              <h3 className="mb-3 fs-2 lead fw-normal mt-4 pb-3" style={{maxWidth:'100%'}}>Where ElectroX Leads</h3>
            </div>
          </div>




  <div className="table-responsive">
    <table class="table table-bordered text-center bg-transparent mb-5">
    <thead>
      <tr>
        <th scope="col">Criteria</th>
        <th scope="col" className="table-success">INDRA</th>
        <th colspan="4"scope="col">Traditional</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Treatment / Pollutants</th>
        <td className="table-success">ElectroX</td>
        <td>Storm water bassins / tannks</td>
        <td>Mechanical filtration</td>
        <td>Bio-remediation</td>
        <td>Chemical treatment</td>
      </tr>
      <tr>
        <th scope="row">Suspended Solids</th>
        <td className="table-success">YES</td>
        <td>SOME</td>
        <td>YES</td>
        <td>SOME</td>
        <td>SOME</td>
      </tr>
      <tr>
        <th scope="row">O<sub>2</sub> Demanding Substances</th>
        <td className="table-success">YES</td>
        <td>SOME</td>
        <td>SOME</td>
        <td>SOME</td>
        <td>NO</td>
      </tr>
          <tr>
        <th scope="row">Nutrients</th>
        <td className="table-success">YES</td>
        <td>NO</td>
        <td>NO</td>
        <td>YES</td>
        <td>SOME</td>
      </tr>
      <tr>
        <th scope="row">Viral / Bacterial Pathogens</th>
        <td className="table-success">YES</td>
        <td>NO</td>
        <td>NO</td>
        <td>SOME</td>
        <td>YES</td>
      </tr>
              <tr>
        <th scope="row">Petroleum</th>
        <td className="table-success">YES</td>
        <td>SOME</td>
        <td>YES</td>
        <td>YES</td>
        <td>YES</td>
      </tr>
              <tr>
        <th scope="row">Heavy Metals</th>
        <td className="table-success">YES</td>
        <td>NO</td>
        <td>NO</td>
        <td>YES</td>
        <td>YES</td>
      </tr>
              <tr>
        <th scope="row">pH</th>
        <td className="table-success">YES</td>
        <td>NO</td>
        <td>NO</td>
        <td>NO</td>
        <td>SOME</td>
      </tr>
              <tr>
        <th scope="row">Dissolved O<sub>2</sub></th>
        <td className="table-success">YES</td>
        <td>NO</td>
        <td>NO</td>
        <td>NO</td>
        <td>NO</td>
      </tr>
    </tbody>
    </table>
  </div>


        <div className="row mb-0">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 lead fw-normal border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                <span className="text-grad">ElectroX raises</span> the bar of wastewater treatment</h2>
              <p className="fs-4 text-secondary">Technology asemnt for sewage treatment.</p>
            </div>
          </div>





  <div className="table-responsive">
    <table class="table table-bordered bg-transparent mb-5">
    <thead>
      <tr>
        <th scope="col">Criteria</th>
        <th scope="col">ElectroX</th>
        <th scope="col">ASP</th>
        <th scope="col">MBBR</th>
        <th scope="col">SBR</th>
        <th scope="col">MBR</th>
        <th scope="col">UASB+ASP</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Quality of treated effluent</th>
        <td className="bg-very-high"></td>
        <td className="bg-medium"></td>
        <td className="bg-medium"></td>
        <td className="bg-high"></td>
        <td className="bg-very-high"></td>
        <td className="bg-medium"></td>
      </tr>
      <tr>
        <th scope="row">Neutrient removal lpotential</th>
        <td className="bg-high"></td>
        <td className="bg-low"></td>
        <td className="bg-low"></td>
        <td className="bg-high"></td>
        <td className="bg-medium"></td>
        <td className="bg-low"></td>
      </tr>
          <tr>
        <th scope="row">Low land requirement potential</th>
        <td className="bg-very-high"></td>
        <td className="bg-medium"></td>
        <td className="bg-high"></td>
        <td className="bg-high"></td>
        <td className="bg-high"></td>
        <td className="bg-low"></td>
      </tr>
      <tr>
        <th scope="row">Low capital cost potential</th>
        <td className="bg-very-high"></td>
        <td className="bg-high"></td>
        <td className="bg-medium"></td>
        <td className="bg-medium"></td>
        <td className="bg-low"></td>
        <td className="bg-high"></td>
      </tr>
              <tr>
        <th scope="row">Low power requirement potential</th>
        <td className="bg-high"></td>
        <td className="bg-medium"></td>
        <td className="bg-medium"></td>
        <td className="bg-high"></td>
        <td className="bg-low"></td>
        <td className="bg-very-high"></td>
      </tr>
              <tr>
        <th scope="row">Electricity generation potential</th>
        <td className="bg-very-high"></td>
        <td className="bg-low"></td>
        <td className="bg-low"></td>
        <td className="bg-low"></td>
        <td className="bg-low"></td>
        <td className="bg-medium"></td>
      </tr>
              <tr>
        <th scope="row">Low O&M skill potential</th>
        <td className="bg-very-high"></td>
        <td className="bg-high"></td>
        <td className="bg-high"></td>
        <td className="bg-medium"></td>
        <td className="bg-low"></td>
        <td className="bg-high"></td>
      </tr>
              <tr className="border-0">
        <th className="border-0" scope="row"></th>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td className="border-0"></td>
        <td className="border-0"></td>
      </tr>
                  <tr className="border-0">
        <th className="border-0" scope="row"></th>
        <td className="border-0"></td>
              <td className="border-0"></td>
        <td className="border-0 bg-low"></td>
        <td className="border-0">Low</td>
        <td className="border-0 bg-medium"></td>
        <td className="border-0">Medium</td>
      </tr>
                  <tr className="border-0">
        <th className="border-0" scope="row"></th>
        <td className="border-0"></td>
              <td className="border-0"></td>   
    <td className="border-0 bg-high"></td>
        <td className="border-0">High</td>
        <td className="border-0 bg-very-high"></td>
        <td className="border-0">Very High</td>
      </tr>
    </tbody>
    </table>
  </div>



      </div>
    </section>
  );
}