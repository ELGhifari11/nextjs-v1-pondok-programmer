import { Urbanist } from 'next/font/google'
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "/public/assets/css/style.css"

const urban = Urbanist({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--tg-body-font-family",
    display: 'swap',
})


export const metadata = {
  title: 'Pondok Programmer | Software Engineering Agency',
  description: 'Build your digital product with the Pondok Programmer engineering team.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Pondok Programmer',
    description: 'Software Engineering Agency',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={urban.variable}>{children}</body>
        </html>
    )
}
