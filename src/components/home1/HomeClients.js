import React from 'react';
import Image from 'next/image';

export default function HomeClients() {

  // Client data
  const clients = [
    {
     logo: '/images/clients/logo1.png',
    },
    {
     logo: '/images/clients/logo2.png',
    },
    {
     logo: '/images/clients/logo3.png',
    },
    {
     logo: '/images/clients/logo4.png',
    },
    {
     logo: '/images/clients/logo5.png',
    },
    {
     logo: '/images/clients/logo6.png',
    },
    {
     logo: '/images/clients/logo7.png',
    },
    {
     logo: '/images/clients/logo8.png',
    },
    {
     logo: '/images/clients/logo9.png',
    },
    {
     logo: '/images/clients/logo10.png',
    },
    {
     logo: '/images/clients/logo11.png',
    },
    {
     logo: '/images/clients/logo12.png',
    },
    {
     logo: '/images/clients/logo13.png',
    },
    {
     logo: '/images/clients/logo14.png',
    },
    {
     logo: '/images/clients/logo15.png',
    },
    {
     logo: '/images/clients/logo16.png',
    },
    {
     logo: '/images/clients/logo17.png',
    },
    {
     logo: '/images/clients/logo18.png',
    },
    {
     logo: '/images/clients/logo19.png',
    },
    {
     logo: '/images/clients/logo20.png',
    },
    {
     logo: '/images/clients/logo21.png',
    },
    {
     logo: '/images/clients/logo22.png',
    },
    {
     logo: '/images/clients/logo23.png',
    },
    {
     logo: '/images/clients/logo24.png',
    },
  ];

  return (
    <section className="container-fluid px-0 bg-grad-blue-gray">
      <div className="container-fluid pb-5 my-0 ">
        {/* Sticky Main Heading */}
        <div
          className="sticky-top text-center py-3"
        >
          {/* <h1 className="display-4 fw-bold">Clients and Partners</h1> */}

          <div className="row">
         <div
          className="col-12 text-center py-3 mx-auto"
               >
          <h1 className="display-1 fw-medium mx-auto" style={{maxWidth:'750px'}}>We <span className="text-grad">Work</span> With</h1>
               </div>
       </div>


        </div>
        {/* Clients Section */}
        {/* <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="position-sticky pe-md-5" style={{ top: '250px', zIndex: 1010 }}>
                <h2 className="display-2 text-grad lead fw-medium mb-3">Our Clients</h2>
                <p className="lead fs-4 fw-medium text-secondary">
                  Our valued clients drive our mission. Here&apos;s a glimpse at the businesses we empower.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                {clients.map((client, index) => (
                  <div className="col-md-4 mb-4" key={`client-${index}`}>
                    <div className="card border-0 bg-light h-100 py-5 my-5">
                                    <Image
                      src={client.logo}
                      alt={`Logo of ${client.title}`}
                      width={75}
                      height={25}
                      style={{ maxHeight: '100px', objectFit: 'contain' }}
                    />
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* Partners Section */}
        {/* <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="position-sticky pe-md-5" style={{ top: '250px', zIndex: 1010 }}>
                <h2 className="display-2 text-grad lead fw-medium mb-3">Our Partners</h2>
                <p className="lead fs-4 fw-medium text-secondary">
                  We collaborate with industry-leading partners who help us deliver excellence.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                {partners.map((partner, index) => (
                  <div className="col-md-6 mb-4" key={`partner-${index}`}>
                    <div className="card border-0 bg-light h-100 py-5 my-5">
                                    <Image
                      src={partner.logo}
                      alt={`Logo of ${partner.title}`}
                      width={75}
                      height={25}
                      style={{ maxHeight: '100px', objectFit: 'contain' }}
                        />
                   
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>


       <div className="container">
              <div className="row">
                {clients.map((client, index) => (
                  <div className="col-md-4 mb-4" key={`client-${index}`}>
                    <div className="card border-0 bg-light h-100 py-5 my-5">
                                    <Image
                      className={'mx-auto client-logo'}              
                      src={client.logo}
                      alt={`Logo of ${client.title}`}
                      width={100}
                      height={100}
                      style={{ objectFit: 'contain' }}
                        />
                    </div>
                  </div>
                ))}
              </div>
            </div>

    </section>
  );
}
