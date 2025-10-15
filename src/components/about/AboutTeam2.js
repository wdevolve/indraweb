import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";
import Link from 'next/link';

export default function AboutTeam2() {
// useAnimations();

  const teamCEO = [
    {
      n: 'Ranganath N. K.',
      d: 'Chairperson & Board Member ',
      i: '/images/board-1.jpg',
      l: 'https://in.linkedin.com/in/ranganath-n-k',
      m: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.',
    },
    {
      n: 'Amrit Om Nayak',
      d: 'Co-founder & CEO ',
      i: '/images/board-2.jpg',
      l: 'https://in.linkedin.com/in/amritomnayak',
      m: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.',
    },
    {
      n: 'Krunal Patel',
      d: 'Co-founder & COO',
      i: '/images/board-3.jpg',
      l: 'https://in.linkedin.com/in/krunalnpatel',
      m: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.',
    }
  ];

  
  const teamBoard = [
    {
      n: 'Helge Daebel',
      d: 'Board Member',
      i: '/images/board-4.jpg',
      l: 'https://ch.linkedin.com/in/helgedaebel',
      m: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.',
    },
    {
      n: 'Krishnakumar Natarajan',
      d: 'Board Member',
      i: '/images/board-5.jpg',
      l: 'https://in.linkedin.com/in/krishnakumarnatarajan',
      m: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.',
    }
  ];

  
  const teamAdvisors = [
    {
      n: 'Samir Shah',
      d: 'Board Advisor',
      i: '/images/sameer.avif',
      l: 'https://in.linkedin.com/in/samir-shah-09a76547',
      m: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.',
    },
     {
      n: 'Vivek Shukla',
      d: 'Board Advisor',
      i: '/images/vivek-shukla.png',
      l: 'https://my.linkedin.com/in/vivekshukla',
      m: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.',
    },
    {
      n: 'Dr. Gogate',
      d: 'Board Advisor',
      i: '/images/gogate.jpg',
      l: 'https://in.linkedin.com/in/parag-gogate-69446834',
      m: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.',
    }
  ];


  return (
    <>

  <section className="container-fluid px-0 mx-0 w-100 py-5 mb-0 bg-grad-blue-gray">
  <div className="container">

        <div className="row g-0 d-none">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fw-normal lead fs-1 border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Our Team</h2>
              <p className="fs-4 text-secondary">Our team is 65+ <span className="text-grad">professional specialists</span>.</p>
            </div>
          </div>



        <div className="row g-0">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fw-normal lead fs-1 border-bottom border-secondary pb-3 text-center" style={{maxWidth:'100%'}}>
                Board Members</h2>
              <p className="fs-4 text-secondary d-none">Our team is 65+ <span className="text-grad">professional specialists</span>.</p>
            </div>
          </div>

    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4 mb-5 justify-content-md-center">


     {teamCEO.map((member, index) => (
        <div className="col team" key={index}>
         <Image
  src={member.i}
  alt={member.n}
  width={0}
  height={0}
  className="img-fluid w-100 anim-fade-up"
  style={{
    marginBottom: '-350px',
    width: '100%',
    height: '350px',
    objectFit: 'cover'
  }}
/>

          <div className="bg-light w-100 rounded-3" style={{ height: '375px', paddingBottom:'230px' }}></div>
          <div className="team-text rounded-bottom-3 bg-white">
            <h3 className="lead fs-5 fw-medium text-dark">{member.n}</h3>
            <h4 className="lead fs-6 text-secondary border-bottom pb-3 mb-3">{member.d}</h4>
            <div className="team-desc d-none">{member.m}</div>
            <Link className="float-end" target="_blank" href={member.l}><i class="bi bi-linkedin mt-5 fs-3"></i></Link>
          </div>
        </div>
))}
    </div>


    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4 mb-5 justify-content-md-center">


     {teamBoard.map((member, index) => (
        <div className="col team" key={index}>
                 <Image
  src={member.i}
  alt={member.n}
  width={0}
  height={0}
  className="img-fluid w-100 anim-fade-up"
  style={{
    marginBottom: '-350px',
    width: '100%',
    height: '350px',
    objectFit: 'cover'
  }}
/>
          <div className="bg-light w-100 rounded-3" style={{ height: '375px', paddingBottom:'230px' }}></div>
          <div className="team-text rounded-bottom-3 bg-white">
            <h3 className="lead fs-5 fw-medium text-dark">{member.n}</h3>
            <h4 className="lead fs-6 text-secondary border-bottom pb-3 mb-3">{member.d}</h4>
            <div className="team-desc d-none">{member.m}</div>
            <Link className="float-end" target="_blank" href={member.l}><i class="bi bi-linkedin mt-5 fs-3"></i></Link>
          </div>
        </div>
))}


    </div>




            <div className="row g-0">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fw-normal lead fs-1 border-bottom border-secondary pb-3 text-center" style={{maxWidth:'100%'}}>
                Board Advisors</h2>
              <p className="fs-4 text-secondary d-none">Our team is 65+ <span className="text-grad">professional specialists</span>.</p>
            </div>
          </div>

    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4 mb-5 justify-content-md-center">


     {teamAdvisors.map((member, index) => (
        <div className="col team" key={index}>
          <Image
            src={member.i}
            alt={member.n}
            width={300}
            height={200}
            className="img-fluid w-100 h-auto anim-fade-up"
            style={{marginBottom:'-350px'}}
          />
          <div className="bg-light w-100 rounded-3" style={{ height: '375px', paddingBottom:'230px' }}></div>
          <div className="team-text rounded-bottom-3 bg-white">
            <h3 className="lead fs-5 fw-medium text-dark">{member.n}</h3>
            <h4 className="lead fs-6 text-secondary border-bottom pb-3 mb-3">{member.d}</h4>
            <div className="team-desc d-none">{member.m}</div>
            <Link className="float-end" target="_blank" href={member.l}><i class="bi bi-linkedin mt-5 fs-3"></i></Link>
          </div>
        </div>
))}


    </div>



 
 
  </div>

</section>


</>
);
}