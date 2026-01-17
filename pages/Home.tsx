
import React from 'react';
import { useApp } from '../AppContext';
import { Link } from 'react-router-dom';
import { ChevronRight, Droplets, Heart, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  const { siteData } = useApp();

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${siteData.hero.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-red-700 uppercase tracking-[0.4em] text-xs mb-6 block font-bold animate-pulse">Established in Hudson Yards</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            {siteData.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {siteData.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="px-8 py-4 bg-red-900 hover:bg-red-800 text-white uppercase text-xs tracking-widest transition-all">
              Weekly Tastings
            </Link>
            <Link to="/destinations" className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white uppercase text-xs tracking-widest transition-all">
              Visit The Shop
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#0d0d0d] industrial-texture">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-800 uppercase tracking-widest text-[10px] font-bold mb-4 block">Our Commitment</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">{siteData.philosophy.title}</h2>
            <p className="text-neutral-400 leading-loose mb-10 text-lg italic">
              "{siteData.philosophy.content}"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="space-y-2">
                <Droplets className="text-red-800" size={24} />
                <h4 className="font-serif text-lg">Low Intervention</h4>
                <p className="text-xs text-neutral-500 uppercase tracking-tighter">Minimal processing</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-red-800" size={24} />
                <h4 className="font-serif text-lg">Clean Harvests</h4>
                <p className="text-xs text-neutral-500 uppercase tracking-tighter">No heavy pesticides</p>
              </div>
              <div className="space-y-2">
                <Heart className="text-red-800" size={24} />
                <h4 className="font-serif text-lg">Conscious Pour</h4>
                <p className="text-xs text-neutral-500 uppercase tracking-tighter">Curated wellness</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-neutral-800 transition-all group-hover:inset-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=2070" 
              alt="Wine pour" 
              className="relative grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/3">
             <div className="relative">
              <img 
                src={siteData.founder.image} 
                alt={siteData.founder.name} 
                className="w-full h-[500px] object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-serif">{siteData.founder.name}</h3>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Founder & Curator</p>
              </div>
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-serif mb-8">The Visionary Behind the Collection</h2>
            <p className="text-neutral-300 leading-relaxed text-lg mb-8 max-w-xl">
              {siteData.founder.bio}
            </p>
            <div className="p-8 border-l-4 border-red-900 bg-neutral-900/50 italic text-neutral-400">
              "Wine is an extension of the earth. My mission is to ensure that what we put in our bodies is as pure as the terrain it was harvested from."
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">The Current Selection</h2>
          <p className="text-neutral-500 max-w-lg mx-auto uppercase tracking-widest text-[10px]">A rotating gallery of exceptional domestic finds</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {siteData.products.filter(p => p.isFeatured).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-neutral-900 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Link to="/services" className="px-6 py-2 border border-white text-xs uppercase tracking-tighter">View Details</Link>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-red-800 mb-1">{product.origin}</p>
                <h4 className="text-xl font-serif mb-2">{product.name} {product.vintage}</h4>
                <p className="text-neutral-500 text-sm italic mb-4">"{product.description}"</p>
                <p className="text-lg font-serif tracking-widest">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center text-xs uppercase tracking-widest text-neutral-300 hover:text-red-800 transition-colors">
            Browse Entire Cellar <ChevronRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-burgundy/10 industrial-texture opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-serif mb-8">Never Miss a Tasting</h2>
          <p className="text-neutral-400 mb-12 text-lg">Receive exclusive updates on our weekly curated events and new arrivals directly from Michael and our sommelier.</p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow bg-neutral-900 border border-neutral-800 px-6 py-4 text-sm focus:outline-none focus:border-red-900"
            />
            <button className="bg-neutral-100 text-black px-10 py-4 text-xs uppercase font-bold tracking-widest hover:bg-red-900 hover:text-white transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
