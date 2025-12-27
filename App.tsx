import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyNow from './components/WhyNow';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Mentors from './components/Mentors';
import Info from './components/Info';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ApplyModal from './components/ApplyModal';
import { AuroraBackground } from './components/ui/AuroraBackground';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-red-500 selection:text-white">
      <AuroraBackground />
      
      <Header onApply={openModal} />
      
      <main>
        <Hero onApply={openModal} />
        <WhyNow />
        <Benefits />
        <Timeline />
        <Mentors />
        
        {/* Added FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>

        <Info />
        
        {/* Added Final CTA Section */}
        <FinalCTA onApply={openModal} />
      </main>

      <Footer />
      
      <ApplyModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;