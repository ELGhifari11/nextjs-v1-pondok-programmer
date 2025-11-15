'use client'
import Marquee from 'react-fast-marquee'

export default function LogoTicker() {
    return (
        <>
            <Marquee
                // style={{ width: "auto" }}    
                pauseOnHover={true}
                direction="left" className="carouselTicker__list list-logos">
                {[
                    { src: "/assets/imgs/page/homepage1/1.png", alt: "Hokben" },
                    { src: "/assets/imgs/page/homepage1/2.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/3.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/4.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/5.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/7.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/8.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/9.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/10.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/11.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/12.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/13.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/14.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/15.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/16.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/17.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/18.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/19.png", alt: "..." },
                    { src: "/assets/imgs/page/homepage1/20.png", alt: "..." }
                ]
                    .sort(() => Math.random() - 0.5)
                    .map((logo, idx) => (
                        <li key={idx} className="carouselTicker__item">
                            <div className="item-logo">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        </li>
                    ))}

            </Marquee>
        </>
    )
}
