import { useRouter } from 'next/router';
import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";

export default function ProdTab() {
// useAnimations();
    const router = useRouter();
  const currentPath = router.pathname;

  return (
   <>

<section className="pb-2" style={{paddingTop:'130px'}}>
        <div className="container">
          <div className="row mb-0">
            <div className="col">
              <h2 className="mb-3 fs-1 lead fw-normal border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                {currentPath === '/products' ? 'Products' : ''}
                {currentPath === '/technology' ? 'Technology' : ''}
                {currentPath === '/industries' ? 'Industries' : ''}
                {currentPath === '/projects' ? 'Projects' : ''}
                </h2>
              <p className="fs-4 text-secondary">
                {currentPath === '/products' ? 'Lorem ipsum sub-heading for products' : ''}
                {currentPath === '/technology' ? 'Lorem ipsum sub-heading for technology' : ''}
                {currentPath === '/industries' ? 'Lorem ipsum sub-heading for industries' : ''}
                {currentPath === '/projects' ? 'Lorem ipsum sub-heading for projects' : ''}
                </p>
            </div>
          </div>
          </div>


        <div className="container">
        <ul className="nav nav-tabs mt-2 row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3 border-0 d-none" id="industriesTab" role="tablist">
            <li className="col nav-item anim-fade-left" role="presentation">
            <Link href="/products">
                <button
                    className={`tab-btn w-100 rounded-2 border border-dark text-start lead ${currentPath === '/products' ? 'active' : ''}`}
                    id="products-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#products"
                    type="button"
                    role="tab"
                    aria-controls="products"
                    aria-selected="true"
                >
                    Products
                </button>
            </Link>
            </li>
            
            <li className="col nav-item anim-zoom" role="presentation">
            <Link href="/technology">
                <button
                    className={`tab-btn w-100 rounded-2 border border-dark text-start lead ${currentPath === '/technology' ? 'active' : ''}`}
                    id="technology-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#technology"
                    type="button"
                    role="tab"
                    aria-controls="technology"
                    aria-selected="false"
                >
                    Technology
                </button>
            </Link>
            </li>
            <li className="col nav-item anim-zoom" role="presentation">
            <Link href="/industries">
                <button
                    className={`tab-btn w-100 rounded-2 border border-dark text-start lead ${currentPath === '/industries' ? 'active' : ''}`}
                    id="industries-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#industries"
                    type="button"
                    role="tab"
                    aria-controls="industries"
                    aria-selected="true"
                >
                    Industries
                </button>
            </Link>
            </li>
            
            <li className="col nav-item anim-fade-right" role="presentation">
            <Link href="/projects">
                <button
                    className={`tab-btn w-100 rounded-2 border border-dark text-start lead ${currentPath === '/projects' ? 'active' : ''}`}
                    id="projects-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#projects"
                    type="button"
                    role="tab"
                    aria-controls="projects"
                    aria-selected="false"
                >
                    Projects
                </button>
            </Link>
            </li>
        </ul>
        </div>


          
</section>
    </>
  )
}
