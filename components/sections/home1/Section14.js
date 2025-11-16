'use client'
import Link from 'next/link'
import { useState } from 'react'
import LogoTicker from '@/components/elements/LogoTicker'


export default function Section14() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <section id="faq" className="section-box box-faqs-4">
                <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
                    <LogoTicker />
                </div>

                <div style={{ marginTop: '70px' }} className="container">
                    <div className="box-faqs-inner">
                        <div className="text-center">
                            <Link className="btn btn-brand-4-sm" href="#faq">Frequently Asked Questions</Link>
                            <h2 className="heading-2 mb-20 mt-20">Do you have any questions?</h2>
                        </div>

                        <div className="box-faqs-inner-4">
                            <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">

                                {/* 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq-pp-1" onClick={() => handleClick(1)}>
                                        <button
                                            className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"}
                                            type="button" data-bs-toggle="collapse" data-bs-target="#faq-pp-1-body"
                                            aria-expanded={isActive.key == 1} aria-controls="faq-pp-1-body">
                                            What is Pondok Programmer and how does it relate to Pondok IT and Rumah IT?
                                        </button>
                                    </h2>
                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                        id="faq-pp-1-body" aria-labelledby="faq-pp-1" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            Pondok Programmer is a pondok-based IT community in Bantul, Yogyakarta that develops
                                            professional engineers with noble character (founded around 2015). Pondok IT is our
                                            non-formal boarding-school umbrella that provides Islamic character formation and
                                            tech skills, and Rumah IT is our software house/business unit serving client projects.
                                            Together, they form one ecosystem: learn & grow at Pondok IT/Pondok Programmer, and
                                            build real products with Rumah IT / Pondok Programmer teams.
                                        </div>
                                    </div>
                                </div>

                                {/* 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq-pp-2" onClick={() => handleClick(2)}>
                                        <button
                                            className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"}
                                            type="button" data-bs-toggle="collapse" data-bs-target="#faq-pp-2-body"
                                            aria-expanded={isActive.key == 2} aria-controls="faq-pp-2-body">
                                            Do you offer scholarships or free education?
                                        </button>
                                    </h2>
                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                        id="faq-pp-2-body" aria-labelledby="faq-pp-2" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            Yes. Pondok IT runs scholarship/free pathways for eligible students (santri) with a
                                            boarding-school environment, professional mentoring, and character education. Periodic
                                            intakes are announced via the official registration site and social channels.
                                        </div>
                                    </div>
                                </div>

                                {/* 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq-pp-3" onClick={() => handleClick(3)}>
                                        <button
                                            className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"}
                                            type="button" data-bs-toggle="collapse" data-bs-target="#faq-pp-3-body"
                                            aria-expanded={isActive.key == 3} aria-controls="faq-pp-3-body">
                                            How do I apply to become a santri? Are there special tracks?
                                        </button>
                                    </h2>
                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                        id="faq-pp-3-body" aria-labelledby="faq-pp-3" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            Applications open through Pondok IT’s registration portal. We also have a “Jalur
                                            Utusan” track: candidates are recommended/funded by a company, foundation, or donor,
                                            and after graduation are expected to contribute back to their region or sponsor.
                                        </div>
                                    </div>
                                </div>

                                {/* 4 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq-pp-4" onClick={() => handleClick(4)}>
                                        <button
                                            className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"}
                                            type="button" data-bs-toggle="collapse" data-bs-target="#faq-pp-4-body"
                                            aria-expanded={isActive.key == 4} aria-controls="faq-pp-4-body">
                                            Where are you located and what programs are available?
                                        </button>
                                    </h2>
                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                        id="faq-pp-4-body" aria-labelledby="faq-pp-4" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            Our ecosystem is centered in Bantul, Yogyakarta (Kretek / Tirtohargo area). Programs
                                            typically include software development (full stack), multimedia/design, and digital
                                            business/marketing—delivered with boarding-school discipline and Islamic values.
                                        </div>
                                    </div>
                                </div>

                                {/* 5 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq-pp-5" onClick={() => handleClick(5)}>
                                        <button
                                            className={isActive.key == 5 ? "accordion-button " : "accordion-button collapsed"}
                                            type="button" data-bs-toggle="collapse" data-bs-target="#faq-pp-5-body"
                                            aria-expanded={isActive.key == 5} aria-controls="faq-pp-5-body">
                                            What services do you provide for companies/startups?
                                        </button>
                                    </h2>
                                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                        id="faq-pp-5-body" aria-labelledby="faq-pp-5" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            We deliver end-to-end software services—web/mobile apps, UI/UX, DevOps, and system
                                            development—through Pondok Programmer and Rumah IT. Engagements include project-based
                                            builds and remote dedicated teams, with ethical, accountable delivery.
                                        </div>
                                    </div>
                                </div>

                                {/* 6 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faq-pp-6" onClick={() => handleClick(6)}>
                                        <button
                                            className={isActive.key == 6 ? "accordion-button " : "accordion-button collapsed"}
                                            type="button" data-bs-toggle="collapse" data-bs-target="#faq-pp-6-body"
                                            aria-expanded={isActive.key == 6} aria-controls="faq-pp-6-body">
                                            Can my company partner with you to sponsor trainees or hire talent?
                                        </button>
                                    </h2>
                                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                                        id="faq-pp-6-body" aria-labelledby="faq-pp-6" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            Absolutely. Through Pondok IT’s scholarship paths and “Jalur Utusan”, organizations
                                            can sponsor students and later hire them. For immediate needs, Rumah IT / Pondok
                                            Programmer can provide vetted remote engineers or complete product squads.
                                        </div>
                                    </div>
                                </div>

                            </div>{/* /.accordion */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
