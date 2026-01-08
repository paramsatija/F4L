import { Hero } from './components/Hero';
import { VisionSection } from './components/VisionSection';
import { PerformersHostsSection } from './components/PerformersHostsSection';
import { CelebrityGallery } from './components/CelebrityGallery';
import { ValentineExperience } from './components/ValentineExperience';
import { TicketsValentineSection } from './components/TicketsValentineSection';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="relative bg-black">
      <main>
        <Hero />
        <VisionSection />
        <PerformersHostsSection />
        <CelebrityGallery />
        <ValentineExperience />
        <TicketsValentineSection />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
