import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <Head />
      <Script src="/library/jquery.min.js" />

      <header className="sticky-top main-header py-2 py-md-0 border-0 position-fixed w-100 bg-blur-white">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link href="/" className="navbar-brand header-canvas-close">
              <Image
                width={150}
                height={23}
                src="/images/indra_water_logo.webp"
                alt="INDRA Water"
                title="INDRA Water"
                priority 
                unoptimized
              />
            </Link>

            <button
              className="navbar-toggler collapsed"
              type="button"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
              <ul className="navbar-nav d-flex align-items-center text-dark">
                <li className="nav-item mx-3 header-canvas-close">
                  <Link href="/" className={`nav-link nav-line ${currentPath === '/' ? 'active' : ''}`}>Home</Link>
                </li>

                                <li className="nav-item mx-3 header-canvas-close">
                  <Link href="/industries" className={`nav-link nav-line ${currentPath === '/industries' ? 'active' : ''}`}>Industries</Link>
                </li>

                                <li className="nav-item mx-3 header-canvas-close">
                  <Link href="/products" className={`nav-link nav-line ${currentPath === '/products' ? 'active' : ''}`}>Product</Link>
                </li>

                                <li className="nav-item mx-3 header-canvas-close">
                  <Link href="/technology" className={`nav-link nav-line ${currentPath === '/technology' ? 'active' : ''}`}>Technology</Link>
                </li>

                <li className="nav-item dropdown mx-3 d-none">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="offcanvas" aria-expanded="false" data-bs-target="#servicesMenu" aria-controls="servicesMenu">
                    Explore
                  </a>
                  <ul className="dropdown-menu w-100">
                    <li><Link href="/industries" className={`dropdown-item ${currentPath === '/industries' ? 'active-dummy' : ''}`}>Industries</Link></li>
                    <li><Link href="/products" className={`dropdown-item ${currentPath === '/products' ? 'active-dummy' : ''}`}>Products</Link></li>
                    <li><Link href="/technology" className={`dropdown-item ${currentPath === '/technology' ? 'active-dummy' : ''}`}>Technology</Link></li>
                    <li><Link href="/projects" className={`dropdown-item ${currentPath === '/projects' ? 'active-dummy' : ''}`}>Projects</Link></li>
                  </ul>
                </li>
                <li className="nav-item mx-3 header-canvas-close">
                  <Link href="/about" className={`nav-link nav-line ${currentPath === '/about' ? 'active' : ''}`}>About Us</Link>
                </li>
                <li className="nav-item mx-3 header-canvas-close d-none">
                  <Link href="/blog" className={`nav-link nav-line ${currentPath === '/blog' ? 'active' : ''}`}>Insights</Link>
                </li>
                <li className="nav-item ms-3 header-canvas-close">
                  <Link href="/contact" className="nav-link">
                    <button className="btn rounded-5 header-button px-3">Save Water</button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>


      
<div
className="offcanvas offcanvas-top pt-3"
style={{
zIndex: '999',
height: '400px',
maxHeight: 'none',
background:'linear-gradient(to bottom, #e5eef0cc, #f0f0f3cc) ! important',
backdropFilter:'blur(6px)'
}}
tabIndex="-1"
id="servicesMenu"
aria-labelledby="servicesMenuLabel"
data-bs-scroll="true"
data-bs-backdrop="false"
>
<div className="offcanvas-header d-none">
   <h5 className="offcanvas-title" id="servicesMenuLabel">
   </h5>
   <button
      type="button"
      className="btn-close header-menu-canvas"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
      ></button>
</div>
<div className="offcanvas-body">
   <div className="container" style={{paddingTop:'100px'}}>
      {/* Your content here */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
              <div className="col anim-fade-down">
                  <div className="text-start" style={{marginTop: '0px'}} data-bs-dismiss="offcanvas" aria-label="Close">
                  <Link href="/products" className="text-secondary">
                    <h3 className="border-bottom border-secondary pb-3 mb-3 fs-5">Products<i className="bi bi-arrow-up-right float-end"></i></h3>
                                <p className="mt-4">Inspired by the assembly lines of the automotive industry, our standardised modules lower the deployment periods. </p>
                  </Link>
                </div>
                </div>
            <div className="col anim-fade-down">
              <div className="text-start" style={{marginTop: '0px'}}  data-bs-dismiss="offcanvas" aria-label="Close">
              <Link href="/technology" className="text-secondary">
                <h3 className="border-bottom border-secondary pb-3 mb-3 fs-5">Technology<i className="bi bi-arrow-up-right float-end"></i></h3>
                            <p className="mt-4">Redefining a centuries-old phenomenon to solve today’s ever-evolving wastewater challenges across the globe.</p>
              </Link>
              </div>
              </div>
        <div className="col anim-fade-down">
            <div className="text-start" style={{marginTop: '0px'}} data-bs-dismiss="offcanvas" aria-label="Close">
            <Link  href="/industries" className="text-secondary">
              <h3 className="border-bottom border-secondary pb-3 mb-3 fs-5">Industries<i className="bi bi-arrow-up-right float-end"></i></h3>
              <p className="mt-4">Really, can any industry work without water? Find out how we can create value in your industry.</p>
            </Link>
        </div>
      </div>
      <div className="col anim-fade-down">
        <div className="text-start"  data-bs-dismiss="offcanvas" aria-label="Close" style={{marginTop: '0px'}}>
        <Link href="/projects" className="text-secondary">
          <h3 className="border-bottom border-secondary pb-3 mb-3 fs-5">Projects<i className="bi bi-arrow-up-right float-end"></i></h3>
              <p className="mt-4">We enable you to be Water Warriors, so recover up to 99% of water, reducing harmful chemical & sludge generation.</p>
        </Link>
      </div>
</div> 
</div>
</div>
</div>
</div>




      <style jsx global>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          padding-bottom: 4px;
        }

        .nav-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: #0E3292; /* your brand color */
          transition: width 0.3s ease;
        }

        .nav-line:hover::after {
          width: 100%;
        }

        .nav-line.active::after {
          width: 100%;
        }

        .nav-line.active {
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default Header;
