import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Ticker from './components/home/Ticker';
import ActivitySection from './components/home/ActivitySection';
import QuickService from './components/home/QuickService';
import NewsSection from './components/home/NewsSection';

import MissionSection from './components/home/MissionSection';
import MediaHub from './components/home/MediaHub';
import Footer from './components/layout/Footer';
import SectionIndicator from './components/layout/SectionIndicator';

function App() {
  return (
    <div className="h-screen w-full overflow-hidden bg-primary">
      <Header />
      <SectionIndicator />
      
      <main className="snap-container h-full w-full">
        {/* Page 1: Home (Hero + Ticker) */}
        <section id="home" className="snap-section flex flex-col">
          <div className="flex-1 min-h-0">
            <Hero />
          </div>
          <Ticker />
        </section>
        
        {/* Page 2: Activities & Services */}
        <section id="activity" className="snap-section bg-surface overflow-y-auto">
          <div className="flex flex-col min-h-full">
            <ActivitySection />

          </div>
        </section>
        
        {/* Page 3: News */}
        <section id="news" className="snap-section bg-white overflow-y-auto">
          <NewsSection />
          <QuickService />
        </section>
        

        
        {/* Page 5: Global Mission */}
        <section id="mission" className="snap-section overflow-y-auto">
          <MissionSection />
        </section>
        
        {/* Page 6: Social Hub */}
        <section id="media" className="snap-section bg-white">
          <MediaHub />
        </section>

        {/* Page 7: Footer */}
        <section id="footer" className="snap-section">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
