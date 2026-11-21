import { useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Businesses from './components/Businesses.jsx';
import About from './components/About.jsx';
import Vision from './components/Vision.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  // Lets a division's "Learn More" link prefill the contact form.
  const [inquiry, setInquiry] = useState(null);
  const askAbout = useCallback((division) => {
    setInquiry({
      key: Date.now(),
      subject: `Enquiry about ${division.name}`,
      message: `Hello, I would like to know more about ${division.name}.`,
    });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Businesses onLearnMore={askAbout} />
        <About />
        <Vision />
        <Contact inquiry={inquiry} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
