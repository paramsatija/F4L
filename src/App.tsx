import { CustomCursor } from './components/CustomCursor';
import { StickyNavigation } from './components/StickyNavigation';
import { StickyFloatingCTA } from './components/StickyFloatingCTA';
import { Hero } from './components/Hero';
import { VisionDestinationSection } from './components/VisionDestinationSection';
import { InlineCTA } from './components/InlineCTA';
import { DesignerTimelineSection } from './components/DesignerTimelineSection';
import { CelebrityGallery } from './components/CelebrityGallery';
import { PerformersHostsSection } from './components/PerformersHostsSection';
import { RunwayShowcase } from './components/RunwayShowcase';
import { SocialProofSection } from './components/SocialProofSection';
import { ValueBreakdownSection } from './components/ValueBreakdownSection';
import { TicketsValentineSection } from './components/TicketsValentineSection';
import { PracticalInfoSection } from './components/PracticalInfoSection';
import { FAQPressFooterSection } from './components/FAQPressFooterSection';

function App() {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <CustomCursor />
      <StickyNavigation />
      <StickyFloatingCTA />
      <main>
        <Hero />
        <InlineCTA variant="minimal" message="See Tickets" />
        <VisionDestinationSection />
        <InlineCTA
          variant="bold"
          message="Be Part of History"
          subtext="Limited seats remaining for this once-in-a-lifetime experience"
        />
        <DesignerTimelineSection />
        <SocialProofSection />
        <InlineCTA
          variant="romantic"
          message="Experience This Live"
          subtext="Join hundreds of fashion lovers for an unforgettable evening"
        />
        <CelebrityGallery />
        <PerformersHostsSection />
        <RunwayShowcase />
        <ValueBreakdownSection />
        <TicketsValentineSection />
        <PracticalInfoSection />
        <FAQPressFooterSection />
      </main>
    </div>
  );
}

export default App;
