import ContactUs from "@/components/contact/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Service from "@/components/Service/Service";
import Testimonials from "@/components/Testimonials/Testimonials";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
