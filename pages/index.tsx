import type {NextPage} from 'next'
import Head from 'next/head'

import Header from "../components/header/Header";
import Introduction from "../components/introduction/Introduction";
import SectionDivider from "../components/ui/section-divider/SectionDivider";
import Portfolios from "../components/portfolios/Portfolios";
import Footer from "../components/footer/Footer";


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Herdy</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <Introduction/>
                <SectionDivider sectionName={"Portfolio"}/>
                <Portfolios/>
            </main>
            <Footer/>
        </>
    )
}

export default Home
