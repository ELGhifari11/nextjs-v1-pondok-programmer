
import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'

export default function Section7() {
    return (
        <>

            <section className="section-box box-lead">
                <div className="container">
                    <div className="box-lead-inner">
                        <div className="row">
                            {/* Left copy */}
                            <div className="col-lg-6 mb-30">
                                <Link className="btn btn-border-brand-4 text-linear-3" href="/contact">
                                    Start Your Project
                                </Link>

                                <h3 className="heading-2 neutral-0 mt-20 mb-20">
                                    Bring your idea to market with an ethical, end-to-end team
                                </h3>

                                <p className="text-lg neutral-200 mb-35">
                                    Pondok Programmer is an IT boarding-school community that grows professional engineers with noble character.
                                    We partner with founders and SMEs to plan, design, and build real products—delivered with integrity,
                                    clear communication, and measurable impact.
                                </p>

                                <div className="card-lead-list">
                                    <div className="item-lead">
                                        <div className="card-lead">
                                            <div className="card-image">
                                                <img src="/assets/imgs/page/homepage3/discover.svg" alt="Projects" />
                                            </div>
                                            <div className="card-info">
                                                <h3 className="text-22-bold">100+</h3>
                                                <p className="text-md neutral-200">Client Partnerships</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item-lead">
                                        <div className="card-lead">
                                            <div className="card-image">
                                                <img src="/assets/imgs/page/homepage3/discover.svg" alt="Alumni & Mentors" />
                                            </div>
                                            <div className="card-info">
                                                <h3 className="text-22-bold">500+</h3>
                                                <p className="text-md neutral-200">Experienced Engineers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-lg neutral-200">
                                    From discovery to launch, our santri-engineers deliver UI/UX, web & mobile, and DevOps with
                                    transparent roadmaps and reliable handover. Let’s map your needs and ship the first version—then iterate together.
                                </p>
                            </div>

                            {/* Right visual */}
                            <div className="col-lg-6 mb-30 text-center text-lg-end">
                                <div className="box-border-linear-3 linear-3">
                                    <div className="box-border-linear-3-inner">
                                        <img src="/assets/imgs/page/homepage3/img-lead.png" alt="Project & Product Development — Pondok Programmer" />
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
