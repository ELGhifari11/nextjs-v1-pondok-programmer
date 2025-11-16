
import Link from 'next/link'

export default function Section5() {
    return (
        <>

            <section id="project-product" className="section-box box-companion">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 mb-30">
                            <h2 className="heading-1 neutral-0">
                                Let’s Double PRO Guyss! <br /> With Us Handle Software Base On <span className="text-bg-brand-4 neutral-1000">PROJECT</span> + <span className="text-bg-brand-4 neutral-1000">PRODUCT</span>                       </h2>
                        </div>
                        <div className="col-lg-5 mb-30">
                            <p className="text-xl neutral-700">
                                We build the systems and digital products you need—honest, professional, and helpful from idea to launch.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-130">
                        <div className="col-lg-6">
                            <img alt="Pondok Programmer — Project & Product Development" src="/assets/imgs/page/homepage3/img-companion6.png" />
                        </div>

                        <div className="col-lg-6">
                            <h2 className="heading-2 neutral-0 mb-20">
                                From business needs to a ready-to-use systems
                            </h2>
                            <p className="text-lg neutral-200">
                                Our santri-engineer team applies industry best practices, tidy collaboration, and trustworthy communication. Our focus is simple: design, build, and release solutions that are stable, measurable, and easy to maintain.
                            </p>
                            <div className="box-list-feature mt-55">
                                <div className="card-feature-2 card-feature-brand-4">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/find.svg" alt="Discovery" /></div>
                                    <div className="card-info">
                                        <a href="#">
                                            <h3 className="text-22-bold">Clear Product Discovery & Roadmap</h3>
                                        </a>
                                        <p className="text-md neutral-200">
                                            Workshops, research, and a clear roadmap—every step is data-driven.
                                        </p>
                                    </div>
                                </div>

                                <div className="card-feature-2 card-feature-brand-4">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/discover.svg" alt="Build" /></div>
                                    <div className="card-info">
                                        <a href="#">
                                            <h3 className="text-22-bold">Design & Development end-to-end</h3>
                                        </a>
                                        <p className="text-md neutral-200">
                                            Design to code, web & mobile. Clean, tested, scalable.
                                        </p>
                                    </div>
                                </div>

                                <div className="card-feature-2 card-feature-brand-4">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/keep.svg" alt="Care" /></div>
                                    <div className="card-info">
                                        <a href="#">
                                            <h3 className="text-22-bold">Launch, Maintenance, & Growth</h3>
                                        </a>
                                        <p className="text-md neutral-200">
                                            Secure deployment, monitoring, fixes, and updates. We keep your product valuable.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
