'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()
    useEffect(() => {
        pathname === "/" ? document.querySelector("body").classList.add("homepage3-bg") : document.querySelector("body").classList.remove("homepage3-bg")

    })
}
