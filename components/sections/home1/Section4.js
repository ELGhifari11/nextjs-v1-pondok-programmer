
import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'

export default function Section4() {
    return (
        <>
            <section className="section-box wow animate__animated animate__fadeIn box-our-features-4">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left copy */}
                        <div className="col-lg-6 mb-40">
                            <div className="internet-icon"><span /> Our Community</div>

                            <h2 className="heading-2 mb-20">
                                Pondok Programmer — Ethical talent for your system.
                            </h2>

                            <p className="text-lg neutral-700">
                                We are an IT boarding-school community that shapes santri into professional engineers with noble character.
                                Since 2015, we’ve fused character building, practical industry curriculum, and real projects so knowledge
                                truly benefits people, businesses, and society.
                            </p>

                            <div className="row mt-50">
                                {/* 1. Boarding-School Formation */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image">
                                            <img src="/assets/imgs/page/homepage3/marketing.svg" alt="Boarding-School Formation" />
                                        </div>
                                        <div className="card-info">
                                            <Link href="#"><h3 className="text-22-bold">Boarding-School Formation</h3></Link>
                                            <p className="text-md neutral-700">
                                                Muslim Character, discipline, integrity—paired with modern tech learning.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Industry Curriculum & Mentoring */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image">
                                            <img src="/assets/imgs/page/homepage3/digital.svg" alt="Industry Curriculum & Mentoring" />
                                        </div>
                                        <div className="card-info">
                                            <Link href="#"><h3 className="text-22-bold">Industry Curriculum & Mentoring</h3></Link>
                                            <p className="text-md neutral-700">
                                                Guided learning, mentoring, and teamwork from basics to launch.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Real Projects & Portfolio */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image">
                                            <img src="/assets/imgs/page/homepage3/product.svg" alt="Real Projects" />
                                        </div>
                                        <div className="card-info">
                                            <Link href="#"><h3 className="text-22-bold">Real Projects & Portfolio</h3></Link>
                                            <p className="text-md neutral-700">
                                                Build real products to sharpen skills and create a strong portfolio—ready for jobs or launching a startup.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Client Project & Product Development */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image">
                                            <img src="/assets/imgs/page/homepage3/social.svg" alt="Client Services" />
                                        </div>
                                        <div className="card-info">
                                            <Link href="#"><h3 className="text-22-bold">Project & Product Development for Clients</h3></Link>
                                            <p className="text-md neutral-700">
                                                Full-stack web & mobile, UI/UX, DevOps—built on time, built right.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-buttons-feature-4">
                                <Link className="btn btn-black" style={{ borderRadius: 7 }} href="/contact">
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

                        {/* Right visual */}
                        <div className="col-lg-6 mb-40">
                            <div className="image-feature-2">
                                <img src="/assets/imgs/page/homepage3/img-feature.png" alt="Pondok Programmer — Community" />
                                <div className="card-number-feature card-number-bottom">
                                    <h4><CounterUp count={500} />+</h4>
                                    <p className="text-sm">Alumni</p>
                                </div>
                                <div className="card-number-feature card-number-top">
                                    <h4><CounterUp count={100} />+</h4>
                                    <p className="text-sm">Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
