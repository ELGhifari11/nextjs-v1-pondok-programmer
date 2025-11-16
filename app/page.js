import Layout from "@/components/layout/Layout"
import Section1 from "@/components/sections/home1/Section1"
import Section14 from "@/components/sections/home1/section14"
import Section11 from "@/components/sections/home1/Section11"
import Section12 from "@/components/sections/home1/Section12"
import Section2 from "@/components/sections/home1/Section2"
import Section3 from "@/components/sections/home1/Section3"
import Section4 from "@/components/sections/home1/Section4"
import Section5 from "@/components/sections/home1/Section5"
import Section6 from "@/components/sections/home1/Section6"
import Section7 from "@/components/sections/home1/Section7"
import Section8 from "@/components/sections/home1/Section8"
import Section9 from "@/components/sections/home1/Section9"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={4} headerCls="header-style-2" topBar>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section14 />
                {/* <Section9 /> */}
                {/* <Section10 /> */}
                <Section11 />
                <Section12 />
            </Layout>
        </>
    )
}