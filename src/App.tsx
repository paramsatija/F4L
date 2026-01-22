import { StickyNavigation } from './components/StickyNavigation';
import { Hero } from './components/Hero';
import { EventPosterSection } from './components/EventPosterSection';
import { VisionDestinationSection } from './components/VisionDestinationSection';
import { DesignerTimelineSection } from './components/DesignerTimelineSection';
import { EventTimelineSection } from './components/EventTimelineSection';
import { CelebrityGallery } from './components/CelebrityGallery';
import { RunwayShowcase } from './components/RunwayShowcase';
import { TicketsValentineSection } from './components/TicketsValentineSection';
import { FAQPressFooterSection } from './components/FAQPressFooterSection';

function App() {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <StickyNavigation />
      <main>
        <Hero />
        <VisionDestinationSection />
        <DesignerTimelineSection />
        <EventTimelineSection />
        <EventPosterSection />
        <CelebrityGallery />
        <RunwayShowcase />
        <TicketsValentineSection />
        <FAQPressFooterSection />
      </main>
    </div>
  );
}

export default App;
