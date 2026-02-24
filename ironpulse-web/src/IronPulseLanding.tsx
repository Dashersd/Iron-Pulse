import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AboutSection } from './ironpulse-landing/components/AboutSection';
import { CTASection } from './ironpulse-landing/components/CTASection';
import { Footer } from './ironpulse-landing/components/Footer';
import { HeroSection } from './ironpulse-landing/components/HeroSection';
import { MembershipSection } from './ironpulse-landing/components/MembershipSection';
import { ProgramsSection } from './ironpulse-landing/components/ProgramsSection';
import { TestimonialsSection } from './ironpulse-landing/components/TestimonialsSection';
import { TrainersCoverflow } from './ironpulse-landing/components/TrainersCoverflow';
import { WhyChooseUs } from './ironpulse-landing/components/WhyChooseUs';
import { FaceRecognition } from './ironpulse-landing/components/FaceRecognition';

const IronPulseLanding = () => {
  const [showFaceScan, setShowFaceScan] = useState(false);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section passes the setter to trigger face recognition */}
      <HeroSection onFaceScanTrigger={() => setShowFaceScan(true)} />

      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <TrainersCoverflow />
      <MembershipSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />

      <AnimatePresence>
        {showFaceScan && (
          <FaceRecognition onClose={() => setShowFaceScan(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IronPulseLanding;
