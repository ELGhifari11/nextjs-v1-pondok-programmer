
import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'

export default function Section4() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-our-features-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-40">
                            <div className="internet-icon"><span /> Our Community</div>

                            <h2 className="heading-2 mb-20">
                                Pondok Programmer — Your partner in building ethical talent & startups.
                            </h2>

                            <p className="text-lg neutral-700">
                                Pondok Programmer is a community & IT pesantren that nurtures students into
                                professional engineers with noble character. Since 2015 we have combined character building,
                                practical curriculum, and real-world projects so knowledge benefits the community.
                            </p>

                            <div className="row mt-50">
                                {/* 1. Pembinaan Berbasis Pesantren */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image">
                                            <img src="/assets/imgs/page/homepage3/marketing.svg" alt="Pembinaan Pesantren" />
                                        </div>
                                        <div className="card-info">
                                            <Link href="#"><h3 className="text-22-bold">Boarding-School Based Guidance</h3></Link>
                                            <p className="text-md neutral-700">
                                                Morality, discipline, and manners form the foundation—aligned with learning modern technology.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Kurikulum & Mentoring Industri */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image">
                                            <img src="/assets/imgs/page/homepage3/digital.svg" alt="Kurikulum & Mentoring" />
                                        </div>
                                        <div className="card-info">
                                            <Link href="#"><h3 className="text-22-bold">Industry Curriculum & Mentoring</h3></Link>
                                            <p className="text-md neutral-700">
                                                Structured learning, intensive mentoring, and a collaborative culture—from basics to production-ready.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Project Nyata & Portfolio */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image">
                                            <img src="/assets/imgs/page/homepage3/product.svg" alt="Project Nyata" />
                                        </div>
                                        <div className="card-info">
                                            <Link href="#"><h3 className="text-22-bold">Real Projects & Portfolio</h3></Link>
                                            <p className="text-md neutral-700">
                                                Build real-world products to sharpen skills and create a strong portfolio—ready for employment or launching a startup.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Layanan Software untuk Startup/SME */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image">
                                            <img src="/assets/imgs/page/homepage3/social.svg" alt="Layanan Software" />
                                        </div>
                                        <div className="card-info">
                                            <Link href="#"><h3 className="text-22-bold">Software Services for Startups/SMEs</h3></Link>
                                            <p className="text-md neutral-700">
                                                Our engineering team helps build web/mobile apps, UI/UX, and DevOps for your business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-buttons-feature-4">
                                <Link className="btn btn-black" href="/contact">
                                    Get a Proposal
                                    <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="currentColor" />
                                    </svg>
                                </Link>
                                <Link className="btn btn-learmore-2" href="/about">
                                    <span>
                                        <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_24_999)">
                                                <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                            </g>
                                            <defs><clipPath id="clip0_24_999"><rect width={13} height={13} fill="white" /></clipPath></defs>
                                        </svg>
                                    </span>
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-40">
                            <div className="image-feature-2"><img src="/assets/imgs/page/homepage3/img-feature.png" alt="Nivia" />
                                <div className="card-number-feature card-number-bottom">
                                    <h4><CounterUp count={500} />+</h4>
                                    <p className="text-sm">Alumnus</p>
                                </div>
                                <div className="card-number-feature card-number-top">
                                    <h4><CounterUp count={100} />+</h4>
                                    <p className="text-sm">Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}
