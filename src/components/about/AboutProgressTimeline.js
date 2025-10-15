import { useEffect, useRef } from 'react';

const progressData = [
  { year: "2018",title:"Progress one", description: `<ul class='list-group list-group-flush bg-transparent'>
  <li class='list-group-item bg-transparent'>Indra became the first joint incubation between RIIDL Somaiya and SINE IIT Bombay</li>
  <li class='list-group-item bg-transparent'>Revolutionizing water treatment; received two patents</li>
  <li class='list-group-item bg-transparent'>First treatment plant deployed at Godavari Bio-Refineries in Nashik</li>
</ul>`},
  { year: "2019",title:"Progress one", description: `<ul class='list-group list-group-flush bg-transparent'>
  <li class='list-group-item bg-transparent'>Winner of Urban Water Challenge by ImagineH20, 11th hour racing and Bluewater group at World Water Week in Stockholm among 226 companies globally across 38 countries</li>
  <li class='list-group-item bg-transparent'>Winner of the Urban Works Innovation Challenge by Columbia University & RMZ Corp.</li>
</ul>`},
  { year: "2020",title:"Progress one", description: `<ul class='list-group list-group-flush bg-transparent'>
  <li class='list-group-item bg-transparent'>First successful freshwater body clean-up pilot at Kudikunta Lake in Hyderabad with support from Telangana Water Resource Development Corporation and GHMC</li>
  <li class='list-group-item bg-transparent'>Moved into our very own 2880 sq.ft manufacturing space in Thane, Maharashtra, India</li>
  <li class='list-group-item bg-transparent'>Winner of the prestigious Millenium Alliance Award</li>
</ul>`},
  { year: "2022",title:"Progress one", description: `<ul class='list-group list-group-flush bg-transparent'>
  <li class='list-group-item bg-transparent'>Signed an MOU with Aditya Birla Innovation Fund to solve water challenges in ABG</li>
  <li class='list-group-item bg-transparent'>Winner of “Global Freshwater Challenge’ by Uplink (World Economic Forum) & HCL Tech</li>
</ul>`},
  { year: "2023",title:"Progress one", description: `<ul class='list-group list-group-flush bg-transparent'>
  <li class='list-group-item bg-transparent'>Deployed assets with capacity to treat up to 4 MLD of wastewater in India and South-east Asia</li>
  <li class='list-group-item bg-transparent'>Indra is now a 30 + member team working towards solving the global water crisis</li>
  <li class='list-group-item bg-transparent'>Expanded into a larger 8800 sq.ft manufacturing space in Thane, Maharashtra, India to double our manufacturing capacity</li>
</ul>`},
  { year: "2024",title:"Progress one", description: `<ul class='list-group list-group-flush bg-transparent'>
  <li class='list-group-item bg-transparent'>Raised $4 million Series A round from Emerald Technology Ventures, Mela Ventures, Peak Sustainability Ventures, Climate Angels and others</li>
  <li class='list-group-item bg-transparent'>Engaged for deploying treatment assets for additional 4.5 MLD of wastewater in India, Egypt and Mexico</li>
  <li class='list-group-item bg-transparent'>Tripled manufacturing capacity to deploy up to 10 MLD of primary treatment assets every quarter</li>
</ul>`},
  { year: "2025",title:"Progress one", description: `<ul class='list-group list-group-flush bg-transparent'>
  <li class='list-group-item bg-transparent'>More than doubled manufacturing capacity to deploy up to 6 MLD of primary treatment assets every quarter</li>
  <li class='list-group-item bg-transparent'>Recognized in the prestigious Cleantech top 100 list globally and declared as the Cleantech Asia Pacific Company of the year</li>
  <li class='list-group-item bg-transparent'>Awarded as the Forbes Climate Warrior and Marico Innovation Icon of 2025</li>
  <li class='list-group-item bg-transparent'>Winner of the Atma Nirbhar Bharat Award</li>
  <li class='list-group-item bg-transparent'>Treated over 4 billion litres of water, reduced 12.5k tons of sludge, avoided 10.5k tons of chemicals and positively impacted over 500k people</li>
  <li class='list-group-item bg-transparent'>Over 20 wastewater treatment plants deployed with engagements spanning 50+ MLD treatment capacity</li>
</ul>`},
];

export default function ProgressTimeline() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const entryRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
  const handleScroll = () => {
    const container = containerRef.current;
    const line = lineRef.current;

    if (!container || !line) return;

const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const containerHeight = container.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const startOffset = windowHeight * 0.5; // Start when 20% from top
    const maxVisibleHeight = containerHeight * 1; // max 85% line fill

    // Calculate how far user has scrolled into the container
    const scrollProgress = (scrollY + startOffset - containerTop) / (containerHeight - windowHeight * 0.3);

    // Clamp between 0 and 1
    const progress = Math.max(0, Math.min(scrollProgress, 1));

    // Apply progress to line height
    const lineHeight = maxVisibleHeight * progress;
    line.style.height = `${lineHeight}px`;
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);



  return (
<>
<section className="bg-grad-gray-blue">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 pb-5 desk-padding-right-300">
                 <div className="row g-0 sticky-top" style={{top:'100px',zIndex:'9'}}>
                    <div className="col">
                      <h2 className="mb-3 fw-normal lead fs-1 border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                        Our Journey</h2>
                      <p className="fs-4 text-secondary">Through the lens of a co-founder</p>
                    </div>
                  </div>
            </div>
            <div className="col-md-6 ps-md-0 pb-5">
    
                <div className="timeline-container" ref={containerRef}>    
                <div className="timeline-line-wrapper">
                <div className="timeline-line-track"></div>
                <div className="timeline-line-progress" ref={lineRef}></div>
    
                {/* {progressData.map((_, index) => (
                    <div
                    key={`dot-${index}`}
                    className="timeline-dot"
                    ref={el => (dotRefs.current[index] = el)}
                    ></div>
                ))} */}
    
                </div>
    
    
              <div className="timeline-entries">
                {progressData.map((item, index) => (
                    <div className="timeline-entry d-flex position-relative" key={index} ref={el => (entryRefs.current[index] = el)}>
                        
                        {/* Dot and line column */}
                        <div className="timeline-marker">
                        <span className="timeline-dot"></span>
                        </div>

                        {/* Content column */}
                        <div className="row anim-slide-right"> <div className="col-md-2"><span style={{marginLeft:'-150px'}} className="text-grad lead fs-3 fw-medium">{item.year}</span></div> 
                            <div className="col-md-10"> 
                              <div className="border-grad p-1 rounded-3"> 
                                <div className="timeline-description bg-light rounded-3 py-3 px-4">
                                    {/* <h3 className="fs-4 fw-medium d-block text-dark border-bottom border-secondary pb-3 mb-3 d-none">{item.title}</h3>  */}
                                    <div
                                      className="lead fs-5"
                                      dangerouslySetInnerHTML={{ __html: item.description }}
                                    ></div>


                                </div>
                              </div>    
                        </div>
                        </div> 
                    </div>
                    ))}

              </div>
            </div>
    
            </div>
        </div>
    </div>
</section>

    </>
  );
}
