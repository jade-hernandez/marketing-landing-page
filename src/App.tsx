import { Navbar } from "./blocks/navigation/Navbar";

import { HeroSection } from "./blocks/hero-section/HeroSection";
import { LogoMarquee } from "./blocks/logo-marquee-section/LogoMarquee";
import { FeaturesSection } from "./blocks/features-section/FeaturesSection";
import { DesignerFeatures } from "./blocks/designer-features-section/DesignerFeatures";
import { ConvenienceFeatures } from "./blocks/convenience-features-section/ConvenienceFeatures";
import { ContactSection } from "./blocks/contact-section/ContactSection";

import { Footer } from "./blocks/footer/Footer";

function App() {
  return (
    <div
      id='page-body'
      className='mx-auto flex min-h-dvh w-full min-w-dvw flex-col items-center bg-linear-to-r from-[#F9FAFB] to-[#D2D6DB] p-4'
    >
      <Navbar />
      <div className='mt-4 flex w-full flex-col rounded-md bg-white'>
        <main className='flex flex-col'>
          <HeroSection />
          <LogoMarquee />
          <FeaturesSection />
          <DesignerFeatures />
          <ConvenienceFeatures />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export { App };
