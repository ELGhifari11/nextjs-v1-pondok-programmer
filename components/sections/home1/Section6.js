
export default function Section6() {
    return (
        <>

            <section id="our-working-process"  className="section-box box-our-working">
                <div className="container">
                    <div className="text-center">
                        <p className="text-22-bold mb-15">How It Works</p>
                        <h2 className="text-48-semibold neutral-1000 mb-35" >Our Working Process</h2>
                        <p className="text-xl neutral-700">
                            A clear, ethical, and outcomes-driven flow—from discovery to launch—so your product ships on time,
                            scales with confidence, and truly benefits its users.
                        </p>
                    </div>

                    <div className="row mt-65">
                        {/* 1 */}
                        <div className="col-lg-3 col-md-6 .col-sm-6">
                            <div className="card-working hover-up">
                                <div className="card-number"><span>1</span></div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">Discovery & Requirements</h3>
                                    <p className="text-md">
                                        We clarify goals, users, and constraints. Together we define scope, success metrics,
                                        and a transparent roadmap rooted in real business value.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="col-lg-3 col-md-6 pt-60 mb-30 .col-sm-6">
                            <div className="card-working hover-up">
                                <div className="card-number"><span>2</span></div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">Design & Development Sprints</h3>
                                    <p className="text-md">
                                        UI/UX, architecture, and clean code delivered in iterative sprints. Reviews, demos,
                                        and honest communication keep everyone aligned and accountable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="col-lg-3 col-md-6 .col-sm-6">
                            <div className="card-working hover-up">
                                <div className="card-number"><span>3</span></div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">Quality & User Testing</h3>
                                    <p className="text-md">
                                        Automated tests, security checks, and usability sessions ensure stability and usefulness.
                                        We fix, refine, and prepare for a smooth rollout.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="col-lg-3 col-md-6 pt-60 mb-30 .col-sm-6">
                            <div className="card-working hover-up">
                                <div className="card-number"><span>4</span></div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">Launch, Handover & Support</h3>
                                    <p className="text-md">
                                        Secure deployment, docs, and team training. We stay available for maintenance, iteration,
                                        and growth—delivering value with integrity and speed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
