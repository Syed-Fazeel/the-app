import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Header from '../components/Header'
import ClientSlider from '../components/ClientSlider'
import CaseStudies from '../components/CaseStudies'
import Journey from '../components/Journey'
import Process from '../components/Process'
import Technologies from '../components/Technologies'
import CtaBanner from '../components/CtaBanner'
import BlogSection from '../components/BlogSection'
import TriggerSection from '../components/TriggerSection'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Industries from '../components/Industries'

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Hero />
        <ClientSlider />
        <CaseStudies />
        <Journey />
        <Process />
        <Technologies />
        <CtaBanner />
         <Testimonial />
        <Industries />
       
        <BlogSection />
        <TriggerSection />
      </div>
      <Footer />
    </>
  )
}
