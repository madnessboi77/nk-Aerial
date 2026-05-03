import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stats } from '@/components/sections/Stats';
import { Works } from '@/components/sections/Works';
import { Team } from '@/components/sections/Team';
import { Skills } from '@/components/sections/Skills';
import { Testimonials } from '@/components/sections/Testimonials';
import { Services } from '@/components/sections/Services';
import { MediaCenter } from '@/components/sections/MediaCenter';
import { Contact } from '@/components/sections/Contact';
import { PageTransition } from '@/components/layout/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Stats />
      <Works />
      <Team />
      <Skills />
      <Testimonials />
      <Services />
      <MediaCenter />
      <Contact />
    </PageTransition>
  );
}
