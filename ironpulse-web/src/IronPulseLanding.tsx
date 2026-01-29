import { AboutSection } from './ironpulse-landing/components/AboutSection';
import { CTASection } from './ironpulse-landing/components/CTASection';
import { Footer } from './ironpulse-landing/components/Footer';
import { HeroSection } from './ironpulse-landing/components/HeroSection';
import { MembershipSection } from './ironpulse-landing/components/MembershipSection';
import { ProgramsSection } from './ironpulse-landing/components/ProgramsSection';
import { TestimonialsSection } from './ironpulse-landing/components/TestimonialsSection';
import { TrainersSection } from './ironpulse-landing/components/TrainersSection';
import { WhyChooseUs } from './ironpulse-landing/components/WhyChooseUs';

const IronPulseLanding = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <TrainersSection />
      <MembershipSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default IronPulseLanding;

