import { CustomCursor } from './components/CustomCursor';
import { StickyNavigation } from './components/StickyNavigation';
import { Hero } from './components/Hero';
import { VisionDestinationSection } from './components/VisionDestinationSection';
import { DesignerTimelineSection } from './components/DesignerTimelineSection';
import { CelebrityGallery } from './components/CelebrityGallery';
import { PerformersHostsSection } from './components/PerformersHostsSection';
import { RunwayShowcase } from './components/RunwayShowcase';
import { TicketsValentineSection } from './components/TicketsValentineSection';
import { FAQPressFooterSection } from './components/FAQPressFooterSection';

function App() {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <CustomCursor />
      <StickyNavigation />
      <main>
        <Hero />
        <VisionDestinationSection />
        <DesignerTimelineSection />
        <CelebrityGallery />
        <PerformersHostsSection />
        <RunwayShowcase />
        <TicketsValentineSection />
        <FAQPressFooterSection />
      </main>
    </div>
  );
}

export default App;
