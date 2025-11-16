
import Link from 'next/link'

export default function Section1() {
    return (
        <>
            <section className="section-box">
                <div className="banner-hero hero-3">
                    <div className="banner-inner">
                        <div className="container">
                            <div className="img-bg" />
                            <div className="blur-bg blur-move" />
                            <h1 className="display-2 mb-25">
                                Muslim Community Of
                                <br className="d-none d-lg-block" />
                                <span className="text-bg-brand-4">IT Generations</span>
                                <br className="d-none d-lg-block" />
                               With Integrity & Profesional
                            </h1>
                            <p className="text-lg mb-25">
                                A pesantren-based IT community that educates students to become professionals
                                <br className="d-none d-lg-block" /> while benefiting the ummah with noble moral values
                            </p>
                            <div className="box-download-app justify-content-center">
                                <Link href="#">
                                    <img style={{ width: '170px' }} src="/assets/imgs/page/homepage1/loveable.svg" alt="Google Play" />
                                </Link>
                                <Link href="#">
                                    <img style={{ width: '170px' }} src="/assets/imgs/page/homepage1/trusted.svg" alt="App Store" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
