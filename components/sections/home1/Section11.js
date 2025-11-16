
import Link from 'next/link'
import LogoTicker from '@/components/elements/LogoTicker'

export default function Section11() {
    return (
        <>
            <section id='find-us' className="section-box box-ready-started">
                <div className="container">
                        <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
                            <LogoTicker />
                        </div>
                        <br />
                    <div className="box-content-ready">
                        <h2 className="mb-20 text-48-semibold">Ready to get started?</h2>
                        <p className="text-lg neutral-700 mb-40">Start conquering the heights of your business career with our
                            platform. Collaborate with other businesses to grow your business.</p><Link className="btn btn-brand-4" href="#">Get Started
                            <svg width={23} height={8} viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z" fill="true" />
                            </svg></Link>
                    </div>
                </div>

                 <div style={{marginTop: 70}} className="container">
                    <div className="box-map-wrapper">
                        <div className="box-map-header">
                            <h3 className="text-32-bold neutral-900 mb-10">Find us here</h3>
                            <p className="text-md neutral-600 mb-30">Visit Pondok Programmer – our door’s always open for collaboration.</p>
                        </div>
                        <div className="box-map-iframe">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35065.35592615759!2d110.2572906743164!3d-7.996249699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a56e7f763c331%3A0xa1d804786b054aa6!2sPondok%20Programmer!5e1!3m2!1sid!2sus!4v1763267296923!5m2!1sid!2sus"
                                width="100%"
                                height={320}
                                style={{ border: 0, borderRadius: 12 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Pondok Programmer Location"
                                className="map-iframe"
                            />
                        </div>
                    </div>
                </div>
            </section>
               
        </>
    )
}
