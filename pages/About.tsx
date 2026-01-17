
import React from 'react';
import { useApp } from '../AppContext';

const About: React.FC = () => {
  const { siteData } = useApp();

  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-red-800 uppercase tracking-[0.4em] text-[10px] mb-4 block font-bold">The Origin</span>
          <h1 className="text-6xl font-serif mb-12">Curated with Intention</h1>
          <div className="w-24 h-1 bg-red-900 mx-auto mb-16"></div>
          <p className="text-2xl font-light italic text-neutral-300 leading-relaxed mb-12">
            Death Ave Wines isn't just a shop; it's a reflection of Hudson Yards' industrial grit evolving into modern luxury.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="bg-neutral-900 p-12 border border-neutral-800">
               <h3 className="text-3xl font-serif mb-6">Our Heritage</h3>
               <p className="text-neutral-400 leading-loose">
                 Inspired by the historic "Death Avenue" (the former name of 10th Avenue where freight trains once ran), our shop embraces the raw, uncompromising spirit of New York City. We believe that the best things are often found off the beaten path, much like the niche vineyards we partner with.
               </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1470133515603-78d9969c7bca?auto=format&fit=crop&q=80&w=2070" 
              alt="Vintage cellar" 
              className="w-full grayscale h-[400px] object-cover"
            />
          </div>
          <div className="space-y-12 pt-12 md:pt-40">
             <img 
              src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=2070" 
              alt="Tasting session" 
              className="w-full grayscale h-[400px] object-cover"
            />
            <div className="bg-neutral-900 p-12 border border-neutral-800">
               <h3 className="text-3xl font-serif mb-6">Our Sommelier Team</h3>
               <p className="text-neutral-400 leading-loose">
                 Our lead sommelier brings over a decade of high-end experience in Manhattan's most prestigious dining rooms. Together with Michael Tzezailidis, they hand-select every bottle, ensuring that each vintage tells a story of the soil, the season, and the soul of the winemaker.
               </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-serif mb-12">Our Core Values</h2>
           <div className="grid md:grid-cols-3 gap-12">
             <div className="p-8 border border-neutral-800 hover:border-red-900 transition-colors">
               <h4 className="text-xl font-serif mb-4">Integrity</h4>
               <p className="text-neutral-500 text-sm">We only carry what we believe in. No filler, no massive commercial labels.</p>
             </div>
             <div className="p-8 border border-neutral-800 hover:border-red-900 transition-colors">
               <h4 className="text-xl font-serif mb-4">Purity</h4>
               <p className="text-neutral-500 text-sm">Focusing on organic and biodynamic practices for a cleaner, more honest pour.</p>
             </div>
             <div className="p-8 border border-neutral-800 hover:border-red-900 transition-colors">
               <h4 className="text-xl font-serif mb-4">Education</h4>
               <p className="text-neutral-500 text-sm">Empowering our customers to understand the 'why' behind the wine.</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
