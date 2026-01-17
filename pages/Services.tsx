
import React from 'react';
import { useApp } from '../AppContext';
import { Calendar, Users, FlaskConical, Map, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const { siteData } = useApp();

  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-neutral-950 industrial-texture">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
           <div className="w-full md:w-1/2">
             <span className="text-red-800 uppercase tracking-widest text-xs font-bold mb-4 block">Experiences</span>
             <h1 className="text-6xl font-serif mb-8 leading-tight">Elevated Engagements</h1>
             <p className="text-neutral-400 text-lg leading-relaxed mb-8">
               Beyond simply offering bottles, we offer journeys. From our weekly community tastings to private, expert-led cellar sessions, discover wine in a new light.
             </p>
             <button className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-red-900 hover:text-white transition-all">
               Schedule a Tasting
             </button>
           </div>
           <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&q=80&w=800" className="w-full h-64 object-cover grayscale" />
              <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" className="w-full h-64 object-cover grayscale mt-8" />
           </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: 'Weekly Community Tastings', icon: Calendar, desc: 'Every Saturday, we open a few select bottles for local enthusiasts to sample.' },
             { title: 'Private Group Sessions', icon: Users, desc: 'Tailored tasting experiences for small gatherings and corporate groups.' },
             { title: 'Low-Intervention Labs', icon: FlaskConical, desc: 'Educational sessions focusing on organic and biodynamic winemaking.' },
             { title: 'Curated Cellar Maps', icon: Map, desc: 'Custom wine lists curated specifically for your home cellar or private collection.' }
           ].map((service, idx) => (
             <div key={idx} className="bg-neutral-900 p-8 border border-neutral-800 hover:border-red-900 transition-all group">
                <service.icon className="text-red-900 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-[10px] uppercase tracking-widest text-red-800 hover:text-white">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </a>
             </div>
           ))}
        </div>
      </section>

      <section className="py-24 bg-neutral-950 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Featured Spirits</h2>
            <p className="text-neutral-500 uppercase tracking-widest text-xs">Exemplary domestic craftsmanship</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteData.products.slice(0, 4).map((p) => (
              <div key={p.id} className="text-center group">
                 <div className="aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
                   <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <h4 className="font-serif text-lg">{p.name}</h4>
                 <p className="text-neutral-500 text-xs uppercase tracking-tighter">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
