import { StickyNavigation } from './components/StickyNavigation';
import { Hero } from './components/Hero';
import { VisionDestinationSection } from './components/VisionDestinationSection';
import { DesignerTimelineSection } from './components/DesignerTimelineSection';
import { EventTimelineSection } from './components/EventTimelineSection';
import { CelebrityGallery } from './components/CelebrityGallery';
import { EventPhotoCarousels } from './components/EventPhotoCarousels';
import { RunwayShowcase } from './components/RunwayShowcase';
import { PartTwoNotify } from './components/PartTwoNotify';
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
        <CelebrityGallery />
        <EventPhotoCarousels />
        <RunwayShowcase />
        <PartTwoNotify />
        <FAQPressFooterSection />
      </main>
    </div>
  );
}

export default App;
