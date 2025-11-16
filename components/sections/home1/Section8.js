'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Section8() {
    const [activeIndex, setActiveIndex] = useState( 1)
    const handleOnClick = (index) => {
            setActiveIndex(index)
    }
    return (
        <>

            <section id="services" className="section-box box-preparing">
                <div className="box-preparing-inner">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading-2 mb-20">
                                From Idea to Impact,<br className="d-none d-lg-block" />
                                We Build with Character & Craft
                            </h2>
                            <p className="text-lg">
                                Pondok Programmer delivers ethical, end-to-end product development—clear process, clean code,
                                and tangible value for your users and business.
                            </p>

                            <div className="box-button-preparing">
                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                    <li onClick={() => handleOnClick(1)}>
                                        <a className={activeIndex === 1 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"}
                                            data-bs-toggle="tab" role="tab" aria-controls="tab-1" aria-selected={activeIndex === 1}>
                                            Simple Website
                                        </a>
                                    </li>
                                    <li onClick={() => handleOnClick(2)}>
                                        <a className={activeIndex === 2 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"}
                                            data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected={activeIndex === 2}>
                                            Mobile Apps
                                        </a>
                                    </li>
                                    <li onClick={() => handleOnClick(3)}>
                                        <a className={activeIndex === 3 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"}
                                            data-bs-toggle="tab" role="tab" aria-controls="tab-3" aria-selected={activeIndex === 3}>
                                            Develop System
                                        </a>
                                    </li>
                                    <li onClick={() => handleOnClick(4)}>
                                        <a className={activeIndex === 4 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"}
                                            data-bs-toggle="tab" role="tab" aria-controls="tab-4" aria-selected={activeIndex === 4}>
                                            UI/UX
                                        </a>
                                    </li>
                                    <li onClick={() => handleOnClick(5)}>
                                        <a className={activeIndex === 5 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"}
                                            data-bs-toggle="tab" role="tab" aria-controls="tab-5" aria-selected={activeIndex === 5}>
                                            Outsourcing — Remote
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="block-group-preparing">
                            <div className="tab-content">
                                {/* 1. Simple Website */}
                                <div className={activeIndex == 1  ? "tab-pane fade show active" : "tab-pane fade"} id="tab-1">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> What You Get</div>
                                            <h2 className="heading-2 mb-20">Launch fast. Look professional. Be trustworthy.</h2>
                                            <p className="text-lg neutral-700">
                                                Company profile, landing page, or microsite—built fast, clean, and easy to manage.
                                                Our student-engineers ensure a polished look and trustworthy messaging.
                                            </p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Landing page (React.js/Vue.js)</li>
                                                    <li>Company profile (Next.js/SSR)</li>
                                                    <li>CMS (Headless/WordPress)</li>
                                                    <li>SEO For performance & accessibility</li>
                                                    <li>Form leads & WhatsApp integration</li>
                                                    <li>Domain, hosting, analytics, & training</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Mobile Apps */}
                                <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-2">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-2" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> What You Get</div>
                                            <h2 className="heading-2 mb-20">Cross-platform apps, built with care</h2>
                                            <p className="text-lg neutral-700">
                                                From MVP to scale-up: modular architecture, consistent UI, and secure data practices.
                                            </p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>React Native / Flutter cross-platform</li>
                                                    <li>Offline-first, push notifications, deep link</li>
                                                    <li>Secure auth, API integration, analytics</li>
                                                    <li>CI/CD, internal testing, store submission</li>
                                                    <li>Post-launch monitoring & iteration plan</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Develop System */}
                                <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-3">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-3" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> What You Get</div>
                                            <h2 className="heading-2 mb-20">Custom systems for real operations</h2>
                                            <p className="text-lg neutral-700">
                                                We build internal systems that unify your business processes—measurable, secure, and fully documented.
                                            </p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>ERP / CRM / Inventory</li>
                                                    <li>Workflow automation</li>
                                                    <li>Role-based access</li>
                                                    <li>Audit logs</li>
                                                    <li>Compliance-ready</li>
                                                    <li>Payment integrations</li>
                                                    <li>Logistics & BI hooks</li>
                                                    <li>REST / GraphQL APIs</li>
                                                    <li>Integrations with third-party services</li>
                                                    <li>Event queues</li>
                                                    <li>Docs & training</li>
                                                    <li>Ownership handover</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. UI/UX */}
                                <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-4">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-4" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> What You Get</div>
                                            <h2 className="heading-2 mb-20">Design that respects users</h2>
                                            <p className="text-lg neutral-700">
                                                Our principle: useful and honest. Design serves user needs while meeting business goals.
                                            </p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Research light: personas, JTBD, & user flows</li>
                                                    <li>Wireframes → hi-fi screens & prototypes</li>
                                                    <li>Design system & tokens for dev handoff</li>
                                                    <li>Usability testing & accessibility checks</li>
                                                    <li>Empty-state, error, & microcopy guidelines</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 5. Outsourcing — Remote */}
                                <div className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-5">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-5" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> What You Get</div>
                                            <h2 className="heading-2 mb-20">Dedicated remote team you can trust</h2>
                                            <p className="text-lg neutral-700">
                                                Disciplined, communicative talent ready to strengthen your team—flexible with your process and time zone.
                                            </p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Engagement models</li>
                                                    <li>Weekly demos</li>
                                                    <li>SCRUM Master</li>
                                                    <li>Time & Materials</li>
                                                    <li>Dedicated Squad</li>
                                                    <li>Daily standups</li>
                                                    <li>Secure repos</li>
                                                    <li>Good Character</li>
                                                    <li>Transparent boards</li>
                                                    <li>Staff Augmentation</li>
                                                    <li>Clear code ownership</li>
                                                    <li>Overlap working hours</li>
                                                    <li>SLA for response, handover & delivery</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>{/* /.tab-content */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
